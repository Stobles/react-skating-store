import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  BiHomeAlt,
  BiSearchAlt,
  BiShoppingBag,
  BiBookContent,
  BiSupport,
  BiUser,
} from "react-icons/bi";
import { slide1, slide2, slide3, delivery, gift, wallet, headphones } from ".";

export const categories = [
  { value: "", label: "Все" },
  { value: "Shoes", label: "Ботинки" },
  { value: "Skates", label: "Коньки" },
  { value: "Blades", label: "Лезвия" },
  { value: "Clothes", label: "Одежда" },
  { value: "Bags", label: "Сумки" },
  { value: "Accessories", label: "Аксессуары" },
  { value: "Protect", label: "Защита" },
];

export const navLinks = [
  { name: "Главная", to: "/", Icon: BiHomeAlt },
  { name: "Магазин", to: "/store", Icon: BiSearchAlt },
  { name: "Блог", to: "/blog", Icon: BiBookContent },
];

export const barLinks = [
  { name: "Главная", to: "/", icon: BiHomeAlt },
  { name: "Каталог", to: "/store", icon: BiSearchAlt },
  { name: "Корзина", to: "/cart", icon: BiShoppingBag },
  { name: "Блог", to: "/blog", icon: BiBookContent },
  { name: "Вы", to: "/user", icon: BiUser },
];

export const helpFooterLinks = [
  { name: "Конфиденциальность", to: "/privacy" },
  { name: "Доставка", to: "/shipping" },
  { name: "Возврат", to: "/returns" },
  { name: "Отследить заказ", to: "/tracker" },
];

export const shopFooterLinks = [
  { name: "Коньки", to: "/" },
  { name: "Лезвия", to: "/" },
  { name: "Одежда", to: "/" },
  { name: "Другое", to: "/" },
];

export const supportFooterLinks = [
  { name: "Обратная связь", to: "/feedback" },
  { name: "Контакты", to: "/contacts" },
  { name: "Условия использования", to: "/terms" },
];

export const homeSlides = [
  {
    title: "Товары от лучших производителей",
    subtitle: "Новая коллекция 2023",
    text: "Скидка 10% по карте",
    src: slide1,
    productId: "RVLyb3HhJJMW8ASaeoYJ",
  },
  {
    title: "Профессиональная экипировка",
    subtitle: "Новая коллекция 2023",
    text: "Гарантия от 4-х месяцев",
    src: slide2,
    productId: "N6OGGQfdYc9tutSRy53m",
  },
  {
    title: "Все для фигурного катания",
    subtitle: "Новая коллекция 2023",
    text: "Доставка по всей России",
    src: slide3,
    productId: "m2NzCwKRzQQgC2at5ucx",
  },
];

export const serviceCards = [
  {
    icon: delivery,
    title: "Доставка бесплатно",
    text: "Для заказов от 5000 руб.",
  },
  {
    icon: gift,
    title: "Подарочная карта",
    text: "Оформите заказ от 10000 руб",
  },
  {
    icon: wallet,
    title: "Быстрая оплата",
    text: "100% безопасные платежи",
  },
  {
    icon: headphones,
    title: "24/7 Поддержка",
    text: "Быстрая поддержка",
  },
];
