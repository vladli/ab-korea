import React from "react";

import Guide from "./components/Stepper";

export default function BuyingGuide() {
  return (
    <div className="flex flex-col h-full">
      <div className="m-auto">
        <div className="mb-14 text-center">
          <h1>ЭТАПЫ ПОКУПКИ АВТОМОБИЛЯ</h1>
        </div>
        <Guide />
      </div>
    </div>
  );
}
