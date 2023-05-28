import Image from "next/image";

const data = [
  {
    icon: "sign",
    title: "Подписание договора",
    text: "Подписание договора. После ознакомления с формой договора, Вам необходимо заполнить все реквизиты, внести паспортные и контактные данные.",
  },
  {
    icon: "cash-payment",
    title: "Предоплата",
    text: "Вносите предоплату в размере $1500 или 90000 руб. на счет нашего представителя в России.",
  },
  {
    icon: "car-search",
    title: "Подбор авто",
    text: "Подбираем авто под ваши требования (модель/пробег/год выпуска/бюджет/комплектация и т.д.) с закрытых аукционов или дилерских площадок. Вы выбираете понравившийся автомобиль.",
  },
  {
    icon: "checklist",
    title: "Инспекция",
    text: "Выезжаем на инспекцию выбранного Вами автомобиля. Выезды осуществляются раз в неделю. Если автомобиль устраивает, то бронируем и начинаем процесс выкупа автомобиля.",
  },
  {
    icon: "invoice",
    title: "Выставляем счет",
    text: "Выставляем инвойс. Вы оплачиваете на основании договора сумму, указанную в предварительном расчете со всеми расходами до Владивостока через банки, которые осуществляют SWIFT-переводы. Квитанцию об оплате отправляете нам.",
  },
  {
    icon: "cargo-ship",
    title: "Доставка",
    text: "Доставка автомобиля осуществляется по морю до г. Владивостока. Мы предоставим Вам контакты таможенного брокера. Далее транспортная компания доставляет автомобиль по Ж/Д путям или автовозом.",
  },
];

type Props = {
  item: (typeof data)[number];
};

function Guide() {
  return (
    <div>
      {data.map((item, i) => (
        <div
          className="my-2 flex w-full justify-center"
          key={item.title}
        >
          <Stepper {...{ item }} />
        </div>
      ))}
    </div>
  );
}

const Stepper = ({ item }: Props) => {
  return (
    <div className="collapse-open rounded-box collapse w-11/12 border border-base-300 bg-base-100">
      <div className="collapse-title text-xl font-medium uppercase">
        <div className="flex gap-2">
          <Image
            alt=""
            height={30}
            priority
            src={`/icons/${item.icon}.png`}
            width={30}
          />
          {item.title}
        </div>
      </div>
      <div className="collapse-content text-lg">{item.text}</div>
    </div>
  );
};

export default Guide;
