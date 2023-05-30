"use client";
import React from "react";
import clsx from "clsx";
import { useSession } from "next-auth/react";

import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Body({ children, className }: Props) {
  const { data: session } = useSession();
  return (
    <main
      className={clsx("flex min-h-screen flex-col", {
        "pt-16": !session,
        "pt-28": session,
      })}
    >
      <div className={clsx("grow", className)}>{children}</div>
      <Footer />
    </main>
  );
}

export default Body;
