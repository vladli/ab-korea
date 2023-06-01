import React from "react";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import { titles } from "@/config/config";

import Item from "./components/Card";

export const metadata: Metadata = {
  title: titles.catalog,
};

async function getItems({ model }: any): Promise<Data[]> {
  console.log(model);
  const params = {
    model: model[0],
  };
  const result = await fetch(
    `${process.env.WEBSITE}/api/catalog/item?` + new URLSearchParams(params)
  );

  const data = await result.json();
  return data;
}

export type Data = {
  id: string;
  Maker: string;
  Model: string;
  Year: string;
  Range: number;
  Price: number;
  Transmission: string;
  WheelDrive: string;
  Images: {
    url: string;
  }[];
};

type Props = {
  params: {
    model: string[];
  };
};

async function Page({ params }: Props) {
  const data = await getItems(params);

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
