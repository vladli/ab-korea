import React from "react";
import Image from "next/image";

const data = [
  {
    icon: "money",
    title: "100% гарантия",
    text: "Возрата денег, если мы не сможем найти для вас требуемый автомобиль в течении 2х месяцев — вернем предоплату в полном объёме",
  },
  {
    icon: "buy",
    title: "покупка",
    text: "Официальная оплата, платежи осуществляются swift переводом через банк, что гарантирует прозрачность сделки",
  },
  {
    icon: "consulting",
    title: "подбор",
    text: "Поможем определиться с моделью, учитывая ваши потребности, бюджет и наличие на рынке. Мы всегда на связи. Быстро реагируем на объявления и получаем инофрмацию о хороших авто раньше всех",
  },
  {
    icon: "shipping",
    title: "доставка",
    text: "Надежная доставка авто из Южной Кореи по морю машины транспортируются методом Ro-Ro без использования кранов",
  },
  {
    icon: "photo",
    title: "ФОТО И ВИДЕО",
    text: "Сделаем фото и видео автомобиля и на каждом этапе отправим заказчику",
  },
];

export default function BuyingGuide() {
  return (
    <div>
      <div className="my-40 text-center">
        <h1>ЭТАПЫ ПОКУПКИ АВТОМОБИЛЯ</h1>
      </div>

      <div className="steps steps-vertical flex justify-center">
        <div className="step">
          <Stepper />
        </div>
      </div>
    </div>
  );
}

const Stepper = () => {
  return (
    <div className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-xl font-medium">
        Focus me to see content
      </div>
      <div className="collapse-content">
        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
      </div>
    </div>
  );
};
