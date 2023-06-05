import React from "react";
import type { Metadata } from "next/types";

import Collapse from "@/components/Collapse";
import Container from "@/components/Container";
import { titles } from "@/config/config";

import Faq_1 from "./faq/Faq_1";
import Faq_2 from "./faq/Faq_2";
import Faq_3 from "./faq/Faq_3";
import Faq_4 from "./faq/Faq_4";
import Faq_5 from "./faq/Faq_5";
import Faq_6 from "./faq/Faq_6";
import Faq_7 from "./faq/Faq_7";

export const metadata: Metadata = {
  title: titles.faq,
};

const faq = [
  {
    title: "Как купить авто из Южной Кореи?",
    Component: Faq_1,
  },
  {
    title: "Что входит в стоимость заказа авто?",
    Component: Faq_2,
  },
  {
    title: "Как мне оплатить свой заказ?",
    Component: Faq_3,
  },
  {
    title: "Сколько ждать автомобиль от оплаты до получения?",
    Component: Faq_4,
  },
  {
    title: "Есть ли русский язык в головном устройстве автомобиля?",
    Component: Faq_5,
  },
  {
    title: "Где можно посмотреть отзывы о AB Korea?",
    Component: Faq_6,
  },
  {
    title: "Где искать авто из Южной Кореи самостоятельно?",
    Component: Faq_7,
  },
];

function Page() {
  return (
    <Container>
      <h2 className="text-center">Ответы на часто задаваемые вопросы</h2>
      <div className="p-5">
        {faq.map(({ title, Component }) => (
          <Collapse
            checkbox
            className="rounded-box m-2 border border-base-300 bg-white"
            icon="arrow"
            key={title}
          >
            <Collapse.Title>{title}</Collapse.Title>
            <Collapse.Content>
              <Component />
            </Collapse.Content>
          </Collapse>
        ))}
      </div>
    </Container>
  );
}

export default Page;
