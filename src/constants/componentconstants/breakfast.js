import sausages from "../../assets/images/foods/sausages.avif";
import omlet from "../../assets/images/foods/omlet.jpg";
import friedeggs from "../../assets/images/foods/fried eggs.jpg";
import englishbreakfast from "../../assets/images/foods/englishbreakfast.jpg";

export const breakfast = [
  {
    id: 1,
    place: "center",
    certificate: { top: "10%", left: "4%" },
    sign: { top: "15%", left: "24%" },
    vector: { deg: "15deg", bot: "30%", left: "40%" },
    leftPlacement: {
      classTitle: "col-start-end",
      note: ["Sausages with Eggs", "Kiełbaski Z Jajkami", "Сосиски с яйцами"],
      ingredients: [
        `Satisfy your hunger with our mouth-watering and hearty Breakfast. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszym przepysznym i pożywnym śniadaniem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод нашим аппетитным и сытным завтраком.. Наслаждайтесь жизнью постепенно, и постепенно.`,
      ],
      size: "left",
      price: "19.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-start",
      imgurl: sausages,
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
    vector: { deg: "195deg", bot: "35%", left: "45%" },
    leftPlacement: {
      classTitle: "col-end-start",
      note: ["Omelette", "Omlet", "Омлет"],
      ingredients: [
        `Satisfy your hunger with our mouth-watering and hearty Breakfast. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszym przepysznym i pożywnym śniadaniem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод нашим аппетитным и сытным завтраком.. Наслаждайтесь жизнью постепенно, и постепенно.`,
      ],
      size: "right",
      price: "15.99zl ",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: omlet,
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
        "Fried Egg (3 pieces)",
        "SMACZONE JAJKO (3 kawałki)",
        "ЯЙЦО С ГЛАЗУНИ (3 куска)",
      ],
      ingredients: [
        `Satisfy your hunger with our mouth-watering and hearty Breakfast. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszym przepysznym i pożywnym śniadaniem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод нашим аппетитным и сытным завтраком.. Наслаждайтесь жизнью постепенно, и постепенно.`,
      ],
      size: "left",
      price: "14.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: friedeggs,
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
        "English Breakfast",
        "Angielskie śniadanie",
        "Английский Завтрак",
      ],
      ingredients: [
        `Satisfy your hunger with our mouth-watering and hearty Breakfast. Enjoy life crumble by crumble, not bite by bite.`,
        `Zaspokój swój głód naszym przepysznym i pożywnym śniadaniem. Ciesz się życiem kruszonka po kruszonce, a nie gryzienie po kęsie`,
        `Утолите голод нашим аппетитным и сытным завтраком.. Наслаждайтесь жизнью постепенно, и постепенно.`,
      ],
      size: "right",
      price: "21.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: englishbreakfast,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];
