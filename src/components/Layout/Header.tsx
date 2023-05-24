"use client";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { menu } from "@/config/menu";

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
        className="flex items-center p-2 lg:hidden"
        onClick={() => setSideBar(true)}
      >
        button
      </button>
      <Sidebar {...{ sideBar, setSideBar }} />
      {sideBar && (
        <div
          className="fixed left-0 top-0 block h-full w-full cursor-pointer bg-white opacity-75"
          onClick={() => setSideBar(false)}
        />
      )}
      <div className="mx-auto lg:m-0 lg:ml-2">
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
      <div className="flex items-center">
        <div className="btn-ghost btn">Login</div>
      </div>
    </div>
  );
}

export default Header;
