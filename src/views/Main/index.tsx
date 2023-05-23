/* eslint-disable tailwindcss/no-custom-classname */
//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Header from "@/components/Layout/Header";

import Block_1 from "./Block_1";
import BuyingGuide from "./BuyingGuide";
import Reviews from "./Reviews";
import WhyWe from "./WhyWe";

function Main() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <ReactFullpage
        anchors={["firstPage", "secondPage", "thirdPage"]}
        licenseKey="YOUR_KEY_HERE"
        navigation
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <Header />
            <section className="section">
              <Reviews />
            </section>
            <section className="section">
              <Block_1 />
            </section>
            <section className="section">
              <WhyWe />
            </section>
            <section className="section">
              <BuyingGuide />
            </section>
          </ReactFullpage.Wrapper>
        )}
        scrollingSpeed={1000}
      />
    </>
  );
}

export default Main;
