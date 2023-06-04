import React from "react";
import clsx from "clsx";
import { Metadata } from "next";

import BackButton from "@/components/BackButton";
import Badge from "@/components/Badge";
import Box from "@/components/Box";
import Container from "@/components/Container";
import { titles } from "@/config/config";
import { getCar } from "@/lib/cars";

import CarGrade from "./components/CarGrade";
import FrameImage from "./components/FrameImage";
import ImageContainer from "./components/ImageContainer";
import PriceTable from "./components/PriceTable";

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
    Price,
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
    bodyImg,
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
    <Container>
      <BackButton />
      <section className="flex flex-col items-center">
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
      </section>
      <section className="mx-auto mt-5 flex max-w-xl flex-col items-center lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-center">
        <div>
          <ImageContainer {...{ Images }} />
        </div>
        <div className="rounded-b-box flex w-full flex-col gap-1 bg-[#f5f5f5] p-5 font-medium lg:rounded-r-box lg:rounded-l-none">
          <div className="grid h-full grid-cols-3">
            {list.map(({ title, value, helper }: any, i: number) => (
              <React.Fragment key={title}>
                <div
                  className={clsx(
                    "col-span-2 flex items-center rounded-l-md pl-1",
                    {
                      "bg-white": i % 2 === 0,
                    }
                  )}
                >
                  {title}
                </div>
                <div
                  className={clsx("flex items-center rounded-r-md", {
                    "bg-white": i % 2 === 0,
                  })}
                >
                  {value}
                  {helper ? helper : null}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
      <section>
        <PriceTable {...{ Price }} />
      </section>
      <section className="mx-auto my-5 flex w-full max-w-xl flex-col lg:max-w-6xl">
        <div className="mb-5 flex items-center justify-center gap-2">
          <span className="text-3xl font-normal">Автомобиль имеет оценку</span>
          <Badge
            className="text-white"
            color="secondary"
            size="lg"
          >
            {AuctionMark}
          </Badge>
        </div>
        <CarGrade {...{ AuctionMark }} />
      </section>
      <section className="mx-auto my-5 flex w-full max-w-xl flex-col items-center lg:max-w-6xl">
        <span className="text-3xl font-normal">Состояние кузова</span>
        <FrameImage {...{ bodyImg }} />
      </section>
    </Container>
  );
}

export default Page;
