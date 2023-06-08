"use client";
import React, { useState } from "react";
import { MdOutlineLogin, MdOutlineLogout } from "react-icons/md";
import clsx from "clsx";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { twMerge } from "tailwind-merge";

import Button from "@/components/Button";
import { menu } from "@/config/menu";

import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";

function Header({ className }: { className?: string }) {
  const { data: session } = useSession();

  const [sideBar, setSideBar] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className={twMerge(
        "relative flex w-full flex-col bg-slate-900 text-white",
        className
      )}
      style={{
        top: 0,
        zIndex: 100,
      }}
    >
      <section className="flex h-16">
        <Button
          className="my-auto ml-2 lg:hidden"
          color="ghost"
          onClick={() => setSideBar(true)}
          shape="square"
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
        </Button>
        {sideBar ? <Sidebar {...{ sideBar, setSideBar }} /> : null}
        {sideBar ? (
          <motion.div
            animate={{ opacity: 0.5 }}
            className="fixed left-0 top-0 block h-full w-full cursor-pointer bg-black"
            initial={{ opacity: 0 }}
            onClick={() => setSideBar(false)}
          />
        ) : null}
        <div className="mx-auto select-none lg:m-0 lg:ml-2">
          <Link href="/">
            <Image
              alt=""
              height={75}
              priority
              src="/AB.png"
              width={75}
            />
          </Link>
        </div>
        <ul
          className={clsx(
            "mx-auto hidden",
            "lg:flex lg:items-center lg:justify-center lg:gap-10 lg:font-semibold"
          )}
        >
          {menu.map(({ title, url }) => (
            <Link
              className=""
              href={url}
              key={title}
            >
              <motion.li
                className={clsx("select-none hover:text-white/80", {
                  "border-b border-b-white/80": pathname === url,
                })}
                whileHover={{
                  scale: 1.1,
                }}
              >
                {title}
              </motion.li>
            </Link>
          ))}
        </ul>
        <div className="mr-2 flex items-center">
          {!session ? (
            <Link href="/auth/signin">
              <Button
                color="ghost"
                leftIcon={
                  <MdOutlineLogin
                    color="red"
                    size="1.3rem"
                  />
                }
              >
                Вход
              </Button>
            </Link>
          ) : (
            <Button
              color="ghost"
              leftIcon={
                <MdOutlineLogout
                  color="red"
                  size="1.3rem"
                />
              }
              onClick={() => signOut()}
            >
              Выход
            </Button>
          )}
        </div>
      </section>
      {session ? <UserMenu /> : null}
    </header>
  );
}

export default Header;
