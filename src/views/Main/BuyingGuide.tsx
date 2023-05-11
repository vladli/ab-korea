import React from "react";

import Guide from "./components/Stepper";

export default function BuyingGuide() {
  return (
    <section className="flex min-h-screen select-none flex-col">
      <div className="my-10 sm:m-auto">
        <div className="mb-10 text-center">
          <h2>ЭТАПЫ ПОКУПКИ АВТОМОБИЛЯ</h2>
        </div>
        <Guide />
      </div>
    </section>
  );
}
