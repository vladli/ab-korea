import React from "react";
import clsx from "clsx";

const text = [
  {
    position: 0,
    text: "A – безаварийный автомобиль без покраски и замены деталей.",
  },
  {
    position: 1,
    text: "A – идеальное состояние, не требуется никаких работ.",
  },
  {
    position: 0,
    text: "B – замена не более одной навесной детали на новую и последующей покраской.",
  },
  {
    position: 1,
    text: "B – небольшие сколы или потертости не боле чем на трех деталях.",
  },
  {
    position: 0,
    text: "C – замена не более двух навесных деталей на новую и последующей покраской.",
  },
  {
    position: 1,
    text: "C – небольшие сколы или потертости на более чем на шести деталях.",
  },
  {
    position: 0,
    text: "D – замена частей каркаса на новые и покраска деталей.",
  },
  {
    position: 1,
    text: "D – сколы, потертости или царапины на более чем на восьми деталях.",
  },
  {
    position: 0,
    text: "E – замена нескольких частей каркаса на новые и покраска трех и более деталей.",
  },
  {
    position: 0,
    text: "F – сколы, потертости, царапины или вмятины на более чем десяти деталях.",
  },
  {
    position: 1,
    text: "F – аварийный автомобиль который участвовал в ДТП средней или высокой сложности, выполнена замена нескольких частей каркаса на новые, выполнена окраска деталей.",
  },
];

export default function CarGrade({ AuctionMark }: { AuctionMark: string }) {
  const [body, frame] = AuctionMark.split("/");
  const getBodyIndex = text.findIndex(
    ({ text, position }) => text.startsWith(body) && position === 0
  );
  const getFrameIndex = text.findIndex(
    ({ text, position }) => text.startsWith(frame) && position === 1
  );
  return (
    <div className="grid grid-cols-2">
      <span className="border p-4 font-bold">
        Первая буква – это история повреждений автомобиля
      </span>
      <span className="border p-4 font-bold">
        Вторая буква – это оценка внешнего состояния кузова
      </span>

      {text.map(({ text }, index) => (
        <div
          className={clsx("border p-4", {
            "bg-yellow-100": index === getBodyIndex || index === getFrameIndex,
          })}
          key={text}
        >
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}
