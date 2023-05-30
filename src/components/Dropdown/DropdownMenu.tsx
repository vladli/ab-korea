import React from "react";
import { twMerge } from "tailwind-merge";

export type DropdownMenuProps = React.HTMLAttributes<HTMLUListElement>;

const DropdownMenu = ({ className, ...props }: DropdownMenuProps) => {
  const classes = twMerge(
    "dropdown-content menu p-2 shadow bg-base-100 rounded-box",
    className
  );

  return <ul {...props} tabIndex={0} className={classes} />;
};

export default DropdownMenu;
