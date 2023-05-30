import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const data = await request.json();
  const response = await prisma.catalog.create({
    data: {
      Maker: data.Maker,
      Model: data.Model,
      AuctionDate: data.AuctionDate,
      AuctionMark: data.AuctionMark,
      Engine: Number(data.Engine),
      FuelType: data.FuelType,
      Range: Number(data.Range),
      RegDate: data.RegDate,
      Transmission: data.Transmission,
      VIN: data.VIN,
      WheelDrive: data.WheelDrive,
      Year: Number(data.Year),
      bodyImg: data.bodyImg,
      Images: data.Images,
    },
  });
  return NextResponse.json(data);
}
