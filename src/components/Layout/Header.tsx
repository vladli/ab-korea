import React from "react";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { menu } from "@/config/menu";

function Header() {
  return (
    <div
      className="flex h-16 w-full bg-slate-900 text-white"
      style={{
        position: "fixed",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="flex items-center p-2 lg:hidden">button</div>
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
        {menu.map((item) => (
          <li key={item.title}>
            <Link href="/">{item.title}</Link>
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
