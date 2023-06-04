import React from "react";
import { Catalog } from "@prisma/client";
import type { Metadata } from "next/types";

import { titles } from "@/config/config";
import { prisma } from "@/lib/prisma";

import Main from "./components";

export const metadata: Metadata = {
  title: titles.adminAddItem,
};

type Props = {
  params: {
    page: string;
  };
};

async function createCar(data: Catalog) {
  "use server";

  const response = prisma.catalog.create({ data });
  return response;
}

function Page({ params }: Props) {
  console.log(params);
  return (
    <>
      <Main {...{ createCar }} />
    </>
  );
}

export default Page;
