import { forwardRef, type JSX } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor } from "./@types";

export type RadialProgressProps = React.HTMLAttributes<HTMLDivElement> & {
  value: number;
  size?: string;
  thickness?: string;
  color?: ComponentColor;
};

const RadialProgress = forwardRef<HTMLDivElement, RadialProgressProps>(
  (
    {
      value,
      size = "4rem",
      thickness = "4px",
      color,
      className,
      children,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      "radial-progress",
      className,
      clsx({
        [`text-${color}`]: color,
      })
    );

    const displayedValue = Math.min(100, Math.max(0, value));
    const progressStyle: Record<string, string | number> = {
      "--value": displayedValue,
      "--size": size,
      "--thickness": thickness,
    };

    return (
      <div
        role="progressbar"
        aria-valuenow={displayedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
        ref={ref}
        className={classes}
        style={progressStyle}
      >
        {children}
      </div>
    );
  }
);

RadialProgress.displayName = "RadialProgress";

export default RadialProgress;
