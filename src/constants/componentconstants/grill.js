import beefgrillkebab from "../../assets/images/foods/beefgrill.webp";
import lambgrillkebab from "../../assets/images/foods/lamb.jpg";
import chickenwings from "../../assets/images/foods/chickenwings.avif";
import chickenfillet from "../../assets/images/foods/chickenfillet.jpg";
import chicken from "../../assets/images/foods/koreykabaranina.jpeg";
import lulaKebab from "../../assets/images/foods/lula.avif";
import grilledvegetables from "../../assets/images/foods/grilledvegetables.avif";
import mix from "../../assets/images/foods/mix.jpg";

export const grill = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "35%", left: "40%" },
    leftPlacement: {
      classTitle: "col-start-end",
      note: [
        "Beef Grill Kebab (160gr)",
        "Szaszłyk Wołowy (160gr)",
        "Говядина Kусковой (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Beef Grill Kebab. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla wołowego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным кебабом из говядины-гриль. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "left",
      price: "24.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-start",
      imgurl: beefgrillkebab,
      box: [
        { top: "-20px", right: "-20px" },
        { left: "-20px", bot: "-10px" },
      ],
    },
  },
  {
    id: 2,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: [
        "Lamb Grill Kebab (160gr)",
        "Szaszłyk Jagnięcina (160gr)",
        "Баранина Kусковой шашлык (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Lamb Grill Kebab. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla Jagnięcinego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Баранина Kусковой шашлык. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "right",
      price: "25.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: lambgrillkebab,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 3,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Chicken Wings (160gr)",
        "Skrzydełka Kurczaka (160gr)",
        "Куриные Kрылышки (160гp)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Chicken Wings. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla Skrzydełka Kurczaka. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Куриные Kрылышки. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "left",
      price: "21.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: chickenwings,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 4,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: [
        "Chicken Fillet (160gr)",
        "Filet z kurczaka (160gr)",
        "Куриное филе (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Chicken Wings. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Filetem z kurczaka. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Куриное филе. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "right",
      price: "24.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: chickenfillet,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 5,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Lamb Loin (160gr)",
        "Polędwica Jagnięca (160gr)",
        "Корейка Баранина (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Lamb Loin. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Polędwicam Jagnięca. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Корейка Баранина. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "left",
      price: "57.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: chicken,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 6,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: ["Lula Kebab (160gr)", "Lula Kebab (160gr)", "Люля Kебаб (160гр)"],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Lula Kebab. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Lula Kebabam. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Люля Kебаб. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "right",
      price: "21.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: lulaKebab,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 7,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Grilled Vegetables (150gr)",
        "Grilowane warzywa (150gr)",
        "Овощи на гриле (150гр)",
      ],
      ingredients: [
        `Ingridients: Black Eggplant, Zucchini, Greens, Bell Pepper (red, yellow, green), Red Onion, Tomato Sauce, Pepper.`,
        `Składniki: Czarny bakłażan, cukinia, warzywa, papryka (czerwona, żółta, zielona), czerwona cebula, sos pomidorowy, papryka.`,
        `Ингредиенты: Баклажаны чёрные, кабачки, зелень, болгарский (красный, жёлтый, зелёный), лук красный, соус томатный, перец.`,
      ],
      size: "left",
      price: "31.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: grilledvegetables,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 8,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: ["Vodiy Mix (1200gr)", "Vodiy Mix (1200gr)", "Водий Микс (1200гр)"],
      ingredients: [
        `Ingridients: Lamb, Beef, Chicken Wings, Chicken Fillet, Minced Meat, Loin, Tomato, Cucumber, Onion, Greens.`,
        `Składniki: Jagnięcina, wołowina, skrzydełka z kurczaka, filet z kurczaka, mięso mielone, schab, pomidor, ogórek, cebula, warzywa.`,
        `Ингредиенты: Баранина, Говядина, Куриный Крылышки, Куриный Филе, Фарш, Корейка, Помидор, Огурец, Лук, Зелень.`,
      ],
      size: "right",
      price: "170.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: mix,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
