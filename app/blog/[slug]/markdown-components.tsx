import Link from "next/link";
import { MDXComponents } from "mdx/types";
import { Tabs } from "@/components/tabs-copied/tabs";
import { Code } from "bright";
import { TabsWrapper } from "@/components/tabs-copied/bright-tabs-extension";
Code.lineNumbers = true;
Code.theme = "dracula";

export const mdxComponents: MDXComponents = {
  a: ({ children, ...props }) => {
    return (
      <Link
        {...props}
        href={props.href || ""}
        className="hover:opacity-80" 
      >
        {children}
      </Link>
    );
  },

  h1: ({ children, ...props }) => (
    <h1
      className="text-4xl font-bold my-2 border-b border-gray-200 pb-2"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }) => (
    <h2 className="text-3xl font-bold my-2" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }) => (
    <h3 className="text-2xl font-semibold my-2 " {...props}>
      {children}
    </h3>
  ),
  h4: ({ children, ...props }) => (
    <h4 className="text-xl font-semibold my-2" {...props}>
      {children}
    </h4>
  ),

  p: ({ children, ...props }) => (
    <p className="my-2 leading-7" {...props}>
      {children}
    </p>
  ),

  ul: ({ children, ...props }) => (
    <ul className="list-disc list-inside my-2 space-y-2" {...props}>
      {children}
    </ul>
  ),
  ol: ({ children, ...props }) => (
    <ol className="list-decimal list-inside my-2 space-y-2" {...props}>
      {children}
    </ol>
  ),
  li: ({ children, ...props }) => (
    <li className="ml-6 leading-6" {...props}>
      {children}
    </li>
  ),
  //   img: ({ children, ...props }) => {
  //     // You need to do some work here to get the width and height of the image.
  //     // See the details below for my solution.
  //     return <Image {...props} />
  //   },
  pre: Code,
  Tabs: TabsWrapper,
  // any other components you want to use in your markdown
};
