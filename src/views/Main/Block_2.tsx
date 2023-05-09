import React from "react";

const data = [
  {
    title: "100% гарантия",
    text: "asd",
  },
  {
    title: "100%",
    text: "asd",
  },
  {
    title: "100%1",
    text: "asd",
  },
  {
    title: "100%12",
    text: "asd",
  },
  {
    title: "100%2",
    text: "asd",
  },
];

function Block_2() {
  return (
    <div>
      <div>head</div>
      <div className="flex flex-row flex-wrap justify-around">
        {data.map((item) => (
          <div
            className="basis-1/3 text-center [&:nth-child(n+4)]:basis-1/2"
            key={item.title}
          >
            <p>icon</p>
            {item.title}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block_2;
