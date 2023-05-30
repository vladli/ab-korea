import { forwardRef } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import TableRow from "./TableRow";

type Props = React.TableHTMLAttributes<HTMLTableElement> & {
  data?: any[];
  columns?: any[];
  pageSize?: number;
  compact?: boolean;
  zebra?: boolean;
};

const Table = forwardRef<HTMLTableElement, Props>((props, ref) => {
  const { compact, zebra, className, children, ...rest } = props;

  const classes = twMerge(
    "table",
    className,
    clsx({
      "table-zebra": zebra,
      "table-compact": compact,
    })
  );
  return (
    <table
      {...rest}
      className={classes}
      ref={ref}
    >
      {children}
    </table>
  );
});

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Row: TableRow,
});
