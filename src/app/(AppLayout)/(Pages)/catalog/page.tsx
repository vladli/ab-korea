import React from "react";
import type { Metadata } from "next/types";

import Box from "@/components/Box";
import { titles } from "@/config/config";

import Item from "./components/Card";
import Main from "./components";

export const metadata: Metadata = {
  title: titles.catalog,
};

async function getItems() {
  const result = await fetch(`${process.env.WEBSITE}/api/catalog/item`);
  return result.json();
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
}[];

async function Page() {
  const data: Data = await getItems();

  return (
    <Box className="m-5">
      <div className="grid grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
