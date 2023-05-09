"use client";
import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import Header from "@/components/Layout/Header";

import Block_1 from "./Block_1";
import BuyingGuide from "./BuyingGuide";
import Block_2 from "./WhyWe";

function Main() {
  const parallax = useRef<IParallax>(null);
  const handleclick = () => {
    parallax.current?.scrollTo(3);
  };
  return (
    <Parallax
      pages={6}
      ref={parallax}
    >
      <ParallaxLayer
        offset={0}
        style={{ backgroundColor: "#232946" }}
      >
        <Header />
        <button
          className="btn"
          onClick={handleclick}
        >
          2nd
        </button>
        asd
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        style={{ backgroundColor: "#8bd3dd" }}
      >
        <Block_1 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        style={{ backgroundColor: "#232946" }}
      >
        <Block_2 />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        style={{ backgroundColor: "#232946" }}
      >
        <BuyingGuide />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Main;
