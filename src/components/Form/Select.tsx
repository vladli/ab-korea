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
  label?: string;
  required?: boolean;
  formControl?: boolean;
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
    label,
    required,
    formControl = false,
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
  if (formControl) {
    return (
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">
            {label} {required ? <span className="text-red-500">*</span> : null}
          </span>
        </label>
        <select
          {...rest}
          className={classes}
          ref={ref}
        >
          {children}
        </select>
      </div>
    );
  }
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
