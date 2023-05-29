import React from "react";
import ReactMarkdown from "react-markdown";

import Container from "@/components/Container";
import Body from "@/components/Layout/Body";

import faq_1 from "../../../public/markdown/faq_1.md";

import Collapse from "./components/Collapse";

function Main() {
  return (
    <Body>
      <Container>
        <h2 className="text-center">Ответы на часто задаваемые вопросы</h2>
        <div className="p-5">
          <Collapse
            text={<ReactMarkdown children="/markdown/faq_1.md" />}
            title="asd"
          />
        </div>
      </Container>
    </Body>
  );
}

export default Main;
