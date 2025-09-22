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
    <div className="flex flex-row w-full justify-center items-center h-full">
      <div className="flex flex-col items-start justify-start w-2/3 h-full py-32">
        <div className="mb-6 w-full">
          <div className="text-6xl mb-1">
            {title}
          </div>
          <div className="text-2xl opacity-50">
            {subtitle}
          </div>
        </div>
        <div className="flex-1 w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
