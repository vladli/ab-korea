import React from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import clsx from "clsx";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

import { DOTS, usePagination } from "@/hooks/usePagination";

type Props = {
  basePath: string;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  className?: string;
};

const Pagination = (props: Props) => {
  const {
    basePath,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (
    currentPage === 0 ||
    paginationRange === undefined ||
    paginationRange.length < 2
  ) {
    return null;
  }
  const classes = twMerge(
    "px-3 py-1 mx-1 flex items-center transition-colors hover:bg-gray-300"
  );
  return (
    <ul className="my-5 flex justify-center">
      <Link
        className={classes}
        href={`${basePath}?page=${1}`}
      >
        <BiChevronsLeft />
      </Link>
      {paginationRange?.map((pageNumber, i) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className="flex items-end"
              key={i}
            >
              &#8230;
            </li>
          );
        }

        return (
          <Link
            className={clsx(classes, {
              "bg-gray-200": currentPage === pageNumber,
            })}
            href={`${basePath}?page=${pageNumber}`}
            key={i}
          >
            {pageNumber}
          </Link>
        );
      })}
      <Link
        className={classes}
        href={`${basePath}?page=${paginationRange[paginationRange.length - 1]}`}
      >
        <BiChevronsRight />
      </Link>
    </ul>
  );
};

export default Pagination;
