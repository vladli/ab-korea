import React from "react";
import Image from "next/image";
import Link from "next/link";

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
      <ul className="m-auto flex items-center gap-10 px-10 font-semibold">
        <li>
          <Link href="/">Главная</Link>
        </li>
        <li>
          <Link href="/">Заказ авто</Link>
        </li>
        <li>
          <Link href="/">Каталог</Link>
        </li>
        <li>
          <Link href="/">Отзывы</Link>
        </li>
        <li>
          <Link href="/">Кейсы</Link>
        </li>
        <li>
          <Link href="/">FAQ</Link>
        </li>
        <li>
          <Link href="/">О нас</Link>
        </li>
      </ul>
      <div className="flex items-center">Login</div>
    </div>
  );
}

export default Header;
