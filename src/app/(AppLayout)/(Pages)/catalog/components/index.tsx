"use client";
import React from "react";
import useSWR from "swr";

import Item from "./Card";

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

function Main() {
  const { data } = useSWR<Data>("/api/catalog/item");
  console.log(data);
  return (
    <div className="grid grid-cols-3">
      {data?.map((item) => (
        <Item
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default Main;
