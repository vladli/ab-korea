import React from "react";
import type { Metadata } from "next/types";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { titles } from "@/config/config";
import Main from "@/views/faq";

export const metadata: Metadata = {
  title: titles.faq,
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
