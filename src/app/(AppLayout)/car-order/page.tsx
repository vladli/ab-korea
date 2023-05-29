import React from "react";
import type { Metadata } from "next/types";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { titles } from "@/config/config";
import Main from "@/views/car-order";

export const metadata: Metadata = {
  title: titles.carOrder,
};

function Page() {
  return (
    <main className=" min-h-screen">
      <Header />
      <Main />
      <Footer />
    </main>
  );
}

export default Page;
