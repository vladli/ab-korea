"use client";
import React from "react";
import clsx from "clsx";
import { useSession } from "next-auth/react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Body({ children, className }: Props) {
  const { data: session, status } = useSession();
  return (
    <main
      className={clsx(
        {
          "pt-16": !session,
          "pt-28": session,
        },
        className
      )}
    >
      {children}
    </main>
  );
}

export default Body;
