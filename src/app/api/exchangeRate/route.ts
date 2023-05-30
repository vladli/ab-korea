import { NextResponse } from "next/server";

export async function GET() {
  const API_KEY = process.env.ECHANGE_RATE_API as string;
  const request = await fetch(
    `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`,
    { next: { revalidate: 3600 } }
  );

  const data = await request.json();
  return NextResponse.json(data);
}
