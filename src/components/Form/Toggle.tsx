import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "components/@types";

export type ToggleProps = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
};

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ color, size, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "toggle",
      className,
      clsx({
        [`toggle-${size}`]: size,
        [`toggle-${color}`]: color,
      })
    );

    return <input {...props} ref={ref} type="checkbox" className={classes} />;
  }
);

Toggle.displayName = "Toggle";

export default Toggle;
