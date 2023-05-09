import React from "react";

const data = [
  {
    title: "100% гарантия",
    text: "Возрата денег, если мы не сможем найти для вас требуемый автомобиль в течении 2х месяцев — вернем предоплату в полном объёме",
  },
  {
    title: "покупка",
    text: "Официальная оплата, платежи осуществляются swift переводом через банк, что гарантирует прозрачность сделки",
  },
  {
    title: "подбор",
    text: "Поможем определиться с моделью, учитывая ваши потребности, бюджет и наличие на рынке. Мы всегда на связи. Быстро реагируем на объявления и получаем инофрмацию о хороших авто раньше всех",
  },
  {
    title: "доставка",
    text: "Надежная доставка авто из Южной Кореи по морю машины транспортируются методом Ro-Ro без использования кранов",
  },
  {
    title: "ФОТО И ВИДЕО",
    text: "Сделаем фото и видео автомобиля и на каждом этапе отправим заказчику",
  },
];

function Block_2() {
  return (
    <div>
      <div className="my-52 text-center">
        <h1>ПОЧЕМУ ВЫБИРАЮТ НАС?</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-y-20">
        {data.map((item) => (
          <div
            className="basis-1/3 text-center px-4 [&:nth-child(n+4)]:basis-1/2"
            key={item.title}
          >
            <p>icon</p>
            <h3 className="uppercase">{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Block_2;
