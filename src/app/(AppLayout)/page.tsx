import type { Metadata } from "next/types";

import { titles } from "@/config/config";
import Main from "@/views/Main";

export const metadata: Metadata = {
  title: titles.main,
};

export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
