import React from "react";

import { ComponentColor, ComponentSize } from "components/@types";

import Button from "../Button";

export type DropdownToggleProps = Omit<
  React.LabelHTMLAttributes<HTMLLabelElement>,
  "color"
> & {
  color?: ComponentColor;
  size?: ComponentSize;
  button?: boolean;
  disabled?: boolean;
};

const DropdownToggle = ({
  children,
  color,
  size,
  button = true,
  className,
  disabled,
  ...props
}: DropdownToggleProps) => {
  return (
    <label tabIndex={0} className={className} {...props}>
      {button ? (
        <Button type="button" color={color} size={size} disabled={disabled}>
          {children}
        </Button>
      ) : (
        children
      )}
    </label>
  );
};

export default DropdownToggle;
