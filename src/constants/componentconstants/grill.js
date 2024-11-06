import beefgrillkebab from "../../assets/images/foods/beef.jpg";
import lambgrillkebab from "../../assets/images/foods/lamb.jpg";
import chickenwings from "../../assets/images/foods/chickenwings.avif";
import chickenfillet from "../../assets/images/foods/chickenfillet.jpg";
import chicken from "../../assets/images/foods/koreykabaranina.jpeg";
import lulaKebab from "../../assets/images/foods/lulakebab.jpg";
import grilledvegetables from "../../assets/images/foods/grilledvegetables.avif";
import mix from "../../assets/images/foods/mix.jpg";
import baklajankebab from "../../assets/images/foods/baklajankebab.jpg";
import mushrooms from "../../assets/images/foods/mushrooms.png";

export const grill = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Beef Shashlik (160gr)",
        "Szaszłyk Wołowy (160gr)",
        "Говядина Kусковой (160 гр)",
      ],
      ingredients: [
        `Mouth-watering and Delicious Beef Grill Kebab. Feels like Home, Tastes like Paradise. better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla wołowego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Говядина Kусковой. Чувствуешь себя как дома, на вкус как рай. лучше с томатным соусом и луком.`,
      ],
      size: "left",
      price: "24.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: beefgrillkebab,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
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
        "Szaszłyk Baranina (160gr)",
        "Баранина Kусковой шашлык (160 гр)",
      ],
      ingredients: [
        `Mouth-watering and delicious Lamb Grill Kebab. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla Jagnięcinego. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Баранина Kусковой. Чувствуешь себя как дома, на вкус как рай. лучше с томатным соусом и луком.`,
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
        `Mouth-watering and delicious Grilled Chicken Wings. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym kebabem z grilla Skrzydełka Kurczaka. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Куриные Kрылышки. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
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
        `Mouth-watering and delicious Grilled Chicken Wings. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Filetem z kurczaka. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Куриное филе. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
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
        "Polędwica Baranina (160gr)",
        "Корейка Баранина (160 гр)",
      ],
      ingredients: [
        `Mouth-watering and delicious Grilled Lamb Loin. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Polędwicam Jagnięca. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Корейка Баранина. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
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
        `Mouth-watering and delicious Grilled Lula Kebab. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Lula Kebabam. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Люля Kебаб. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
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
        `Black Eggplant, Zucchini, Greens, Bell Pepper (red, yellow, green), Red Onion, Tomato Sauce, Pepper.`,
        `Czarny bakłażan, cukinia, warzywa, papryka (czerwona, żółta, zielona), czerwona cebula, sos pomidorowy, bulgarski pieperz.`,
        `Баклажаны чёрные, кабачки, зелень, болгарский (красный, жёлтый, зелёный), лук красный, соус томатный, перец.`,
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
        `Ingridients: Lamb, Beef, Chicken Wings, Chicken Fillet, Minced Meat, Loin, Tomato, Cucumber, Onion, Greenery.`,
        `Składniki: Baranina, wołowina, skrzydełka z kurczaka, filet z kurczaka, mięso mielone, schab, pomidor, ogórek, cebula, warzywa.`,
        `Ингредиенты: Баранина, Говядина, Куриный Крылышки, Куриный Филе, Фарш, Корейка, Помидор, Огурец, Лук, Зелень.`,
      ],
      size: "right",
      price: "199.99zl",
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
  {
    id: 9,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Baklajan Shashlik (150gr)",
        "Bakłażan Kebab (150gr)",
        "Баклажан Kебаб (150гр)",
      ],
      ingredients: [
        `Mouth-watering and delicious Grilled Eggplant & Beef Shashlik. Feels like Home, Tastes like Paradise, better with some tomato sauce and onion`,
        `Delektuj się przepysznym Bakłażan Kebab. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Aппетитный и Bкусный Баклажан Kебаб. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "left",
      price: "21.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: baklajankebab,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  {
    id: 10,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: [
        "Champignon Mushrooms (150gr)",
        "Grilowane Pieczarki (150gr)",
        "Грибы Шампиньоны (150гр)",
      ],
      ingredients: [
        `Satisfy your hunger with Champignon Mushrooms, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi Grilowane Pieczarki i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce.`,
        `Утолите голод с помощью наших Грибы Шампиньоны и наслаждайтесь едой. Наслаждайтесь жизнью постепенно.`,
      ],
      size: "right",
      price: "19.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: mushrooms,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
  // {
  //   id: 11,
  //   place: "center",
  //   certificate: { top: "70%", left: "6%" },
  //   sign: { top: "75%", left: "26%" },
  //   vector: { deg: "75deg", bot: "42%", left: "35%" },
  //   leftPlacement: {
  //     classTitle: "col-start",
  //     note: [
  //       "Potato Cherry (150gr)",
  //       "Ziemniak Cherry (150gr)",
  //       "Картофель Cherry (150гр)",
  //     ],
  //     ingredients: [
  //       `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
  //       `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
  //       `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
  //     ],
  //     size: "left",
  //     price: "14.99zl",
  //   },
  //   rightPlacement: {
  //     dir: { dir: "bottom" },
  //     classTitle: "align-end",
  //     imgurl: potatocherry,
  //     box: [
  //       { top: "-10px", right: "-20px" },
  //       { left: "-20px", bot: "-20px" },
  //     ],
  //   },
  // },
];
