import { Code, Root as CodeRoot } from "bright";
import { TabsRoot, TabsContent, TabsList } from "./client";

/** @type {import("bright").BrightProps["TitleBarContent"]} */
function TitleBarComponent(brightProps : any) {
  const { subProps, title, Tab } = brightProps;
  const titles = subProps?.length
    ? subProps.map((subProp : any) => subProp.title)
    : [title];
  const childProps = subProps?.length ? subProps : [brightProps];
  return (
    <TabsList titles={titles}>
      {titles.map((title : string, i : number) => (
        <Tab key={title} {...childProps[i]} />
      ))}
    </TabsList>
  );
}

/** @type {import("bright").BrightProps["Root"]} */
function Root(brightProps : any) {
  const { subProps, title } = brightProps;

  const titles = subProps?.length
    ? subProps.map((subProp : any) => subProp.title)
    : [title];

  return (
    <TabsRoot defaultValue={titles[0]}>
      <style
        dangerouslySetInnerHTML={{
          __html: `
[data-bright-tab][data-state="inactive"]{ 
  --tab-background: var(--inactive-tab-background);
  --tab-color: var(--inactive-tab-color);; 
  --tab-bottom-border: transparent;
  --tab-top-border: transparent;
}`,
        }}
      />
      <Code.Root {...brightProps} />
    </TabsRoot>
  );
}

/** @type {import("bright").BrightProps["Pre"]} */
function Content(brightProps : any) {
  const { subProps } = brightProps;
  const propsList = subProps?.length ? subProps : [brightProps];
  return (
    <>
      {propsList.map((props : any) => (
        <TabsContent key={props.title} value={props.title}>
          <Code.Pre {...props} />
        </TabsContent>
      ))}
    </>
  );
}

/** @type {import("bright").Extension} */
export const tabs = {
  name: "tabs",
  Root,
  TitleBarContent: TitleBarComponent,
  Pre: Content,
};
