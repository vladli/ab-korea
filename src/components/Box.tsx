import React, { ReactNode } from "react";

function Box({ children }: { children: ReactNode }) {
  return <div className="w-full">{children}</div>;
}

export default Box;
