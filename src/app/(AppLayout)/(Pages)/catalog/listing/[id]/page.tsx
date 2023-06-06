import React from "react";
import clsx from "clsx";
import { Metadata } from "next";
import Image from "next/image";

import BackButton from "@/components/BackButton";
import Badge from "@/components/Badge";
import Container from "@/components/Container";
import Divider from "@/components/Divider";
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
    <Container className="relative">
      <BackButton />
      <div className="absolute right-10 hidden h-20 w-20 lg:flex">
        <Image
          alt=""
          className="h-full w-full object-contain"
          height={128}
          src={`/carLogos/${Maker}.png`}
          width={128}
        />
      </div>
      <section className="flex flex-col items-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-16 w-16 lg:hidden">
            <Image
              alt=""
              className="mask mask-hexagon-2 h-full w-full bg-gray-100 object-contain p-2"
              height={128}
              src={`/carLogos/${Maker}.png`}
              width={128}
            />
          </div>
          <span className="text-center text-4xl">
            {Maker} {Model}
          </span>
          <Badge
            className="text-white"
            color="secondary"
            size="lg"
          >
            {Year}
          </Badge>
          <span className="rounded-full bg-gray-100 p-2 text-sm">{VIN}</span>
        </div>
      </section>
      <section className="mx-auto mt-5 flex w-full max-w-xl flex-col items-center lg:max-w-6xl lg:flex-row lg:items-stretch lg:justify-center">
        <div className="w-full">
          <ImageContainer {...{ Images }} />
        </div>
        <div className="rounded-b-box w-full gap-1 bg-[#f5f5f5] p-5 font-medium lg:rounded-r-box lg:w-[70%] lg:rounded-l-none">
          <div className="my-auto grid h-full grid-cols-3">
            {list.map(({ title, value, helper }: any, i: number) => (
              <React.Fragment key={title}>
                <div
                  className={clsx(
                    "col-span-2 flex items-center rounded-l-md pl-2",
                    {
                      " bg-white": i % 2 === 0,
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
      <Divider />
      <section>
        <PriceTable {...{ Price }} />
      </section>
      <Divider />
      <section className="mx-auto my-5 flex w-full max-w-xl flex-col lg:max-w-6xl">
        <div className="mx-auto mb-5 flex flex-col items-center gap-2">
          <span className="text-center text-3xl font-normal">
            Автомобиль имеет оценку
          </span>
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
      <Divider />
      <section className="mx-auto my-5 flex w-full max-w-xl flex-col items-center lg:max-w-6xl">
        <span className="text-3xl font-normal">Состояние кузова</span>
        <FrameImage {...{ bodyImg }} />
      </section>
    </Container>
  );
}

export default Page;
