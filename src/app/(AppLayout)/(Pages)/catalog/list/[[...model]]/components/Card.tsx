//@ts-nocheck
"use client";

import React from "react";
import {
  GiCartwheel,
  GiGearStickPattern,
  GiSteeringWheel,
} from "react-icons/gi";
import { Catalog } from "@prisma/client";
import { motion } from "framer-motion";
import Link from "next/link";

import Badge from "@/components/Badge";
import Card from "@/components/Cards/Card";
import Divider from "@/components/Divider";

function Item(props: Catalog) {
  const {
    id,
    Maker,
    Model,
    Year,
    Range,
    Price,
    Transmission,
    WheelDrive,
    Images,
  } = props;
  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <Link href={`/catalog/listing/${id}`}>
      <Card className="max-w-md hover:cursor-pointer">
        <motion.div whileHover={{ opacity: 0.75 }}>
          <Card.Image image={Images[0].url} />
          <Card.Body>
            <Card.Header>
              {Maker} {Model}
              <Badge
                className="text-white"
                color="secondary"
                size="lg"
              >
                {Year}
              </Badge>
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
        </motion.div>
      </Card>
    </Link>
  );
}

export default Item;
