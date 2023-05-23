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
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <>
      <ReactFullpage
        licenseKey="YOUR_KEY_HERE"
        navigation
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <Header />
            <section className="section">
              <Block_1 />
            </section>
            <section className="section">
              <WhyWe />
            </section>
            <section className="section">
              <BuyingGuide />
            </section>
            {/*     <section className="section">
              <Reviews />
            </section> */}
          </ReactFullpage.Wrapper>
        )}
        scrollingSpeed={1000}
      />
    </>
  );
}

export default Main;
