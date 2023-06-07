"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import FsLightbox from "fslightbox-react";
import Image from "next/image";

import useIsMobile from "@/hooks/useIsMobile";

export default function ImageContainer({ Images }: any) {
  const [toggler, setToggler] = useState(false);
  const isMobile = useIsMobile();

  return (
    <>
      <motion.div
        className="h-full w-full cursor-pointer select-none"
        onClick={() => setToggler(!toggler)}
        whileHover={!isMobile ? { opacity: 0.8 } : {}}
      >
        <Image
          alt=""
          className="rounded-t-box h-full w-full object-cover lg:rounded-l-box lg:rounded-r-none"
          height={600}
          priority
          src={Images[0].url}
          width={800}
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
