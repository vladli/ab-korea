import React, { ReactElement, type JSX } from "react";

export type TableFooterProps =
  React.TableHTMLAttributes<HTMLTableSectionElement> & {
    children?: ReactElement<any>[];
  };

const TableFooter = React.forwardRef<HTMLTableSectionElement, TableFooterProps>(
  ({ children, ...props }, ref): JSX.Element => {
    return (
      <tfoot
        {...props}
        ref={ref}
      >
        <tr>
          {children?.map((child, i) => {
            return <th key={i}>{child}</th>;
          })}
        </tr>
      </tfoot>
    );
  }
);

export default TableFooter;
