import React from "react";
import { Code } from "bright";
import { TabsRoot, TabsList, TabsContent } from "./client";
import { getIconFromTitle } from "./file-icons";

/** TitleBarComponent used by Bright to render the tab triggers */
function TitleBarComponent(brightProps: any) {
  const { subProps, title } = brightProps;
  const childProps = subProps?.length ? subProps : [brightProps];

  const titles: string[] = childProps.map(
    (p: any) => p.title || p.lang || "untitled"
  );

  return (
    <TabsList titles={titles}>
      {titles.map((t: string, i: number) => {
        const props = childProps[i] || {};
        let displayText: string = t || props.title || `tab-${i + 1}`;
        const icon = getIconFromTitle(props.title, props.lang);

        const dotIndex = displayText.lastIndexOf(".");
        if (dotIndex > 0) {
          displayText = displayText.substring(0, dotIndex);
        }
        if (displayText.lastIndexOf("/") >= 0) {
          displayText = displayText.substring(displayText.lastIndexOf("/") + 1);
        }

        return (
          // This button becomes the real Radix Trigger via TabsList -> asChild
          <button
            key={displayText + i}
            type="button"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-sm select-none
                       hover:bg-white/3 data-[state='active']:bg-white/6"
            title={displayText}
          >
            <span className="inline-flex items-center text-xs">{icon}</span>
            <span className="truncate max-w-[14rem]">{displayText}</span>
          </button>
        );
      })}
    </TabsList>
  );
}

/** Root wraps Bright's Code.Root with our TabsRoot and optional styling */
function Root(brightProps: any) {
  const { subProps, title } = brightProps;
  const titles = subProps?.length
    ? subProps.map((s: any) => s.title || s.lang || "tab")
    : [title || "tab"];

  return (
    <TabsRoot defaultValue={titles[0]}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
[data-bright-tab][data-state="inactive"]{ 
  --tab-background: var(--inactive-tab-background);
  --tab-color: var(--inactive-tab-color); 
  --tab-bottom-border: transparent;
  --tab-top-border: transparent;
}`,
        }}
      />
      {/* Bright will render the TitleBarContent and Pre inside Code.Root */}
      {Code.Root && Code.Root(brightProps)}
    </TabsRoot>
  );
}

/** Content: maps each bright Pre to our TabsContent panel */
function Content(brightProps: any) {
  const { subProps } = brightProps;
  const propsList = subProps?.length ? subProps : [brightProps];

  return (
    <>
      {propsList.map((props: any) => (
        <TabsContent
          key={props.title || props.lang}
          value={props.title || props.lang || "tab"}
        >
          {Code.Pre && Code.Pre(props)}
        </TabsContent>
      ))}
    </>
  );
}

/** Bright extension object */
export const tabs = {
  name: "tabs",
  Root,
  TitleBarContent: TitleBarComponent,
  Pre: Content,
};

/** A small wrapper you can import into mdxComponents if you prefer */
export function TabsWrapper({ children }: { children: React.ReactNode }) {
  return <Code extensions={[tabs]}>{children}</Code>;
}
