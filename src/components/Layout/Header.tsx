import React from "react";
import Image from "next/image";

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
      <Image
        alt=""
        className="ml-5 p-2"
        height={75}
        priority
        src="/AB.png"
        width={75}
      />
      <ul className="m-auto flex items-center gap-10 px-10">
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
      </ul>
    </div>
  );
}

export default Header;
