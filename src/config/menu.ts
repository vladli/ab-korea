import { AiOutlineCar } from "react-icons/ai";
import { BsBook } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineInfo, MdOutlineRateReview } from "react-icons/md";
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
    icon: AiOutlineCar,
    url: "/",
    title: "Заказ авто",
  },
  {
    icon: BsBook,
    url: "/",
    title: "Каталог",
  },
  {
    icon: MdOutlineRateReview,
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
    icon: MdOutlineInfo,
    url: "/about",
    title: "О нас",
  },
];
