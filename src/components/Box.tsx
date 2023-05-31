import React, { ReactNode } from "react";
import clsx from "clsx";

function Box({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={clsx("w-full", className)}>{children}</div>;
}

export default Box;
