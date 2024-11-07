import soup from "../../assets/images/foods/soup.jpg";
import mastava from "../../assets/images/foods/mastava2.jpg";
import Chuchvara from "../../assets/images/foods/chuchvara.jpg";
import uygur from "../../assets/images/foods/lagmansoup.jpg";
import mashkhurda from "../../assets/images/foods/moshxorda.jpg";
import meatballsoup from "../../assets/images/foods/meatballsoup4.jpg";
import meatballsoup2 from "../../assets/images/foods/meatballsoup3.jpg";
import mantisoup from "../../assets/images/foods/mantisoup.jpg";

export const soups = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
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
      classTitle: "align-end",
      imgurl: soup,
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
      note: ["Chuchvara (450gr)", "Chuchvara (450gr)", "Пельмени (450 гр)"],
      ingredients: [
        `Ingridients: Dumplins, Potato, Carrot, Onion,
         Bell Pepper, Pepper, Cumin, Tomato Sauce, Dill, Cilantro,
          Greenery, sour cream, bay leaf, star anise.`,
        `Składniki: Kluski, Ziemniak, Marchew, Cebula,
         Papryka, Kminek, Sos Pomidorowy, Koper, Kolendra,
        Zieleń, śmietana, liść laurowy, anyż.`,
        `Ингредиенты: Пельмени, картофель, морковь, лук,
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
        `Ingridients: Beef, Cabbage, Daikon, Celery, Beans,
        Tomate Souce, Ginger, Bell Pepper, Star Anise,
        Soy/Spicy Sauce, Pasta, Onion, Pepper, Dill, Cilantro.`,
        `Składniki: Wołowina, kapusta, daikon, seler, fasola, pasta pomidorowa, 
         papryka, imbir, anyż, sos sojowy, makaron, cebula, kolendra, 
         koperek, ostry sos.`,
        `Ингредиенты: Говядина, капуста, дайкон, сельдерей, фасоль, томатная паста, 
        болгарский, перец, имбирь, бадьян, острый/соевый соус, лапша, лук, кинза, 
        укроп.`,
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
        "Grape Leef Soup (450gr)",
        "Zupa Z Roladki Winogron (450gr)",
        "Суп С Рулетики из виноградных листьев",
      ],
      ingredients: [
        `Ingridients: Beef, Grape Leefs, Tomato Sauce,
         Chopped Potato, Sour Cream, Black/Green/Bell Pepper, Dill, Greenery.`,
        `Składniki: Wolowina, Roladki Winogron, Sos Pomidorowy,
         Siekane ziemniaki, kwaśna śmietana, czarna/zielona papryka, koper, zieleń.`,
        `Ингредиенты: Говядина, Рулетики из виноградных листьев, томатный соус,
         Нарезанный картофель, черный/зеленый перец, болгарский, укроп, зелень.`,
      ],
      size: "right",
      price: "32.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: meatballsoup2,
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
        "Суп с фрикадельками (450гр)",
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
  {
    id: 8,
    place: "row-reverse",
    certificate: { top: "70%", left: "86%" },
    sign: { top: "75%", left: "56%" },
    vector: { deg: "195deg", bot: "42%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: [
        "Soup with Manti(3pieces)",
        "Zupa Z Manti(3sztuk)",
        "Суп С Манты (3 штук)",
      ],
      ingredients: [
        `Ingridients: Chopped Beef, Manti 3 pieces, Sour Cream,
         Chopped Potato, Black/Green/Bell Pepper, Dill, Greenery.`,
        `Składniki: Wolowina, Manti 3 sztuk,
         Siekane ziemniaki, kwaśna śmietana, czarna/zielona papryka, koper, zieleń.`,
        `Ингредиенты: Говядина, Манты (3 штук), томатный соус,
         Нарезанный картофель, черный/зеленый перец, болгарский, укроп, зелень.`,
      ],
      size: "right",
      price: "29.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: mantisoup,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
