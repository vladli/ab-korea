import React from "react";
import { Metadata } from "next";

import { titles } from "@/config/config";
import { getCar } from "@/lib/cars";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = await getCar(params.id);
  return {
    title: `${data?.Maker} ${data?.Model} | ` + titles.main,
  };
}

type Props = {
  params: { id: string };
};

async function Page({ params }: Props) {
  const data = await getCar(params.id);
  console.log(data);
  return <div>Page</div>;
}

export default Page;
