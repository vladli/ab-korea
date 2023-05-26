/* eslint-disable tailwindcss/no-custom-classname */
//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

import BuyingGuide from "./BuyingGuide";
import CarCheck from "./CarCheck";
import Reviews from "./Reviews";
import WhyWe from "./WhyWe";

function Main() {
  return (
    <>
      <ReactFullpage
        licenseKey="YOUR_KEY_HERE"
        navigation
        render={({ state, fullpageApi }) => (
          <>
            <Header />
            <ReactFullpage.Wrapper>
              <section className="section pt-28">
                <WhyWe />
              </section>
              <section className="section">
                <CarCheck />
              </section>
              <section className="section">
                <BuyingGuide />
              </section>
              <section className="section">
                <Footer />
              </section>
              {/*     <section className="section">
              <Reviews />
            </section> */}
            </ReactFullpage.Wrapper>
          </>
        )}
        scrollingSpeed={1200}
      />
    </>
  );
}

export default Main;
