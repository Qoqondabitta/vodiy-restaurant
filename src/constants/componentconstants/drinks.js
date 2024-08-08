import tea from "../../assets/images/foods/tea.jpg";
import compote from "../../assets/images/foods/compote.jpg";
import ayran from "../../assets/images/foods/ayran.avif";
import water from "../../assets/images/foods/water.avif";
import juice from "../../assets/images/foods/ju.jpeg";
import lemonade from "../../assets/images/foods/lem.jpeg";


export const drinks = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "30%", left: "40%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Black/Green Tea",
        "Herbata Carna/Zielona",
        "Черный/Зеленый Чай (200 гр)",
      ],
      ingredients: [
        `Quench your thirst with our cooling and healthy tea, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszą ukochaną i zdrową herbatą, ciesz się posiłkiem. Ciesz się życiem łyk za łykiem`,
        `Утолите жажду нашим любимым и полезным чаем и наслаждайтесь. Наслаждайтесь жизнью глоток за глотком.`,
      ],
      size: "left",
      price: "5.99zl (Lemon Tea 14.99zl)",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: tea,
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
    vector: { deg: "195deg", bot: "35%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: ["Compote", "Kompot", "Компот"],
      ingredients: [
        `Quench your thirst with our cooling and relaxing compote, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszym chłodzącym i relaksującym kompotem i ciesz się posiłkiem. Ciesz się życiem łyk po łyku.`,
        `Утолите жажду нашим охлаждающим и расслабляющим компотом и наслаждайтесь трапезой. Наслаждайся жизнью глоток за глотком.`,
      ],
      size: "right",
      price: "4.99zl(300ml) / 14.99zl(1L) ",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: compote,
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
        "Ayran (300ml)",
        "Krojenie Warzyw (300ml)",
        "Hарезка Oвощей (300ml)",
      ],
      ingredients: [
        `Quench your thirst with our cooling and sour ayran, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszym chłodzącym i kwaśnym ayranem i ciesz się posiłkiem. Ciesz się życiem łyk po łyku.`,
        `Утолите жажду нашим охлаждающим и кисловатым айраном и наслаждайтесь трапезой. Наслаждайся жизнью глоток за глотком.`,
      ],
      size: "left",
      price: "4.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: ayran,
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
        "Sparling/Still Water (0.5L)",
        "Woda Gazowana/Niegazowana (0.5L)",
        "Газированная/HeГазированная Bода (0.5L)",
      ],
      ingredients: [
        `Quench your thirst with our cooling still or sparling water, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszą chłodzącą wodą niegazowaną lub gazowaną i ciesz się posiłkiem. Ciesz się życiem łyk po łyku.`,
        `Утолите жажду нашей прохладной негазированной или газированной водой и наслаждайтесь едой. Наслаждайся жизнью глоток за глотком.`,
      ],
      size: "right",
      price: "5.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: water,
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
      note: ["Lemonade (500ml)", "Lemoniada (500ml)", "Лимонад (500ml)"],
      ingredients: [
        `Quench your thirst with our cooling and relaxing Lemonade, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszą chłodzącą i relaksującą lemoniadą i ciesz się posiłkiem. Ciesz się życiem łyk po łyku.`,
        `Утолите жажду нашим охлаждающим и расслабляющим лимонадом и наслаждайтесь едой. Наслаждайся жизнью глоток за глотком.`,
      ],
      size: "left",
      price: "11.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: lemonade,
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
    vector: { deg: "195deg", bot: "35%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: ["Juice", "Sok", "Сок"],
      ingredients: [
        `Quench your thirst with our cooling and delicious juice, and enjoy your meal. Enjoy life sip by sip, not gulp by gulp.`,
        `Ugaś pragnienie naszym chłodzącym, pysznym sokiem i ciesz się posiłkiem. Ciesz się życiem łyk po łyku.`,
        `Утолите жажду нашим охлаждающим и вкусным соком и наслаждайтесь едой. Наслаждайся жизнью глоток за глотком.`,
      ],
      size: "right",
      price: "5.99zl(300ml) / 11.99zl(1L) ",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: juice,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
