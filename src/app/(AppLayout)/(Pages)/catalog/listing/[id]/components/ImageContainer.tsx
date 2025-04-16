"use client";
import React, {useState} from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";

import useIsMobile from "@/hooks/useIsMobile";

import "yet-another-react-lightbox/styles.css";

export default function ImageContainer({Images}: any) {
    const [toggler, setToggler] = useState(false);
    const isMobile = useIsMobile();

    return (
        <>
            <motion.div
                className="size-full cursor-pointer select-none"
                onClick={() => setToggler(!toggler)}
                whileHover={!isMobile ? {opacity: 0.8} : {}}
            >
                <Image
                    alt=""
                    blurDataURL={Images[0].blurUrl}
                    className="size-full rounded-t-box object-cover lg:rounded-l-box lg:rounded-r-none"
                    height={600}
                    placeholder="blur"
                    priority
                    src={Images[0].url}
                    width={800}
                />
            </motion.div>
            <Lightbox
                slides={[
                    {
                        src: Images[0].url,
                        alt: Images[0].alt,
                    },
                    ...Images.slice(1).map((image: any) => ({
                        src: image.url,
                        alt: image.alt,
                    })),
                ]}
                open={toggler}
                close={() => setToggler(false)}
            />
        </>
    );
}
