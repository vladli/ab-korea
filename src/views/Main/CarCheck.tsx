import clsx from "clsx";

import Header from "@/components/Layout/Header";

const data = [
  {
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
    title: "Тормозная система",
    text: `Проверяем общее состояние
    системы, отсутствие утечек,
    исправность работы механизмов.
    Оцениваем равномерность износа
    дисков и колодок и срок их
    замены.`,
  },
  {
    title: "Трансмиссия",
    text: `Проверяем плавность
    переключения передач,
    отсутствие течей, запотеваний и
    ресурс вариатора.`,
  },
  {
    title: "Дивгатель",
    text: `Выполняем общий осмотр
    двигателя, заводим и слушает его.
    Проверяем отсутствие течей и
    запотеваний.`,
  },
];

const right = [];

const Block = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="gap-x-10 text-center">
      <h3 className="uppercase">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};

function CarCheck() {
  return (
    <>
      <section className="flex min-h-[100vh-4rem] select-none flex-col p-10">
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
              />
            </div>
          </div>
          {data.map(({ title, text }) => (
            <Block
              key={title}
              {...{ title, text }}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default CarCheck;
