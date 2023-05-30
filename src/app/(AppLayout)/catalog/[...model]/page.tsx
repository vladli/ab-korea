import React from "react";

import Header from "@/components/Layout/Header";

type Props = {
  params: {
    model: string[];
  };
};

function Page({ params }: Props) {
  console.log(params.model);
  return (
    <main className="min-h-screen">
      <Header />
    </main>
  );
}

export default Page;
