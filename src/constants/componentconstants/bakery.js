import bread from "../../assets/images/foods/bread.webp";
import fatir from "../../assets/images/foods/fatir.jpg";
import somsa from "../../assets/images/foods/somsa.jpg";

export const bakery = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: ["Bread (180gr)", "Chleb (180gr)", "Хлеб (180 гр)"],
      ingredients: [
        `Ingridients: Flour, yeast, milk, sugar, butter, salt, vegetable oil, egg.`,
        `Składniki: Mąka, drożdże, mleko, cukier, masło, sól, olej roślinny, jajko.`,
        `Ингредиенты: Мука, дрожжи, молоко, сахар, масло сливочное, соль, масло растительное яйцо.`,
      ],
      size: "left",
      price: "5.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: bread,
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
      note: ["Fatir (200gr)", "Fatir (200gr)", "Фатир (200 гр)"],
      ingredients: [
        `Ingridients: Flour, yeast, milk, sugar, butter, salt, vegetable oil, egg.`,
        `Składniki: Mąka, drożdże, mleko, cukier, masło, sól, olej roślinny, jajko.`,
        `Ингредиенты: Мука, дрожжи, молоко, сахар, масло сливочное, соль, масло растительное яйцо.`,
      ],
      size: "right",
      price: "14.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: fatir,
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
      note: ["Samsa (160gr)", "Samsa (160gr)", "Самса (160гp)"],
      ingredients: [
        `Beef, chopped onion, butter, Zira, coriander, sesame, dough,
puff pastry, black pepper, tomato sauce.`,
        `Składniki: Wołowina, siekana cebula, masło, kminek, kolendra, sezam, ciasto,
ciasto francuskie, pieprz czarny, sos pomidorowy.`,
        `Ингредиенты: Говядина, рубленая лук, масло сливочное, Зира, кориандр, кунжут, тесто, 
слоёное, чёрный перец, соус томатный.  
`,
      ],
      size: "left",
      price: "11.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: somsa,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
