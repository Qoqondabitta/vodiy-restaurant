import salmon from "../../assets/images/foods/salmon.jpg"
import dorado from "../../assets/images/foods/dorado.jpg"

export const fish = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Grilled Dorado (160gr)",
        "Grillowane Dorado (160gr)",
        "Дорадо Ha Mангале (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Dorado. Feels like Home, Tastes like Paradise, better with some tomato sauce.`,
        `Delektuj się przepysznym kebabem z Grillowanego Dorado. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным кебабом из Дорадо Ha Mангале. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом.`,
      ],
      size: "left",
      price: "44.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: dorado,
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
      note: [
        "Grilled Salmon (160gr)",
        "Grillowany łosoś (160gr)",
        "Лосось на Мангале (160 гр)",
      ],
      ingredients: [
        `Savour from mouth-watering and delicious Grilled Salmon. Feels like Home, Tastes like Paradise, better with some tomato sauce.`,
        `Delektuj się przepysznym kebabem z Grillowany łosoś. Czuje się jak w domu, smakuje jak raj, lepiej z sosem pomidorowym i cebulą.`,
        `Насладитесь аппетитным и вкусным Лосось на Мангале. Чувствуешь себя как дома, на вкус как рай, лучше с томатным соусом и луком.`,
      ],
      size: "right",
      price: "39.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: salmon,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];