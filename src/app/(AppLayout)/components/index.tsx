/* eslint-disable tailwindcss/no-custom-classname */
//@ts-nocheck
"use client";
import ReactFullpage from "@fullpage/react-fullpage";
import clsx from "clsx";
import type { Metadata } from "next/types";
import { useSession } from "next-auth/react";

import Footer from "@/app/Layout/Footer";
import Header from "@/app/Layout/Header";
import { titles } from "@/config/config";

import BuyingGuide from "./BuyingGuide";
import CarCheck from "./CarCheck";
import WhyWe from "./WhyWe";

export const metadata: Metadata = {
  title: titles.main,
};
const comps = [
  <WhyWe key={0} />,
  <CarCheck key={1} />,
  <BuyingGuide key={2} />,
  <Footer
    className="absolute bottom-0"
    key={3}
  />,
];
export default function Main() {
  const { data: session } = useSession();
  const items = comps.map((item, i) => {
    return (
      <section
        className={clsx("section", {
          "pt-16": i === 0 && !session,
          "pt-28": i === 0 && session,
        })}
        key={i}
      >
        {item}
      </section>
    );
  });
  return (
    <>
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        navigation
        render={({ state, fullpageApi }) => (
          <>
            <Header className="absolute" />
            <ReactFullpage.Wrapper>{items}</ReactFullpage.Wrapper>
          </>
        )}
        scrollingSpeed={1200}
      />
    </>
  );
}
