import { Updater } from "@tanstack/react-table";
import ReactPaginate from "react-paginate";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  pageCount: number;
  onPageChange: any;
  state: any;
  setPageSize: (updater: Updater<number>) => void;
};

export default function Pagination({
  className,
  state,
  pageCount,
  onPageChange,
  setPageSize,
}: Props) {
  const linkClasses =
    "flex flex-1 h-full justify-center items-center m-[-1rem]";
  const classes = twMerge("mt-2 flex items-center justify-center", className);
  return (
    <div className={classes}>
      <ReactPaginate
        pageCount={pageCount}
        onPageChange={onPageChange}
        containerClassName="btn-group ml-2"
        pageClassName="btn"
        pageLinkClassName={linkClasses}
        activeClassName="btn-active"
        previousClassName="btn"
        previousLinkClassName={linkClasses}
        nextClassName="btn"
        nextLinkClassName={linkClasses}
        disabledClassName="btn-disabled"
        previousLabel={"<"}
        nextLabel={">"}
      />
      <select
        className="select ml-2"
        value={state.pagination.pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>
    </div>
  );
}
