"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import Header from "@/components/Layout/Header";

import Block_1 from "./Block_1";
import BuyingGuide from "./BuyingGuide";
import Block_2 from "./WhyWe";

function Main() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  return (
    <motion.div>
      <motion.div className="h-[100vh]">
        <Header />
        <button className="btn">2nd</button>
        asd
        <Block_1 />
      </motion.div>
      <div className="h-[100vh]">
        <Block_2 />
      </div>
      <motion.div
        animate={{ opacity: 1, transition: { delay: 0.2 } }}
        className="h-[100vh]"
        initial={{ opacity: 0 }}
      >
        <BuyingGuide />
      </motion.div>
    </motion.div>
  );
}

export default Main;
