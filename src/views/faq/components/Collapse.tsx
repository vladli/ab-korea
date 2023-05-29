import React from "react";

type Props = {
  title: string;
  text: any;
};

function Collapse({ title, text }: Props) {
  return (
    <div className="collapse-arrow rounded-box collapse border border-base-300 bg-white">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Collapse;
