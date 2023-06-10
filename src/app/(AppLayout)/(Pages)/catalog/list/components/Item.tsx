//@ts-nocheck
"use client";
import React from "react";
import { useContextMenu } from "react-contexify";
import { FaGasPump } from "react-icons/fa";
import {
  GiCartwheel,
  GiGearStickPattern,
  GiSteeringWheel,
} from "react-icons/gi";
import { Catalog } from "@prisma/client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/Badge";
import Card from "@/components/Cards/Card";
import Divider from "@/components/Divider";
import useIsAdmin from "@/hooks/useIsAdmin";
import useIsMobile from "@/hooks/useIsMobile";

import ContextMenu from "./ContextMenu";

function Items(props: Catalog) {
  const isAdmin = useIsAdmin();
  const isMobile = useIsMobile();
  const {
    id,
    Maker,
    Model,
    Year,
    Range,
    Price,
    Transmission,
    WheelDrive,
    FuelType,
    Images,
  } = props;
  const Currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KRW",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  const { show } = useContextMenu({
    id: id,
  });

  function displayMenu(e) {
    show({ event: e });
  }

  return (
    <>
      <Card className="w-full max-w-md hover:cursor-pointer">
        <Link href={`/catalog/listing/${id}`}>
          <motion.div
            onContextMenu={isAdmin ? displayMenu : null}
            whileHover={!isMobile ? { opacity: 0.75 } : {}}
          >
            <Card.Image image={Images[0].url} />
            <Card.Body>
              <Card.Header>
                {Maker} {Model}
              </Card.Header>
              <div className="absolute right-5 flex h-16 w-16 items-center">
                <Image
                  alt=""
                  className="h-full w-full select-none object-contain"
                  height={128}
                  src={`/carLogos/${Maker}.svg`}
                  width={128}
                />
              </div>
              <p className="text-xl font-semibold">{Currency.format(Price)}</p>
              <Divider />
              <div className="flex w-full justify-between">
                <Badge
                  className="text-white"
                  color="secondary"
                  size="lg"
                >
                  {Year}
                </Badge>
                <div className="flex items-center gap-1">
                  <GiSteeringWheel />
                  {Range} км.
                </div>
              </div>
              <div className="flex w-full justify-between">
                <div className="flex items-center gap-1">
                  <FaGasPump />
                  {FuelType}
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
        </Link>
      </Card>

      <ContextMenu {...props} />
    </>
  );
}

export default Items;
