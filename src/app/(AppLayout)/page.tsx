import { Metadata } from "next";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import Header from "@/components/Layout/Header";
import Main from "@/views/Main";

export const metadata: Metadata = {
  title: "AB Korea - Подбор автомобилей из Южной Кореи с доставкой",
};

export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
