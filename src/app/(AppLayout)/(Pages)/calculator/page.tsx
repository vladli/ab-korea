import React from "react";
import type { Metadata } from "next/types";

import Container from "@/components/Container";
import { titles } from "@/config/config";

import Form from "./components";

export const metadata: Metadata = {
  title: titles.calculator,
};

function Page() {
  return (
    <Container>
      <h2 className="text-center">Калькулятор стоимости автомобиля</h2>
      <Form />
    </Container>
  );
}

export default Page;
