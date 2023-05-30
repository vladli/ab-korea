import clsx from "clsx";
import { ComponentColor, ComponentSize } from "components/@types";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export type Props = Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size" | "color"
> & {
  bordered?: boolean;
  borderOffset?: boolean;
  size?: ComponentSize;
  color?: ComponentColor;
  name: string;
  register?: any;
  labeled?: boolean;
  label?: string | null;
  required?: boolean;
};

const Input = forwardRef<HTMLInputElement, Props>(
  (
    {
      name,
      register,
      required,
      labeled = false,
      label,
      bordered = true,
      borderOffset,
      size,
      color,
      className,
      ...rest
    },
    ref
  ) => {
    const classes = twMerge(
      "input",
      className,
      clsx({
        [`input-${size}`]: size,
        [`input-${color}`]: color,
        [`focus:outline-offset-0`]: !borderOffset,
        "input-bordered": bordered,
      })
    );
    return (
      <div className="form-control w-full max-w-xs">
        {labeled && (
          <label className="label">
            <span className="label-text font-semibold">
              {label}
              {required && <span className="ml-1 text-red-500">{"*"}</span>}
            </span>
          </label>
        )}
        <input
          ref={ref}
          className={classes}
          id={name}
          {...(register && register(name, { required }))}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
