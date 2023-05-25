import clsx from "clsx";

import Header from "@/components/Layout/Header";

const left = [
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
    title: "Трансмиссия",
    text: `Проверяем плавность
    переключения передач,
    отсутствие течей, запотеваний и
    ресурс вариатора.`,
  },
];

const right = [
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
    title: "Тормозная система",
    text: `Проверяем общее состояние
    системы, отсутствие утечек,
    исправность работы механизмов.
    Оцениваем равномерность износа
    дисков и колодок и срок их
    замены.`,
  },
  {
    title: "Дивгатель",
    text: `Выполняем общий осмотр
    двигателя, заводим и слушает его.
    Проверяем отсутствие течей и
    запотеваний.`,
  },
];

const Block = ({ title, text }: { title: string; text: string }) => {
  return (
    <div>
      <h3 className="uppercase">{title}</h3>
      <p className="text-lg">{text}</p>
    </div>
  );
};

function CarCheck() {
  return (
    <>
      <section className="flex select-none flex-col overflow-hidden">
        <div className="mb-10 text-center">
          <h2>ПРОВЕРЯЕМ ПРИ ОСМОТРЕ</h2>
        </div>
        <div className="flex flex-wrap p-4">
          <div className="basis-1/3">
            {left.map(({ title, text }) => (
              <Block
                key={title}
                {...{ title, text }}
              />
            ))}
          </div>
          <div className="shrink-0 basis-1/3">img</div>
          <div className="basis-1/3">
            {right.map(({ title, text }) => (
              <Block
                key={title}
                {...{ title, text }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default CarCheck;
