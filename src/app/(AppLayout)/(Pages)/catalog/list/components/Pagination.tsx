"use client";
import React from "react";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { DOTS, usePagination } from "@/hooks/usePagination";
import { createQueryString } from "@/lib/utils";

type Props = {
  basePath: string;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  className?: string;
};

const Pagination = (props: Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const {
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
  const handlePageChange = (pageNumber: string) => {
    router.push(
      pathname + "?" + createQueryString(searchParams, "page", pageNumber)
    );
  };
  return (
    <ul className="my-5 flex justify-center">
      <button
        className={classes}
        disabled={currentPage === 1}
        onClick={() => handlePageChange("1")}
      >
        <BiChevronsLeft />
      </button>
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
          <button
            className={clsx(classes, {
              "bg-gray-200": currentPage === pageNumber,
            })}
            disabled={currentPage === pageNumber}
            key={i}
            onClick={() => handlePageChange(pageNumber.toString())}
          >
            {pageNumber}
          </button>
        );
      })}
      <button
        className={classes}
        disabled={currentPage === paginationRange[paginationRange.length - 1]}
        onClick={() =>
          handlePageChange(
            paginationRange[paginationRange.length - 1].toString()
          )
        }
      >
        <BiChevronsRight />
      </button>
    </ul>
  );
};

export default Pagination;
