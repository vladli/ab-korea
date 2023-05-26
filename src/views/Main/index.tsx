/* eslint-disable tailwindcss/no-custom-classname */
//@ts-nocheck
"use client";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import clsx from "clsx";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

import BuyingGuide from "./BuyingGuide";
import CarCheck from "./CarCheck";
import Reviews from "./Reviews";
import WhyWe from "./WhyWe";

const comps = [
  <WhyWe key={0} />,
  <CarCheck key={1} />,
  <BuyingGuide key={2} />,
  <Footer key={3} />,
];

function Main() {
  return (
    <>
      <ReactFullpage
        licenseKey="OPEN-SOURCE-GPLV3-LICENSE"
        navigation
        render={({ state, fullpageApi }) => (
          <>
            <Header />

            <ReactFullpage.Wrapper>
              {comps.map((item, i) => {
                return (
                  <section
                    className={clsx("section", { "pt-28": i === 0 })}
                    key={i}
                  >
                    {item}
                  </section>
                );
              })}
            </ReactFullpage.Wrapper>
          </>
        )}
        scrollingSpeed={1200}
      />
    </>
  );
}

export default Main;
