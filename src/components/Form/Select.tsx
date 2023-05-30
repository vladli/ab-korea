import React, { ReactElement } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import { ComponentColor, ComponentSize } from "@/components/@types";

export type SelectProps = Omit<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  "size" | "color"
> & {
  children: ReactElement<SelectOptionProps>[];
  size?: ComponentSize;
  color?: ComponentColor;
  bordered?: boolean;
  borderOffset?: boolean;
};

const SelectInner = (
  props: SelectProps,
  ref: React.ForwardedRef<HTMLSelectElement>
): JSX.Element => {
  const {
    children,
    size,
    color,
    bordered = true,
    borderOffset,
    className,
    ...rest
  } = props;

  const classes = twMerge(
    "select focus:outline-none",
    className,
    clsx({
      [`select-${size}`]: size,
      [`select-${color}`]: color,
      [`focus:outline-offset-0`]: !borderOffset,
      "select-bordered": bordered,
    })
  );

  return (
    <select
      {...rest}
      className={classes}
      ref={ref}
    >
      {children}
    </select>
  );
};

export type SelectOptionProps = React.OptionHTMLAttributes<HTMLOptionElement>;

const SelectOption = ({
  children,
  ...props
}: SelectOptionProps): JSX.Element => {
  return <option {...props}>{children}</option>;
};

const Select = React.forwardRef(SelectInner);
export default Object.assign(Select, { Option: SelectOption });
