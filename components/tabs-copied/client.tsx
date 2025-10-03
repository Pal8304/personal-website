"use client";

import * as RadixTabs from "@radix-ui/react-tabs";
import React from "react";

export function TabsRoot({
  children,
  defaultValue,
}: {
  children: React.ReactNode;
  defaultValue: string;
}) {
  return (
    <RadixTabs.Root defaultValue={defaultValue}>{children}</RadixTabs.Root>
  );
}

/**
 * TabsList:
 * - titles: array of tab values (each value should match the Content value)
 * - children: the custom trigger elements (one per title)
 *
 * This uses Radix's asChild so the element you pass becomes the real Trigger DOM node.
 */
export function TabsList({
  titles,
  children,
}: {
  titles: string[];
  children: React.ReactNode;
}) {
  const triggers = React.Children.toArray(children);
  return (
    <RadixTabs.List style={{ display: "flex", gap: 8 }}>
      {titles.map((title, i) => {
        const triggerEl = triggers[i] || <button>{title}</button>;
        return (
          <RadixTabs.Trigger asChild key={title + i} value={title}>
            {triggerEl}
          </RadixTabs.Trigger>
        );
      })}
    </RadixTabs.List>
  );
}

/**
 * TabsContent:
 * - wraps content and makes it the actual Tabs.Content via asChild.
 * - no animation here (keeps behavior simple & robust)
 */
export function TabsContent({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) {
  return (
    <RadixTabs.Content value={value} asChild>
      <div style={{ width: "100%" }}>{children}</div>
    </RadixTabs.Content>
  );
}
