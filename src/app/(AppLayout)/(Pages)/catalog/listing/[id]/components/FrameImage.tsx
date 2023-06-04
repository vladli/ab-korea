import React from "react";
import Image from "next/image";

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
    <div>
      <Image
        alt=""
        height={1080}
        src={bodyImg}
        width={1920}
      />
      <div className="grid grid-cols-2">
        {text.map((item) => (
          <div
            className="flex items-center"
            key={item}
          >
            <span className="mr-2">{item.charAt(0)}</span>
            <span>{item.substring(3)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
