import React from "react";
import clsx from "clsx";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const text: string[] = [
  "A – царапина",
  "C – коррозия",
  "E – небольшой эксплуатационный дефект",
  "H – отверстие",
  "R – скол",
  "T – мелкий скол, не требующий ремонта",
  "TX – трещина, требующая ремонта",
  "U – вмятина",
  "UR – вмятый скол",
  "X – замена элемента",
  "W – вторичный окрас",
];

export default function FrameImage({ bodyImg }: { bodyImg: string | null }) {
  if (!bodyImg) return null;

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex max-w-2xl">
        <Image
          alt=""
          height={1080}
          src={bodyImg}
          width={1920}
        />
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          {text.map((item, index) => {
            const [letter, description] = item.split(" – ");
            return (
              <div
                className="grid grid-flow-dense grid-cols-6"
                key={item}
              >
                <div
                  className={twMerge(
                    "col-span-1 flex items-center justify-center border border-b-0 border-r-0 p-2 font-semibold",
                    clsx({ "border-b": text.length - 1 === index })
                  )}
                >
                  {letter}
                </div>
                <div
                  className={twMerge(
                    "col-span-5 border border-b-0 p-2",
                    clsx({ "border-b": text.length - 1 === index })
                  )}
                >
                  {description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
