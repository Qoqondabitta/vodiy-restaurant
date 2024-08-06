import { breakfast } from "./breakfast";
import { drinks } from "./drinks";
import { main } from "./mainDishes";
import { soups } from "./soups";
import { grill } from "./grill";
import { vegan } from "./vegan";
import { bakery } from "./bakery";
import { salad } from "./salad";
import { additives } from "./garnir";

export const m = ["Main Page", "Strona Główna", "Главная страница"];

export const menuNavbar = [
  {
    title: ["Dishes", "Dania", "блюда"],
    tag: "main",
    data: main,
    everyTag: "main soups additives bakery salad grill vegan"
  },
  { title: ["Drinks", "Napoje", "Напитки"], tag: "drinks", data: drinks },
];

export const dishbar = [
  { title: ["Soups", "Zupy", "Супы"], tag: "soups", data: soups },
  {
    title: ["Breakfast", "Śniadanie", "Завтрак"],
    tag: "breakfast",
    data: breakfast,
  },
  {
    title: ["Main Dishes", "Dania Główne", "Основные блюда"],
    tag: "main",
    data: main,
  },
  { title: ["Grill", "Grill", "Гриль"], tag: "grill", data: grill },
  { title: ["Vegan", "Vegan", "Веган"], tag: "vegan", data: vegan },
  { title: ["Bakery", "Piekarnia", "Пекарня"], tag: "bakery", data: bakery },
  { title: ["Salads", "Sałatki", "Салаты"], tag: "salad", data: salad },
  {
    title: ["Additives", "Dodatki", "добавок"],
    tag: "additives",
    data: additives,
  },
];



export const minlist = [
  { title: ["Soups", "Zupy", "Супы"], tag: "soups", data: soups },
  {
    title: ["Breakfast", "Śniadanie", "Завтрак"],
    tag: "breakfast",
    data: breakfast,
  },
  {
    title: ["Main Dishes", "Dania Główne", "Основные блюда"],
    tag: "main",
    data: main,
  },
  { title: ["Grill", "Grill", "Гриль"], tag: "grill", data: grill },
  { title: ["Vegan", "Vegan", "Веган"], tag: "vegan", data: vegan },
  { title: ["Bakery", "Piekarnia", "Пекарня"], tag: "bakery", data: bakery },
  { title: ["Drinks", "Napoje", "Напитки"], tag: "drinks", data: drinks },
  {
    title: ["Additives", "Dodatki", "добавок"],
    tag: "additives",
    data: additives,
  },
  { title: ["Salads", "Sałatki", "Салаты"], tag: "salad", data: salad },
];