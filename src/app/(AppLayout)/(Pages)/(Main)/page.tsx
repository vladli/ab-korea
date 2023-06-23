import type { Metadata } from "next/types";

import { titles } from "@/config/config";

import BuyingGuide from "./components/BuyingGuide";
import CarCheck from "./components/CarCheck";
import WhyWe from "./components/WhyWe";

export const metadata: Metadata = {
  title: titles.main,
};

export default function Home() {
  return (
    <section className="flex flex-col">
      <WhyWe />
      <CarCheck />
      <BuyingGuide />
    </section>
  );
}
