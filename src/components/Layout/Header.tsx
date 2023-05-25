"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { menu } from "@/config/menu";

import Button from "../Button";

import Sidebar from "./Sidebar";

function Header() {
  const [sideBar, setSideBar] = useState(false);
  useEffect(() => {
    if (sideBar) {
      window.fullpage_api.setAllowScrolling(false);
    } else {
      window.fullpage_api.setAllowScrolling(true);
    }
  }, [sideBar]);

  return (
    <div
      className="flex h-16 w-full bg-slate-900 text-white"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <button
        className="btn-ghost btn-square btn my-auto ml-2 lg:hidden"
        onClick={() => setSideBar(true)}
      >
        <svg
          className="inline-block h-6 w-6 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          ></path>
        </svg>
      </button>
      <Sidebar {...{ sideBar, setSideBar }} />
      {sideBar && (
        <motion.div
          animate={{ opacity: 0.5 }}
          className="fixed left-0 top-0 block h-full w-full cursor-pointer bg-black"
          initial={{ opacity: 0 }}
          onClick={() => setSideBar(false)}
        />
      )}
      <div className="mx-auto select-none lg:m-0 lg:ml-2">
        <Image
          alt=""
          height={75}
          priority
          src="/AB.png"
          width={75}
        />
      </div>
      <ul
        className={clsx(
          "mx-auto hidden",
          "lg:flex lg:items-center lg:justify-center lg:gap-10 lg:font-semibold"
        )}
      >
        {menu.map(({ title, url }) => (
          <li key={title}>
            <Link href={url}>{title}</Link>
          </li>
        ))}
      </ul>
      <div className="mr-2 flex items-center">
        <button className="btn-ghost btn">Login</button>
      </div>
    </div>
  );
}

export default Header;
