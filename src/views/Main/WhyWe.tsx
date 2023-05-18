import React from "react";
import { motion } from "framer-motion";
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

function WhyWe() {
  return (
    <section className="flex min-h-screen select-none flex-col bg-gray-800">
      <div className="m-auto p-10">
        <div className="mb-10 text-center">
          <h2>ПОЧЕМУ ВЫБИРАЮТ НАС?</h2>
        </div>
        <div className="flex flex-row flex-wrap justify-around gap-y-20">
          {data.map((item, i) => (
            <motion.div
              className="basis-1/3 px-4 text-center [&:nth-child(n+4)]:basis-1/2"
              initial={{ opacity: 0 }}
              key={item.title}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, transition: { delay: i - 0.8 } }}
            >
              <div className="flex justify-center overflow-x-hidden">
                <Image
                  alt=""
                  height={100}
                  src={`/icons/${item.icon}.png`}
                  width={100}
                />
              </div>
              <h3 className="uppercase">{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyWe;
