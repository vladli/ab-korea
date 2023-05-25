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
              <CarCheck />
            </section>
            <section className="section">
              <WhyWe />
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
        )}
        scrollingSpeed={1000}
      />
    </>
  );
}

export default Main;
