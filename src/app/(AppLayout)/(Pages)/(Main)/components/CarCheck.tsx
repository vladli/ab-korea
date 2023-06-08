import Image from "next/image";

const data = [
  {
    icon: "body",
    title: "Кузов",
    text: `Осмотр скрытых полостей кузова
    и несущих конструкций на
    предмет целостности/ремонта/
    общего состояния. Осмотр общего
    состояния кузова на наличие
    сколов, вмятин, царапин, ремонта,
    замены, окраса. Замер толщины
    лакокрасочного покрытия.`,
  },
  {
    icon: "suspension",
    title: "Подвеска",
    text: `Оцениваем износ рычагов,
    сайлентблоков и амортизаторов,
    ищем утечки жидкостей и
    запотевания. По возможности -
    проводим тест-драйв, чтобы
    услышать непредусмотренные
    стуки и скрежеты.`,
  },
  {
    icon: "electricity",
    title: "Электроника",
    text: `Проверяем систему зажигания,
    осветительные приборы,
    приборную панель,
    кондиционирование,
    электроподъемники, аудио- и
    видеосистемы, круиз-контроль И
    многое другое.`,
  },
  {
    icon: "brakes",
    title: "Тормозная система",
    text: `Проверяем общее состояние
    системы, отсутствие утечек,
    исправность работы механизмов.
    Оцениваем равномерность износа
    дисков и колодок и срок их
    замены.`,
  },
  {
    icon: "gear",
    title: "Трансмиссия",
    text: `Проверяем плавность
    переключения передач,
    отсутствие течей, запотеваний и
    ресурс вариатора.`,
  },
  {
    icon: "engine",
    title: "Дивгатель",
    text: `Выполняем общий осмотр
    двигателя, заводим и слушает его.
    Проверяем отсутствие течей и
    запотеваний.`,
  },
];

const Block = ({
  icon,
  title,
  text,
}: {
  icon?: string;
  title: string;
  text: string;
}) => {
  return (
    <div className="gap-x-10 text-center">
      <span className="flex flex-col items-center">
        <Image
          alt=""
          className="mask mask-hexagon my-1 bg-black/10 p-3"
          height={64}
          priority
          src={`/carParts/${icon}.png`}
          width={64}
        />
        <h3 className="uppercase">{title}</h3>
      </span>
      <p className="text-lg">{text}</p>
    </div>
  );
};

function CarCheck() {
  return (
    <>
      <section className="flex select-none flex-col p-10">
        <div className="mb-10 text-center">
          <h2>ПРОВЕРЯЕМ ПРИ ОСМОТРЕ</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="col-start-1 row-span-3 row-start-4 place-self-center self-center lg:col-start-2 lg:row-start-1">
            <div className="h-80 lg:h-fit">
              <dotlottie-player
                autoplay
                loop
                src={`/car_check.lottie`}
                subframe
              />
            </div>
          </div>
          {data.map(({ icon, title, text }) => (
            <Block
              key={title}
              {...{ icon, title, text }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CarCheck;
