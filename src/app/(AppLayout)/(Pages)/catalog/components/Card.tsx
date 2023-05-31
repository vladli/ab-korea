import React from "react";
import {
  GiCartwheel,
  GiGearStickPattern,
  GiSteeringWheel,
} from "react-icons/gi";

import Badge from "@/components/Badge";
import Card from "@/components/Cards/Card";
import Divider from "@/components/Divider";

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

function Item(props: Data) {
  const { Maker, Model, Year, Range, Price, Transmission, WheelDrive, Images } =
    props;
  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Card className="max-w-md">
      <Card.Image image={Images[0].url} />
      <Card.Body>
        <Card.Header>
          {Maker} {Model} <Badge color="secondary">{Year}</Badge>
        </Card.Header>
        <p className="text-xl font-semibold">{Currency.format(Price)}</p>
        <Divider />
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
      </Card.Body>
    </Card>
  );
}

export default Item;
