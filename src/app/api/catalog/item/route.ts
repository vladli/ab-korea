import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.catalog.findMany();
  return NextResponse.json(data);
}

export async function POST(request: Request) {
  const data = await request.json();
  await prisma.catalog.create({
    data: {
      Maker: data.Maker,
      Model: data.Model,
      Price: data.Price,
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
  return NextResponse.json("Complete");
}
