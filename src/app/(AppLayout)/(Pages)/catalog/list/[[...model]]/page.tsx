import React from "react";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import type { CarData } from "@/config/@types";
import {
  findByMaker,
  findByMakerAndModel,
  isValidMaker,
  isValidModel,
} from "@/config/cars";
import { titles } from "@/config/config";

import Item from "./components/Card";

export const metadata: Metadata = {
  title: titles.catalog,
};

async function getItems(): Promise<CarData[]> {
  const result = await fetch(`${process.env.WEBSITE}/api/catalog/item?`);

  const data = await result.json();
  return data;
}

type Props = {
  params: {
    model: string[];
  };
};

async function Page({ params }: Props) {
  let maker: string | undefined;
  let model: string | undefined;
  if (params.model && Array.isArray(params.model)) {
    maker = params.model[0];
    model = params.model[1];
  }

  let data = await getItems();

  if (maker && !model && isValidMaker(maker)) {
    data = findByMaker(data, maker);
  }
  if (maker && model && isValidModel(maker, model)) {
    data = findByMakerAndModel(data, maker, model);
  }
  return (
    <Box className="m-5">
      <h3 className="rounded-full bg-white text-center">
        В каталоге предоставлены автомобили с аукциона Lotte. Информация
        обновляется еженедельно по пятницам.
      </h3>
      <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data?.map((item) => (
          <Item
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Box>
  );
}

export default Page;
