import mastavacombo from "../../assets/images/objects/combomastava.webp"
import plov from "../../assets/images/foods/plov.jpg";
import lambgrillkebab from "../../assets/images/foods/lamb.jpg";

export const combo = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: ["Combo Plow", "Zestav Pilaf", "Комплектный плов"],
      ingredients: [
        `Plov, bread, green/black tea or compote just for 34.99zl. We care about you, so you do not care about money. Just for your health and appetitte. Enjoy!`,
        `Plov, pieczywo, herbata zielona/czarna lub kompot już za 34,99 zł. Dbamy o Ciebie, więc Tobie nie zależy na pieniądzach. Tylko w trosce o Twoje zdrowie i apetyt. Cieszyć się!`,
        `Плов, хлеб, зеленый/черный чай или компот всего за 34,99 злотых. Мы заботимся о вас, поэтому вас не волнуют деньги. Просто для вашего здоровья и аппетита. Наслаждаться!`,
      ],
      size: "left",
      price: "34.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: plov,
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
      note: ["Combo Shashlik", "Zestav Szaszłyk", "Комплект шашлыка"],
      ingredients: [
        `Lula Kebab, 3 pieces of Manti and green/black tea or compote just for 39.99zl. We care about you, so you do not care about money. Just for your health and appetitte. Enjoy!`,
        `Lula Kebab, 3 sztuki Manti i herbata zielona/czarna lub kompot już za 39,99 zł. Dbamy o Ciebie, więc Tobie nie zależy na pieniądzach. Tylko w trosce o Twoje zdrowie i apetyt. Cieszyć się!`,
        `Люля-кебаб, 3 кусочка мантов и чай/компот всего за 39,99 злотых. Мы заботимся о вас, поэтому вас не волнуют деньги. Просто для вашего здоровья и аппетита. Наслаждаться!`,
      ],
      size: "right",
      price: "39.99zl",
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
      note: ["Combo Mashkhurda", "Zestav Mashkhurda", "Комплект Машхурда"],
      ingredients: [
        `Mashkhurda, samsa, bread and green/black tea or compote just for 34.99zl. We care about you, so you do not care about money. Just for your health and appetitte. Enjoy!`,
        `Mashkhurda, samsa, chleb i zielona/czarna herbata lub kompot tylko za 34,99 zł. Dbamy o Ciebie, więc Tobie nie zależy na pieniądzach. Tylko w trosce o Twoje zdrowie i apetyt. Cieszyć się!`,
        `Машхурда, самса, хлеб и зеленый/черный чай или компот всего за 34,99 злотых. Мы заботимся о вас, поэтому вас не волнуют деньги. Просто для вашего здоровья и аппетита. Наслаждаться!`,
      ],
      size: "left",
      price: "34.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: mastavacombo,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];