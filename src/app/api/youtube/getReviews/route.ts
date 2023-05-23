import { NextResponse } from "next/server";

export async function GET() {
  const params = {
    part: "snippet",
    key: process.env.GOOGLE_API as string,
    playlistId: process.env.AB_REVIEW_PLAYLIST_ID as string,
    maxResults: "15",
  };
  const request = await fetch(
    "https://www.googleapis.com/youtube/v3/playlistItems?" +
      new URLSearchParams(params)
  );

  const data = await request.json();
  return NextResponse.json(data);
}
