import { FaQuestion } from "react-icons/fa";
import { TbBrandPagekit } from "react-icons/tb";
type MenuItem = {
  icon?: any;
  url: string;
  title: string;
}[];

export const menu: MenuItem = [
  {
    icon: TbBrandPagekit,
    url: "/",
    title: "Главная",
  },
  {
    icon: TbBrandPagekit,
    url: "/",
    title: "Заказ авто",
  },
  {
    icon: TbBrandPagekit,
    url: "/",
    title: "Каталог",
  },
  {
    icon: TbBrandPagekit,
    url: "/reviews",
    title: "Отзывы",
  },
  {
    icon: TbBrandPagekit,
    url: "/",
    title: "Кейсы",
  },
  {
    icon: FaQuestion,
    url: "/faq",
    title: "FAQ",
  },
  {
    icon: TbBrandPagekit,
    url: "/about",
    title: "О нас",
  },
];
