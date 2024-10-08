import achichuk from "../../assets/images/foods/achichuk2.jpg";
import narezkas from "../../assets/images/foods/narezka.jpg";
import cabbage from "../../assets/images/foods/karam.jpg";
// import saladvodiy from "../../assets/images/foods/saladvodiy.jpg";

export const salad = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: ["Achichuk (200gr)", "Achichuk (200gr)", "Ачичук (200 гр)"],
      ingredients: [
        `Ingridients: Tomato, cucumbers, onion, salt, pepper, cilantro, basil, greenery, bell pepper.`,
        `Składniki: Pomidor, ogórki, cebula, sól, pieprz, kolendra, bazylia, zieleń, bulgarski pieperz.`,
        `Ингредиенты: Помидоры, огурцы, лук, соль, перец, кинза, базилик, зелень, болгарский перец.`,
      ],
      size: "left",
      price: "9.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: achichuk,
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
        "Chopped Vegetables (300gr)",
        "Krojenie Warzyw (300gr)",
        "Hарезка Oвощей (300гp)",
      ],
      ingredients: [
        `Ingridients: Tomato, cucumbers, onion, salt, pepper, cilantro, basil, greenery, bell.`,
        `Składniki: Pomidor, ogórki, cebula, sól, pieprz, kolendra, bazylia, zieleń, bulgarski pieperz.`,
        `Ингредиенты: Помидоры, огурцы, лук, соль, перец, кинза, базилик, зелень, болгарский перец.`,
      ],
      size: "right",
      price: "14.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: narezkas,
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
  "Cabbage Salad (200gr)",
  "Sałatka z kapusty (200gr)",
  "Cалат Капустa (200 гр)",
      ],
      ingredients: [
    `Ingridients: Cabbage, cucumbers, onions, salt, pepper, cilantro, lemon, herbs, garlic, tomatoes, bell pepper, sunflower oil.`,
  `Składniki: Kapusta, ogórki, cebula, sól, pieprz, kolendra, cytryna, zioła, czosnek, pomidory, olej słonecznikowy.`,
  `Ингредиенты: Капуста, огурцы, лук, соль, перец, кинза, лимон, зелень, чеснок, помидоры, болгарский, подсолнечное масло.`,
  ],
      size: "left",
      price: "7.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: cabbage,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
