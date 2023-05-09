"use client";
import React, { useRef } from "react";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

import Block_1 from "./Block_1";
import Header from "./Header";

function Main() {
  const parallax = useRef<IParallax>(null);
  const handleclick = () => {
    console.log(parallax.current?.scrollTo(0));
  };
  return (
    <>
      <Parallax
        pages={3}
        ref={parallax}
      >
        <ParallaxLayer style={{ backgroundColor: "#232946" }}>
          <Header />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          style={{ backgroundColor: "#232946" }}
        >
          <Block_1 />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          style={{ backgroundColor: "#8bd3dd" }}
        >
          <button
            className="btn"
            onClick={handleclick}
          >
            2
          </button>
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Main;
