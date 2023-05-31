import type { Metadata } from "next/types";

import { titles } from "@/config/config";

import Main from "./components";

export const metadata: Metadata = {
  title: titles.main,
};

export default function Home() {
  return <Main />;
}
