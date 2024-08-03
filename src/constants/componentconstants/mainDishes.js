import plov from "../../assets/images/foods/plov.jpg";
import kazankebab from "../../assets/images/foods/kazan-kebab.jpg";
import manti from "../../assets/images/foods/manti.jpg";
import lagmanFried from "../../assets/images/foods/lagmanFriedMenu.avif";
import chicken from "../../assets/images/foods/chicken.webp";
import beefstroganoff from "../../assets/images/foods/beefstroganof.avif";
import beefsteak from "../../assets/images/foods/beefsteak.jpg";
import gulash from "../../assets/images/foods/gulash.jpg";
import meatballs from "../../assets/images/foods/meatballs.webp";
import grapeleefrolls from "../../assets/images/foods/grapeleefrolls.jpg";

export const main = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "30%", left: "40%" },
    leftPlacement: {
      classTitle: "col-start-end",
      note: [
        "Uzbek Pilaf (450gr)",
        "Uzbecki Pilaw (450gr)",
        "Узбекский Плов (450 гр)",
      ],
      ingredients: [
        `Ingridients: Rice, Beef/Lamb, Lamb Tail Fat, Red/Yellow Carrot, Sunflower
            Oil, Egg, Onion, Pepper, Cumin, Garlik, Sultanas.`,
        `Składniki: Ryż, wołowina/jagnięcina, gruby ogon, czerwona/żółta marchew, słonecznik
            Olej, jajko, cebula, pieprz, kminek, czosnek.`,
        `Ингредиенты: Pис, говядина/баранина, курдюк, красная/желтая морковь, подсолнечнoe
            Масло, яйцо, лук, перец, соль, тмин, чеснок.`,
      ],
      size: "left",
      price: "28.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-start",
      imgurl: plov,
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
        "Kazan Kebab (450gr)",
        "Kazan Kebab (450gr)",
        "Казан Кебаб (450 гр)",
      ],
      ingredients: [
        `Ingridients: Beef/Lamb, Potato, Coriander, Egg, Onion, Black Pepper, Cumin, Cucumber, Tomato, Dill, Cilantro.`,
        `Składniki: Wołowina/Jagnięcina, Ziemniak, Kolendra, Kminek, jajko, cebula, czarny pieprz pieprz, Koperek, Sułtanki.`,
        `Ингредиенты: говядина/баранина, картофель, кориандр, яйцо, лук, черный перец, соль, тмин, огурец, помидор, укроп, кинза.`,
      ],
      size: "right",
      price: "42.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: kazankebab,
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
      note: ["Manti (5 pieces)", "Manti (5 sztuk)", "Манты (5 штук)"],
      ingredients: [
        `Ingridients: Beef Chopped Meat, Dough, Coriander, Chopped Onion, Black Pepper, Greenery, Sour Cream, Dill, Cilantro.`,
        `Mięso siekane wołowe, ciasto, kolendra, siekana cebula, czarny pieprz, zieleń, śmietana, koper, kolendra.`,
        `Ингредиенты: Рубленое мясо говядины, тесто, кориандр, лук нарезанный, перец черный, зелень, сметана, укроп, кинза..`,
      ],
      size: "left",
      price: "29.95zl (1x5.99zl)",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: manti,
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
        "Lagman Fried (500gr)",
        "Lagman Smażony (500gr)",
        "Лагман Жареный (500 гр)",
      ],
      ingredients: [
        `Ingridients: Beef Meat, Chinese Cabbage, Daikon, Celery, Beans,
        Tomate Souce, Ginger, Bell Pepper, Star Anise, Egg,
        Soy Sauce, Pasta, Onion, Pepper, Garlic, Spicy Sauce, Dill, Cilantro.`,
        `Składniki: Wołowina, kapusta pekińska, daikon, seler, fasola, pasta pomidorowa, 
         papryka, imbir, anyż, czosnek, sos sojowy, makaron, cebula, kolendra, 
         koperek, ostry sos, jajko.`,
        `Ингредиенты: Говядина, пекинская капуста, дайкон, сельдерей, фасоль, томатная паста, 
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
    id: 5,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Grilled Chicken (450gr)",
        "Grillowany Kurczak (450gr)",
        "Цыплёнок табака  (450 гр)",
      ],
      ingredients: [
        `Ingridients: Chicken Meat, Garlic, Coriander, Chopped Onion, Black Pepper, Greenery, Cumin, Tomato Sauce, French Fries, Paprika.`,
        `Składniki: Mięso z Kurczaka, Czosnek, Kolendra, Siekana Cebula, Pieprz Czarny, Zieleń, Kminek, Sos Pomidorowy, Frytki, Papryka`,
        `Ингредиенты: Цыплёнок, чеснок, Паприка, перец чёрный, кориандр, зира, соус томатный, картофель фри, зелень.`,
      ],
      size: "left",
      price: "32.99zl",
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
      note: [
        "Beef Stroganoff (500gr)",
        "Befstroganow (500gr)",
        "Бефстроганов (500гр)",
      ],
      ingredients: [
        `Ingridients: Beef Meat, Tomato Gravy, French Fries, Ketchup/Tomato Sauce, Black Pepper, Greenery.`,
        `Składniki: Mięso wołowe, Sos pomidorowy, Frytki, Ketchup/sos pomidorowy, Czarny pieprz, Zieleń`,
        `Ингредиенты: Говядина, томатная подлива, томатная coyc, зелень, картошка фри, перец чёрный.`,
      ],
      size: "right",
      price: "32.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: beefstroganoff,
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
      note: ["Beef Steak (500gr)", "Stek Wołowy (500gr)", "Бифштекс (500гр)"],
      ingredients: [
        `Ingridients: Beef cutlet, rice, buckwheat, tomato Gravy, ketchup, puree, chicken egg, greens, coriander, black pepper.`,
        `Składniki: Kotlet wołowy, ryż, puree, gryka, Sos pomidorowy, ketchup, jajo kurze, warzywa, kolendra, czarny pieprz.`,
        `Ингредиенты: Котлета говяжья, рис, гречка, пюре подлива томатная, яйцо куриное, зелень, кориандр, перец чёрный.`,
      ],
      size: "left",
      price: "32.99",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: beefsteak,
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
      note: ["Gulash (500gr)", "Gulasz (500gr)", "Гуляш (500гр)"],
      ingredients: [
        `Ingridients: Beef, rice, buckwheat, mashed potatoes, tomato sauce, greens, pepper, black, bay leaf.`,
        `Składniki: Wołowina, ryż, kasza gryczana, puree ziemniaczane, sos pomidorowy, warzywa, czarny pieprz, liść laurowy.`,
        `Ингредиенты: Говядина, рис, гречка, пюре, подлива томатная, зелень, перец, чёрный, лавровый лист.
`,
      ],
      size: "right",
      price: "32.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: gulash,
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
        "Meatballs With Rice (500gr)",
        "Klopsiki Z Ryżem (500gr)",
        "Тифтель С Рисом (500гр)",
      ],
      ingredients: [
        `Ingridients: Beef Meatballs (3 pieces), Boiled rice, tomato Gravy, ketchup/tomato sauce, greens, coriander, Black pepper.`,
        `Składniki: Pulpety Wołowy (3 sztuki), Ryż gotowany, sos pomidorowy, ketchup/sos pomidorowy, warzywa, kolendra, pieprz czarny.`,
        `Ингредиенты: Тифтельки (3 шт.), отварной рис, томатный соус, кетчуп/томатный соус, овощи, кориандр, черный перец.`,
      ],
      size: "left",
      price: "26.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: meatballs,
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
        "Grape Leef Rolls (500gr)",
        "Roladki z liści winogron (500gr)",
        "Рулетики из виноградных листьев (500гр)",
      ],
      ingredients: [
        `Ingridients: Chopped Beef, Grape Leef, Rice, fried potatoes, tomato sauce/ketchup, greens, tomato, cucumber, pepper.`,
        `Składniki: Siekana wołowina, liście winogron, ryż, smażone ziemniaki, sos pomidorowy/ketchup, warzywa, pomidor, ogórek, papryka.`,
        `Ингредиенты: Рубленая Говядина, Виноградный Лист, Рис, жареный картофель, томатный соус/кетчуп, зелень, помидор, огурец, перец.`,
      ],
      size: "right",
      price: "32.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: grapeleefrolls,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
