"use client";
import React from "react";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { menu } from "@/config/menu";

type Props = {
  sideBar: boolean;
  setSideBar: any;
};

function Sidebar({ sideBar, setSideBar }: Props) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed left-0 top-0 z-40 h-screen w-80 select-none  overflow-y-auto  bg-slate-900 p-4 transition-transform",
        {
          "-translate-x-full": !sideBar,
        }
      )}
    >
      <h5
        className="text-base font-semibold uppercase text-white"
        id="drawer-navigation-label"
      >
        Меню
      </h5>
      <button
        className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-white hover:bg-white/10"
        onClick={() => setSideBar(false)}
      >
        <svg
          className="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            fillRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Закрыть</span>
      </button>
      <div className="overflow-y-auto py-4">
        <ul className="space-y-2 font-medium">
          {menu.map(({ icon: Icon, title, url }) => (
            <li
              key={title}
              onClick={() => setSideBar(false)}
            >
              <Link
                className={clsx(
                  "flex items-center rounded-lg p-2 text-white hover:bg-slate-800",
                  { "bg-slate-800": pathname === url }
                )}
                href={url}
              >
                <Icon />
                <span className="ml-3">{title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
