import React from "react";
import {
  GiCartwheel,
  GiGearStickPattern,
  GiSteeringWheel,
} from "react-icons/gi";
import { Metadata } from "next";

import Box from "@/components/Box";
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
  return (
    <Box className="m-10">
      <div>
        <h3 className="text-center">
          {Maker} {Model}
        </h3>
        <div className="flex w-full justify-between">
          <div className="flex items-center gap-1">
            <GiSteeringWheel />
            {Range} км.
          </div>
          <div className="flex items-center gap-1">
            <GiCartwheel />
            {WheelDrive}
          </div>
          <div className="flex items-center gap-1">
            <GiGearStickPattern />
            {Transmission}
          </div>
        </div>
      </div>
      <div className="flex">
        <ImageContainer {...{ Images }} />
        <div>card</div>
      </div>
    </Box>
  );
}

export default Page;
