import { twMerge } from "tailwind-merge";

import type { JSX } from "react";

export type CollapseContentProps = React.HTMLAttributes<HTMLDivElement>;

const CollapseContent = ({
  children,
  className,
  ...props
}: CollapseContentProps): JSX.Element => {
  const classes = twMerge("collapse-content", className);

  return (
    <div
      {...props}
      className={classes}
    >
      {children}
    </div>
  );
};

export default CollapseContent;
