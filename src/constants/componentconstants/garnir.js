import rice from "../../assets/images/foods/rice.avif";
import buckwheat from "../../assets/images/foods/buckwheat.jpg";
import frenchfries from "../../assets/images/foods/frenchfries.jpg";
import grilledpotato from "../../assets/images/foods/grilledpotato.webp";
import mashedpotato from "../../assets/images/foods/mashedpotato.jpg";
import potatocherry from "../../assets/images/foods/potatocherry.jpeg";

export const additives = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: ["Rice (150gr)", "Ryż (150gr)", "Рис (150 гр)"],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: rice,
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
      note: ["Buckwheat (150gr)", "Gryka (150gr)", "Гречkа (150гр)"],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "right",
      price: "14.99zl ",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: buckwheat,
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
      note: ["French Fries (150gr)", "Frytki (150gr)", "Картофель фри (150гр)"],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: frenchfries,
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
        "Grilled Potatoes (150gr)",
        "Grillowany Ziemniak (150gr)",
        "Картофель по Деревeнский  (150гр)",
      ],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "right",
      price: "14.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: grilledpotato,
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
        "Mashed Potato (150gr)",
        "Puree (150gr)",
        "Картофель Пюре (150гр)",
      ],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: mashedpotato,
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
        "Potato Cherry (150gr)",
        "Ziemniak Cherry (150gr)",
        "Картофель Cherry (150гр)",
      ],
      ingredients: [
        `Satisfy your hunger with our Additives, and enjoy your meal. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszymi dodatkami i ciesz się posiłkiem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод с помощью наших добавок и наслаждайтесь едой. Наслаждайтесь жизнью постепенно, а не постепенно.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: potatocherry,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
