import React, { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentSize } from "../@types";

export type InputGroupProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  size?: ComponentSize;
  vertical?: boolean;
};

const InputGroup = forwardRef<HTMLLabelElement, InputGroupProps>(
  ({ children, size, vertical, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      "input-group",
      className,
      clsx({
        [`input-group-${size}`]: size,
        "input-group-vertical": vertical,
      })
    );

    return (
      <label {...props} className={classes}>
        {children}
      </label>
    );
  }
);

InputGroup.displayName = "InputGroup";

export default InputGroup;
