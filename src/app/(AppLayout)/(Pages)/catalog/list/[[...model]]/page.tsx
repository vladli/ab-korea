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

export const metadata: Metadata = {
  title: titles.catalog,
};

type Props = {
  params: {
    model?: string[];
  };
  searchParams: {
    page?: number;
  };
};

async function Page({ params, searchParams }: Props) {
  const { page = 1 } = searchParams;

  let maker: string | undefined;
  let model: string | undefined;
  if (params.model && Array.isArray(params.model)) {
    maker = params.model[0];
    model = params.model[1];
  }

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
      <div className="mt-5 grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {currentItems?.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
        ))}
      </div>
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
