import React from "react";

import Header from "@/components/Layout/Header";
import Main from "@/views/admin/addItem";

type Props = {
  params: {
    page: string;
  };
};

function Page({ params }: Props) {
  console.log(params);
  return (
    <main className="min-h-screen">
      <Header />
      <Main />
    </main>
  );
}

export default Page;
