import { redirect } from "next/navigation";
import type { Metadata } from "next/types";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { titles } from "@/config/config";

import SocialButtons from "./components/SocialButtons";

export const metadata: Metadata = {
  title: titles.login,
};

async function Page() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/");
  }
  return (
    <div className="flex items-center justify-center">
      <div className="flex w-screen flex-col items-center">
        <div className="my-4 text-center">
          <h1 className="text-5xl font-bold">Авторизация</h1>
        </div>
        <div className="card w-full max-w-md shrink-0 border bg-base-100 shadow-2xl">
          <div className="card-body">
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
