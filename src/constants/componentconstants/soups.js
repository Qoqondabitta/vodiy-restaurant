import soup from "../../assets/images/foods/soup.avif";
import mastava from "../../assets/images/foods/mastava.jpg";
import Chuchvara from "../../assets/images/foods/chuchvara.jpg";
import uygur from "../../assets/images/foods/uygur.jpg";
import mashkhurda from "../../assets/images/foods/mashkhurda.jpg";
import chickensoup from "../../assets/images/foods/chickensoup.jpg";
import meatballsoup from "../../assets/images/foods/meatballsoup.jpg";

export const soups = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "30%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start-end",
      note: ["Soup (450gr)", "Zupa (450gr)", "Суп (450 гр"],
      ingredients: [
        `Ingridients: Beef Meat, Boiled Potato, Lamb Tail Fat, Red Carrot, Onion, Bell Pepper, Peas.`,
        `Składniki: Mięso wołowe, gotowany ziemniak, tłuszcz z ogona jagnięcego, czerwona marchewka, cebula, papryka, groszek.`,
        `Ингредиенты: Говядина, картофель отварной, курдюк ягненка, морковь красная, лук, болгарский, горошек.`,
      ],
      size: "left",
      price: "19.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-start",
      imgurl: soup,
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
      note: ["Mastava (450gr)", "Mastava (450gr)", "Мастава (450 гр)"],
      ingredients: [
        `Ingridients: Beef Meat, Boiled Potato, Carrot, Onion,
         Bell Pepper, Pepper, Cumin, Tomato Sauce, Dill, Cilantro,
          Greenery, sour cream, bay leaf, star anise.`,
        `Składniki: Mięso Wołowe, Ziemniak Gotowany, Marchew, Cebula,
         Papryka, Kminek, Sos Pomidorowy, Koper, Kolendra,
        Zieleń, śmietana, liść laurowy, anyż.`,
        `Ингредиенты: Говядина, отварной картофель, морковь, лук,
         Болгарский, перец, тмин, томатный соус, укроп, кинза,
         Зелень, сметана, лавровый лист, бадьян.`,
      ],
      size: "right",
      price: "19.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: mastava,
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
      note: ["Dumplin (450gr)", "Chuchvara (450gr)", "Пельмени (450 гр)"],
      ingredients: [
        `Ingridients: Beef Dumplins, Boiled Potato, Carrot, Onion,
         Bell Pepper, Pepper, Cumin, Tomato Sauce, Dill, Cilantro,
          Greenery, sour cream, bay leaf, star anise.`,
        `Składniki: Kluski Wołowe, Ziemniak Gotowany, Marchew, Cebula,
         Papryka, Kminek, Sos Pomidorowy, Koper, Kolendra,
        Zieleń, śmietana, liść laurowy, anyż.`,
        `Ингредиенты: Пельмени, Говядина, отварной картофель, морковь, лук,
         Болгарский, перец, тмин, томатный соус, укроп, кинза,
         Зелень, сметана, лавровый лист, бадьян.`,
      ],
      size: "left",
      price: "20.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: Chuchvara,
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
        "Uygur Lagman (450gr)",
        "Uygur Lagman (450gr)",
        "Уйгурский Лагман (450 гр)",
      ],
      ingredients: [
        `Ingridients: Beef Meat, Chinese Cabbage, Daikon, Celery, Beans,
        Tomate Souce, Ginger, Bell Pepper, Star Anise,
        Soy Sauce, Pasta, Onion, Pepper, Garlic, Spicy Sauce, Dill, Cilantro.`,
        `Składniki: Wołowina, kapusta pekińska, daikon, seler, fasola, pasta pomidorowa, 
         papryka, imbir, anyż, czosnek, sos sojowy, makaron, cebula, kolendra, 
         koperek, ostry sos.`,
        `Ингредиенты: Говядина, пекинская капуста, дайкон, сельдерей, фасоль, томатная паста, 
        болгарский, перец, имбирь, бадьян, чеснок, соевый соус, лапша, лук, кинза, 
        укроп, острый соус.`,
      ],
      size: "right",
      price: "25.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: uygur,
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
      note: ["Mashkhurda (450gr)", "Mashkhurda (450gr)", "Машхурда (450 гр)"],
      ingredients: [
        `Ingridients: Beef Meat, Beans, Onion, Chopped Potato, Green Pepper, Black Pepper, Greenery, 
        Sour Cream, Tomato Sauce, Dill.`,
        `Składniki: Mięso wołowe, fasola, cebula, siekane ziemniaki, papryka zielona, ​​papryka czarna, zieleń,
         Śmietana, Sos Pomidorowy, Koperek.`,
        `Ингредиенты: Говядина, фасоль, лук, нарезанный картофель, зеленый перец, черный перец, зелень,
        Сметана, томатный соус, укроп.`,
      ],
      size: "left",
      price: "19.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: mashkhurda,
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
        "Chicken Soup with Pasta (450gr)",
        "Zupa Z Kurczaka Z Makaronem (450gr)",
        "Суп Куриный С Лапшой (450гр)",
      ],
      ingredients: [
        `Ingridients: Chicken Meat, Paste, Tomato Sauce,
         Chopped Potato, Sour Cream, Black/Green/Bell Pepper, Dill, Greenery.`,
        `Składniki: Mięso Z Kurczaka, Pasta, Sos Pomidorowy,
         Siekane ziemniaki, kwaśna śmietana, czarna/zielona papryka, koper, zieleń.`,
        `Ингредиенты: Куриное мясо, паста, томатный соус,
         Нарезанный картофель, сметана, черный/зеленый перец, болгарский, укроп, зелень.`,
      ],
      size: "right",
      price: "23.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: chickensoup,
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
        "Meatball Soup (450gr)",
        "Stek Zupa z klopsikami (450gr)",
        "Бифштекс (450гр)",
      ],
      ingredients: [
        `Ingridients: Minced beef, potatoes, carrots, chopped onions, greens, bell pepper, cumin, tomato, tomato sauce.`,
        `Składniki: Mielone mięso wołowe, ziemniaki, marchew, cebula, warzywa, bułgarski pieprz, kminek, pomidor, sos pomidorowy.`,
        `Ингредиенты: Говядина Фарш, картофель, морковь, лук, зелень, болгарский, зира, помидор, томатный соус.`,
      ],
      size: "left",
      price: "25.99 zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: meatballsoup,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
