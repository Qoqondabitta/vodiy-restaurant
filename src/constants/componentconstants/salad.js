import achichuk from "../../assets/images/foods/achichuk.jpg";
import saladvodiy from "../../assets/images/foods/saladvodiy.jpg";
import narezkas from "../../assets/images/foods/narezka.avif";
import cabbage from "../../assets/images/foods/karam.jpg";

export const salad = [
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
        "Salad Vodiy (220gr)",
        "Sałatka Vodiy (220gr)",
        "Салат Водий (220 гр)",
      ],
      ingredients: [
        `Ingridients: Bell pepper, beef, tomatoes, cucumbers, garlic, cilantro, sesame, soy
sauce, oil, vegetable, apple cider vinegar, sweet and sour sauce`,
        `Składniki: Papryka, wołowina, pomidory, ogórki, czosnek, kolendra, sezam, soja
sos, olej, warzywa, ocet jabłkowy, sos słodko-kwaśny`,
        `Ингредиенты: Болгарский перец, говядина, помидоры, огурцы, чеснок, кинза, кунжут, соевый 
соус, масло, растительное, яблочное уксус, кисло-сладкий соус 
`,
      ],
      size: "right",
      price: "24.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: saladvodiy,
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
