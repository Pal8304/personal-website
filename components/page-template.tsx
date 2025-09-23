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
    <div className="flex flex-row w-full justify-center items-start min-h-screen py-32">
      <div className="flex flex-col items-start justify-start w-2/3 max-w-4xl">
        <div className="mb-8">
          <div className="text-6xl mb-3">
            {title}
          </div>
          <div className="text-2xl opacity-50">
            {subtitle}
          </div>
        </div>
        <div className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
