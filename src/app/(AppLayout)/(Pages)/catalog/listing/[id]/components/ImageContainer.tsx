"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

const imageSources = [
  "https://imgmk.lotteautoauction.net/AU_CAR_IMG_ORG_HP/202305/KS20230504001623.JPG",
  "https://imgmk.lotteautoauction.net/AU_CAR_IMG_ORG_HP/202305/KS20230504001623.JPG",
];

export default function ImageContainer({ Images }: any) {
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <motion.div
        className="w-1/2 cursor-pointer select-none"
        onClick={() => setToggler(!toggler)}
        whileHover={{ opacity: 0.8 }}
      >
        <Image
          alt=""
          height={1080}
          src={Images[0].url}
          width={1920}
        />
      </motion.div>
      <FsLightbox
        showThumbsOnMount={true}
        sources={Images.map(({ url }: { url: string }) => (
          <Image
            alt=""
            height={1080}
            key={url}
            src={url}
            width={1920}
          />
        ))}
        thumbs={Images.map(({ url }: { url: string }) => url)}
        toggler={toggler}
      />
    </>
  );
}
