import React from "react";
import type { Metadata } from "next/types";

import Header from "@/components/Layout/Header";
import { titles } from "@/config/config";

export const metadata: Metadata = {
  title: titles.faq,
};

function Page() {
  return (
    <main className="hero min-h-screen">
      <Header />
    </main>
  );
}

export default Page;
