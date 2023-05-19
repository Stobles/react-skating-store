import {
  BiHomeAlt,
  BiSearchAlt,
  BiShoppingBag,
  BiBookContent,
  BiUser,
} from 'react-icons/bi';
import { slide, delivery, gift, wallet, headphones } from '.';

export const navLinks = [
  { name: 'Главная', to: '/' },
  { name: 'Магазин', to: '/store' },
  { name: 'Блог', to: '/blog' },
  { name: 'О нас', to: '/about' },
  { name: 'Помощь', to: '/help' },
];

export const barLinks = [
  { name: 'Главная', to: '/', icon: BiHomeAlt },
  { name: 'Каталог', to: '/store', icon: BiSearchAlt },
  { name: 'Корзина', to: '/cart', icon: BiShoppingBag },
  { name: 'Блог', to: '/blog', icon: BiBookContent },
  { name: 'Вы', to: '/user', icon: BiUser },
];

export const helpFooterLinks = [
  { name: 'Конфиденциальность', to: '/privacy' },
  { name: 'Доставка', to: '/shipping' },
  { name: 'Возврат', to: '/returns' },
  { name: 'Отследить заказ', to: '/tracker' },
];

export const shopFooterLinks = [
  { name: 'Коньки', to: '/' },
  { name: 'Лезвия', to: '/' },
  { name: 'Одежда', to: '/' },
  { name: 'Другое', to: '/' },
];

export const supportFooterLinks = [
  { name: 'Обратная связь', to: '/feedback' },
  { name: 'Контакты', to: '/contacts' },
  { name: 'Условия использования', to: '/terms' },
];

export const homeSlides = [
  {
    title: 'Товары от лучших производителей',
    subtitle: 'Новая коллекция 2023',
    text: 'Скидка 50% на все товары',
    src: slide,
    productId: '12',
  },
  {
    title: 'Товары от лучших производителей',
    subtitle: 'Новая коллекция 2023',
    text: 'Скидка 10% на все товары',
    src: slide,
    productId: '13',
  },
  {
    title: 'Товары от лучших производителей',
    subtitle: 'Новая коллекция 2023',
    text: 'Скидка 20% на все товары',
    src: slide,
    productId: '14',
  },
];

export const serviceCards = [
  {
    icon: delivery,
    title: 'Доставка бесплатно',
    text: 'Для заказов от 5000 руб.',
  },
  {
    icon: gift,
    title: 'Подарочная карта',
    text: 'Оформите заказ от 10000 руб',
  },
  {
    icon: wallet,
    title: 'Быстрая оплата',
    text: '100% безопасные платежи',
  },
  {
    icon: headphones,
    title: '24/7 Поддержка',
    text: 'Быстрая поддержка',
  },
];
