import React from "react";

import Main from "./components";

type Props = {
  params: {
    page: string;
  };
};

function Page({ params }: Props) {
  console.log(params);
  return (
    <>
      <Main />
    </>
  );
}

export default Page;
