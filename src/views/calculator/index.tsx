import React from "react";

import Container from "@/components/Container";
import Body from "@/components/Layout/Body";

import Form from "./components/Form";

function Main() {
  return (
    <Body>
      <Container>
        <h2 className="text-center">Калькулятор стоимости автомобиля</h2>
        <Form />
      </Container>
    </Body>
  );
}

export default Main;
