import React, { useEffect } from "react";
import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

import { blurImage, blurImages } from "@/lib/blurImage";

const imageSources = [
  "https://imgmk.lotteautoauction.net/AU_CAR_IMG_ORG_HP/202305/KS20230504001623.JPG",
  "https://imgmk.lotteautoauction.net/AU_CAR_IMG_ORG_HP/202305/KS20230504001623.JPG",
];
export default async function Page() {
  //const { base64, img } = await blurImage(imageSources[0]);
  const blurredImages = await blurImages(imageSources);
  console.log(blurredImages[0].base64);
  return <div></div>;
}
