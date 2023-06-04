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
      <div className="flex items-center justify-center">
        <div className="flex flex-col">
          {text.map((item) => {
            const [letter, description] = item.split(" – ");
            return (
              <div
                className="flex items-center"
                key={item}
              >
                <div className="w-12 border p-2 text-center font-semibold">
                  {letter}
                </div>
                <div className="w-full border p-2">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
