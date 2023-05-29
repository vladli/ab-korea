import React from "react";
import type { Metadata } from "next/types";

import Header from "@/components/Layout/Header";
import { titles } from "@/config/config";
import Main from "@/views/calculator";

export const metadata: Metadata = {
  title: titles.calculator,
};

function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Main />
    </main>
  );
}

export default Page;
