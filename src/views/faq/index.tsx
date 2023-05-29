import React from "react";

import Container from "@/components/Container";
import Body from "@/components/Layout/Body";

import Collapse from "./components/Collapse";

function Main() {
  return (
    <Body>
      <Container>
        <h2 className="text-center">Ответы на часто задаваемые вопросы</h2>
        <div className="p-5">
          <Collapse
            text="dsa"
            title="asd"
          />
        </div>
      </Container>
    </Body>
  );
}

export default Main;
