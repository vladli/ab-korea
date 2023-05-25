import type { Metadata } from "next/types";

import Header from "@/components/Layout/Header";
import SocialButtons from "@/views/auth/signin/SocialButtons";
export const metadata: Metadata = {
  title:
    "Авторизация | AB Korea - Подбор автомобилей из Южной Кореи с доставкой",
};
async function Page() {
  return (
    <main className="hero min-h-screen">
      <Header />
      <div className="hero-content w-screen flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Авторизация</h1>
          <div className="py-6">
            Войдите в свой аккаунт, чтобы:
            <ul className="list-inside list-disc">
              <li>asd</li>
              <li>asd</li>
            </ul>
          </div>
        </div>
        <div className="card w-full max-w-md shrink-0 border bg-base-100 shadow-2xl">
          <div className="card-body">
            <SocialButtons />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
