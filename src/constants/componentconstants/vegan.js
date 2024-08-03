import lagmanFried from "../../assets/images/foods/lagmanFriedMenu.avif";
import achichuk from "../../assets/images/foods/achichuk.jpg";
import narezkas from "../../assets/images/foods/narezka.avif";
import cabbage from "../../assets/images/foods/karam.jpg";

export const vegan = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "30%", left: "40%" },
    leftPlacement: {
      classTitle: "col-start-end",
      note: ["Achichuk (200gr)", "Achichuk (200gr)", "Ачичук (200 гр)"],
      ingredients: [
        `Ingridients: Tomato, cucumbers, onion, salt, pepper, cilantro, basil, greenery, bell.`,
        `Składniki: Pomidor, ogórki, cebula, sól, pieprz, kolendra, bazylia, zieleń, dzwonek.`,
        `Ингредиенты: Помидоры, огурцы, лук, соль, перец, кинза, базилик, зелень, болгарский перец.`,
      ],
      size: "left",
      price: "9.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-start",
      imgurl: achichuk,
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
        "Lagman Fried (500gr)",
        "Lagman Smażony (500gr)",
        "Лагман Жареный (500 гр)",
      ],
      ingredients: [
        `Ingridients: Chinese Cabbage, Daikon, Celery, Beans,
        Tomate Souce, Ginger, Bell Pepper, Star Anise, Egg,
        Soy Sauce, Pasta, Onion, Pepper, Garlic, Spicy Sauce, Dill, Cilantro.`,
        `Składniki: Kapusta pekińska, daikon, seler, fasola, pasta pomidorowa, 
         papryka, imbir, anyż, czosnek, sos sojowy, makaron, cebula, kolendra, 
         koperek, ostry sos, jajko.`,
        `Ингредиенты: пекинская капуста, дайкон, сельдерей, фасоль, томатная паста, 
        болгарский, перец, имбирь, бадьян, чеснок, соевый соус, лапша, лук, кинза, 
        укроп, острый соус, яйцо.`,
      ],
      size: "right",
      price: "32.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: lagmanFried,
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
        "Cutting Vegetables (300gr)",
        "Krojenie Warzyw (300gr)",
        "Hарезка Oвощей (300гp)",
      ],
      ingredients: [
        `Ingridients: Tomato, cucumbers, onion, salt, pepper, cilantro, basil, greenery, bell.`,
        `Składniki: Pomidor, ogórki, cebula, sól, pieprz, kolendra, bazylia, zieleń, dzwonek.`,
        `Ингредиенты: Помидоры, огурцы, лук, соль, перец, кинза, базилик, зелень, болгарский перец.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: narezkas,
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
        "Cabbage Salad (200gr)",
        "Sałatka z kapusty (200gr)",
        "Cалат Капустa (200 гр)",
      ],
      ingredients: [
        `Ingridients: Cabbage, cucumbers, onions, salt, pepper, cilantro, lemon, herbs, garlic, tomatoes, bell pepper, sunflower oil.`,
        `Składniki: Kapusta, ogórki, cebula, sól, pieprz, kolendra, cytryna, zioła, czosnek, pomidory, olej słonecznikowy.`,
        `Ингредиенты: Капуста, огурцы, лук, соль, перец, кинза, лимон, зелень, чеснок, помидоры, болгарский, подсолнечное масло.`,
      ],
      size: "right",
      price: "7.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: cabbage,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
