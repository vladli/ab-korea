import React from "react";

import Guide from "./components/Guide";

export default function BuyingGuide() {
  return (
    <section className="flex select-none flex-col">
      <div className="m-auto p-10">
        <div className="mb-10 text-center">
          <h2>ЭТАПЫ ПОКУПКИ АВТОМОБИЛЯ</h2>
        </div>
        <Guide />
      </div>
    </section>
  );
}
