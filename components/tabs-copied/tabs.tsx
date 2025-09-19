// Ref: https://bright.codehike.org/recipes/tabs

import { Code } from "bright";
import { tabs } from "./extensions";

/** @type {import("bright").Extension} */
const title = {
  name: "title",
  beforeHighlight: (props: any, annotations: any) => {
    if (annotations.length > 0) {
      return { ...props, title: annotations[0].query };
    }
  },
};

export function Tabs({ children }: { children: React.ReactNode }) {
  return <Code extensions={[title, tabs]}>{children}</Code>;
}
