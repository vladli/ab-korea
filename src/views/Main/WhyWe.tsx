import React from "react";
import { motion } from "framer-motion";

const data = [
  {
    icon: "money",
    title: "100% гарантия",
    text: "Возрата денег, если мы не сможем найти для вас требуемый автомобиль в течении 2х месяцев — вернем предоплату в полном объёме",
  },
  {
    icon: "buy",
    title: "покупка",
    text: "Официальная оплата, платежи осуществляются SWIFT переводом через банк, что гарантирует прозрачность сделки",
  },
  {
    icon: "chat",
    title: "подбор",
    text: "Поможем определиться с моделью, учитывая ваши потребности, бюджет и наличие на рынке",
  },
  {
    icon: "shipping",
    title: "доставка",
    text: "Надежная доставка авто из Южной Кореи по морю, машины транспортируются методом Ro-Ro без использования кранов",
  },
  {
    icon: "photo",
    title: "ФОТО И ВИДЕО",
    text: "Сделаем фото и видео автомобиля и на каждом этапе отправим заказчику",
  },
];

function WhyWe() {
  return (
    <section className="flex min-h-screen select-none flex-col">
      <div className="m-auto p-10">
        <div className="mb-10 text-center">
          <h2>ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-y-20">
          {data.map(({ icon, text, title }, i) => (
            <motion.div
              className="basis-1/3 px-4 text-center [&:nth-child(n+4)]:basis-1/2"
              initial={{ opacity: 0 }}
              key={title}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              <div className="flex h-36 justify-center">
                <dotlottie-player
                  autoplay
                  loop
                  src={`/icons/${icon}.lottie`}
                />
              </div>
              <h3 className="uppercase">{title}</h3>
              <p className="text-lg">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWe;
