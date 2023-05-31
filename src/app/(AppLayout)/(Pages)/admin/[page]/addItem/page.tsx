import React from "react";
import type { Metadata } from "next/types";

import { titles } from "@/config/config";

import Main from "./components";

export const metadata: Metadata = {
  title: titles.adminAddItem,
};

type Props = {
  params: {
    page: string;
  };
};

function Page({ params }: Props) {
  console.log(params);
  return (
    <>
      <Main />
    </>
  );
}

export default Page;
