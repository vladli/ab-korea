import React, { ReactElement } from "react";
import clsx from "clsx";

type Props = {
  className?: string;
  children: ReactElement | string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">;

function Button({ className, children, ...rest }: Props) {
  return (
    <button
      className={clsx(
        "rounded p-2 transition-colors duration-200 ease-in-out hover:bg-white/10",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
