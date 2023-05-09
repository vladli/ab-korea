import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

import Main from "@/views/Main";
export default function Home() {
  return (
    <main>
      <Main />
    </main>
  );
}
