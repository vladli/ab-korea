import React from "react";

async function getItems(id: any) {
  const params = {
    id: id,
  };
  const result = await fetch(`${process.env.WEBSITE}/api/catalog/item?`);

  const data = await result.json();
  return data;
}

function Page({ params }: any) {
  console.log(params);
  return <div>Page</div>;
}

export default Page;
