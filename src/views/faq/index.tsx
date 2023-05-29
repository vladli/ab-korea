import React from "react";

import Container from "@/components/Container";
import Body from "@/components/Layout/Body";

import Collapse from "./components/Collapse";

const faq = [
  {
    title: "Как купить авто из Южной Кореи?",
    mdLink: "faq_1",
  },
  {
    title: "Что входит в стоимость заказа авто?",
    mdLink: "faq_2",
  },
  {
    title: "Как мне оплатить свой заказ?",
    mdLink: "faq_2",
  },
  {
    title: "Сколько ждать автомобиль от оплаты до получения?",
    mdLink: "faq_2",
  },
  {
    title: "Есть ли русский язык в головном устройстве автомобиля?",
    mdLink: "faq_2",
  },
  {
    title: "Кнопку ГЛОНАСС обязательно устанавливать?",
    mdLink: "faq_2",
  },
  {
    title: "Где можно посмотреть отзывы о AB Korea?",
    mdLink: "faq_2",
  },
  {
    title: "Где искать авто из Южной Кореи самостоятельно?",
    mdLink: "faq_2",
  },
];

function Main() {
  return (
    <Body>
      <Container>
        <h2 className="text-center">Ответы на часто задаваемые вопросы</h2>
        <div className="p-5">
          {faq.map(({ title, mdLink }) => (
            <Collapse
              key={title}
              mdLink={mdLink}
              title={title}
            />
          ))}
        </div>
      </Container>
    </Body>
  );
}

export default Main;
