import React from "react";
import clsx from "clsx";
import { Metadata } from "next";

import Badge from "@/components/Badge";
import Box from "@/components/Box";
import Divider from "@/components/Divider";
import { titles } from "@/config/config";
import { getCar } from "@/lib/cars";

import ImageContainer from "./components/ImageContainer";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCar(params.id);
  return {
    title: `${data?.Maker} ${data?.Model} | ` + titles.main,
  };
}

type Props = {
  params: { id: string };
};

async function Page({ params }: Props) {
  const data = await getCar(params.id);
  if (!data) return null;
  const {
    Maker,
    Model,
    Year,
    VIN,
    WheelDrive,
    Range,
    FuelType,
    AuctionDate,
    AuctionMark,
    RegDate,
    Transmission,
    Engine,
    Images,
  } = data;
  const list = [
    { title: "Марка", value: Maker },
    { title: "Модель", value: Model },

    { title: "Год", value: Year },
    { title: "Пробег", value: Range, helper: " км." },
    {
      title: "Объем двигателя",
      value: Engine,
      helper: " CC",
    },
    { title: "Топливо", value: FuelType },
    { title: "Трансмиссия", value: Transmission },
    { title: "Привод", value: WheelDrive },
    { title: "Дата первой регистрации", value: RegDate },
    { title: "Дата аукциона", value: AuctionDate },
  ];

  return (
    <Box className="mx-auto my-10 max-w-7xl p-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2">
          <span className="text-4xl">
            {Maker} {Model}
          </span>
          <Badge
            className="text-white"
            color="secondary"
            size="lg"
          >
            {Year}
          </Badge>
        </div>
        <div className="w-fit rounded-full bg-gray-100 p-1 text-sm">{VIN}</div>
      </div>
      <div className="mt-5 flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-center">
        <div className="max-w-xl ">
          <ImageContainer {...{ Images }} />
        </div>
        <div className="rounded-b-box flex w-full max-w-xl  flex-col gap-1 bg-slate-100 p-5 font-medium lg:rounded-r-box lg:rounded-l-none">
          <div className="my-auto grid h-full grid-cols-3 ">
            {list.map(({ title, value, helper }: any, i: number) => (
              <React.Fragment key={title}>
                <div
                  className={clsx("col-span-2", {
                    "bg-slate-200": i % 2 === 0,
                  })}
                >
                  {title}
                </div>
                <div
                  className={clsx({
                    "bg-slate-200": i % 2 === 0,
                  })}
                >
                  {value}
                  {helper ? helper : null}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Page;
