import React from "react";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import {
  findByMaker,
  findByMakerAndModel,
  isValidMaker,
  isValidModel,
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
  searchParams: {
    page?: number;
    maker?: string;
    model?: string;
  };
};

async function Page({ searchParams }: Props) {
  const { page = 1, maker, model } = searchParams;

  console.log(searchParams);

  let data = await getCars();
  if (maker && !model && isValidMaker(maker)) {
    data = findByMaker(data, maker);
  }
  if (maker && model && isValidModel(maker, model)) {
    data = findByMakerAndModel(data, maker, model);
  }

  const itemsPerPage = 8;
  const offset = (page - 1) * itemsPerPage;
  const currentItems = data.slice(offset, offset + itemsPerPage);

  return (
    <Box>
      <div className="flex flex-col items-center">
        <h2 className="text-center">Каталог автомобилей с аукциона Lotte</h2>
        <span className="text-sm opacity-70">
          (Информация обновляется еженедельно по пятницам)
        </span>
      </div>
      <section className="rounded-box  bg-gray-100">
        <SearchFilter />
      </section>
      <section className="mt-5 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
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
