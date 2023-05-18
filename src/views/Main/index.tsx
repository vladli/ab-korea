/* eslint-disable tailwindcss/no-custom-classname */
//@ts-nocheck
"use client";

import React, { useEffect, useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import { randomFillSync } from "crypto";
import { motion, useScroll, useTransform } from "framer-motion";
import { Butcherman } from "next/font/google";

import Header from "@/components/Layout/Header";

import Block_1 from "./Block_1";
import BuyingGuide from "./BuyingGuide";
import WhyWe from "./WhyWe";

function Main() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    return () => {
      setMounted(true);
    };
  }, []);
  const Menu = () => (
    <div
      className="flex flex-row"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <ul className="flex gap-10">
        <li
          className="active"
          data-menuanchor="firstPage"
        >
          <a href="#firstPage">First section</a>
        </li>
        <li data-menuanchor="secondPage">
          <a href="#secondPage">Second section</a>
        </li>
        <li data-menuanchor="thirdPage">
          <a href="#thirdPage">Third section</a>
        </li>
        <li data-menuanchor="fourthPage">
          <a href="#fourthPage">Fourth section</a>
        </li>
      </ul>
    </div>
  );
  return (
    <>
      <Menu />
      <ReactFullpage
        anchors={[
          "firstPage",
          "secondPage",
          "thirdPage",
          "fourthPage",
          "lastPage",
        ]}
        licenseKey={"YOUR_KEY_HERE"}
        navigation
        navigationTooltips={["asd", "dsa"]}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Block_1 />
            </div>
            <div className="section">
              <WhyWe />
            </div>
            <div className="section  bg-slate-400">
              <BuyingGuide />
            </div>
          </ReactFullpage.Wrapper>
        )}
        scrollingSpeed={1000}
      />
    </>
  );
}

export default Main;
