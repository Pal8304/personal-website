import React from "react";

export default function PageTemplate({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row">
      <div className="text-6xl">{title}</div>
      <div className="text-2xl">{subtitle}</div>
      <div>{children}</div>
    </div>
  );
}
