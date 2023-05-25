"use client";
import React, { useEffect, useState } from "react";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

import { menu } from "@/config/menu";

import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

function Header() {
  const { data: session } = useSession();

  const [sideBar, setSideBar] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/") {
      if (sideBar) {
        window.fullpage_api.setAllowScrolling(false);
      } else {
        window.fullpage_api.setAllowScrolling(true);
      }
    }
  }, [sideBar]);

  return (
    <>
      <header
        className="flex h-16 w-full flex-col bg-slate-900 text-white"
        style={{
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <div className="flex">
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
            <button
              className="btn-ghost btn gap-2"
              onClick={() => (!session ? signIn() : signOut())}
            >
              {!session ? (
                <MdOutlineLogin
                  color="red"
                  size="1.3rem"
                />
              ) : (
                <MdOutlineLogout
                  color="red"
                  size="1.3rem"
                />
              )}
              {!session ? "Вход" : "Выход"}
            </button>
          </div>
        </div>
        {session ? <UserMenu /> : null}
      </header>
    </>
  );
}

export default Header;
