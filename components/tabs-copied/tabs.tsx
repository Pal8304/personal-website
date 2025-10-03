// Ref: https://bright.codehike.org/recipes/tabs

import { Code } from "bright";
import { tabs } from "./extensions";
import { getIconFromTitle } from "./file-icons";

/** @type {import("bright").Extension} */
const title = {
  name: "title",
  beforeHighlight: (props: any, annotations: any) => {
    if (props.title) {
      return {
        ...props,
        title: props.title,
        icon: getIconFromTitle(props.title, props.lang),
      };
    }
    if (annotations.length > 0) {
      return { ...props, title: annotations[0].query };
    }
  },
};

export function Tabs({ children }: { children: React.ReactNode }) {
  return <Code extensions={[title, tabs]}>{children}</Code>;
}
