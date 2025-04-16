import React from "react";
import { Catalog } from "@prisma/client";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import {
  filterBy,
  findByMaker,
  findByMakerAndModel,
  FuelType,
  isValidMaker,
  isValidModel,
  Transmission,
} from "@/config/cars";
import { titles } from "@/config/config";
import { getCars } from "@/lib/cars";

import Item from "./components/Item";
import Pagination from "./components/Pagination";
import SearchFilter from "./components/SearchFilter";

export const metadata: Metadata = {
  title: titles.catalog,
};

type Props = {
  searchParams: Promise<{
    page?: number;
    maker?: string;
    model?: string;
    range?: number;
    yearStart?: number;
    yearEnd?: number;
    auctionMark?: string;
    wheelDrive?: string;
    fuel?: string;
    transmission?: string;
  }>;
};

async function Page(props: Props) {
  const searchParams = await props.searchParams;
  const {
    page = 1,
    maker,
    model,
    range: rangeStartString,
    yearStart: yearStartString,
    yearEnd: yearEndString,
    auctionMark,
    wheelDrive,
    fuel,
    transmission,
  } = searchParams;
  const range = rangeStartString ? Number(rangeStartString) : undefined;
  const yearStart = yearStartString ? Number(yearStartString) : undefined;
  const yearEnd = yearEndString ? Number(yearEndString) : undefined;

  let data = await getCars();
  if (maker && !model && isValidMaker(maker)) {
    data = findByMaker(data, maker);
  }
  if (maker && model && isValidModel(maker, model)) {
    data = findByMakerAndModel(data, maker, model);
  }
  const filterParams: Array<{
    filter: keyof Catalog;
    value: string | number | undefined;
  }> = [
    { filter: "Range", value: range },
    { filter: "AuctionMark", value: auctionMark },
    { filter: "WheelDrive", value: wheelDrive },
    { filter: "FuelType", value: FuelType.find((obj) => obj.en === fuel)?.ru },
    {
      filter: "Transmission",
      value: Transmission.find((obj) => obj.en === transmission)?.ru,
    },
  ];

  filterParams.forEach((param) => {
    if (param.value) {
      data = filterBy(param.filter, param.value, data);
    }
  });

  const itemsPerPage = 8;
  const offset = (page - 1) * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <Box className="mb-5">
      <div className="flex flex-col items-center">
        <h2 className="text-center">Каталог автомобилей с аукциона Lotte</h2>
        <span className="text-sm opacity-70">
          (Информация обновляется еженедельно по пятницам)
        </span>
      </div>
      <section className="rounded-box my-5 bg-gray-100">
        <SearchFilter />
      </section>
      <section className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {currentItems?.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
        ))}
      </section>
      <Pagination
        basePath="/catalog/list"
        currentPage={Number(page)}
        pageSize={itemsPerPage}
        totalCount={data.length}
      />
    </Box>
  );
}

export default Page;
