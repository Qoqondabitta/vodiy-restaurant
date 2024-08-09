import honeycake from "../../assets/images/objects/honeycake.jpg"
import napaleon from "../../assets/images/objects/napaleon.avif"
import turkishpaxlava from "../../assets/images/objects/turkishpaxlava.jpg"
import cheescake from "../../assets/images/objects/cheescake.jpg"

export const deserts = [
  {
    id: 1,
    place: "center",
    certificate: { top: "70%", left: "6%" },
    sign: { top: "75%", left: "26%" },
    vector: { deg: "75deg", bot: "42%", left: "35%" },
    leftPlacement: {
      classTitle: "col-start",
      note: [
        "Honey Cake (180gr)",
        "Ciasto Miodowe (180gr)",
        "Медовник (180 гр)",
      ],
      ingredients: [
        `Ingridients: Flour, baking soda, milk, granulated sugar, vanilla extract, salt, egg, ground cinnamon/ginger/cloves, strongly brewed coffee, vegetable or canola oil, honey.`,
        `Składniki: Mąka, soda oczyszczona, mleko, cukier granulowany, ekstrakt waniliowy, sól, jajko, mielony cynamon/imbir/goździki, mocno parzona kawa, olej roślinny lub rzepakowy, miód.`,
        `Ингредиенты: Мука, ​​сода, молоко, сахар-песок, ванильный экстракт, соль, яйцо, молотая корица/имбирь/гвоздика, крепко заваренный кофе, растительное или рапсовое масло, мед.`,
      ],
      size: "left",
      price: "19.99zl",
    },
    rightPlacement: {
      dir: { dir: "top" },
      classTitle: "align-end",
      imgurl: honeycake,
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
      note: ["Napoleon (200gr)", "Napoleon (200gr)", "Наполеон (200 гр)"],
      ingredients: [
        `Ingridients: Flour, milk, granulated sugar/confectioners' sugar, vanilla extract, salt, egg, cold water, unsalted butter(chilled and cut into pieces).`,
        `Składniki: Mąka, mleko, cukier granulowany/cukier cukierniczy, ekstrakt waniliowy, sól, jajko, zimna woda, masło niesolone(schłodzić i pokroić na kawałki).`,
        `Ингредиенты: Мука, ​​молоко, сахар-песок/сахар, ванильный экстракт, соль, яйцо, холодная вода, несоленое сливочное масло(охлажденный и нарезанный кусочками).`,
      ],
      size: "right",
      price: "19.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: napaleon,
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
        "Turkish Paxlava (160gr)",
        "Turecka Paxlava (160gr)",
        "Турецкая Паxлава (160гp)",
      ],
      ingredients: [
        `Ingredients: Flour, chopped walnuts or pistachios, milk, granulated sugar, lemon juice, salt, warm water, ground cinnamon, vegetable oil, honey.`,
        `Składniki: Mąka, posiekane orzechy włoskie lub pistacje, mleko, cukier granulowany, sok z cytryny, sól, ciepła woda, mielony cynamon, olej roślinny, miód.`,
        `Ингредиенты: Мука, ​​измельченные грецкие орехи или фисташки, молоко, сахарный песок, лимонный сок, соль, теплая вода, молотая корица, растительное масло, мед.`,
      ],
      size: "left",
      price: "19.99zl",
    },
    rightPlacement: {
      dir: { dir: "bottom" },
      classTitle: "align-end",
      imgurl: turkishpaxlava,
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
      note: ["Chees Cake (200gr)", "Sernik (200gr)", "Чизкейк (200 гр)"],
      ingredients: [
        `Ingridients: Graham cracker crumbs, unsalted and melted butter, full-fat and softened cream cheese, granulated sugar, sour cream, vanilla extract, flour, eggs.`,
        `Składniki: Okruchy krakersów graham, masło niesolone i roztopione, serek śmietankowy pełnotłusty i miękki, cukier granulowany, śmietana, ekstrakt waniliowy, mąka, jajka`,
        `Ингредиенты: Крошка крекера Грэм, сливочное масло несоленое и топленое, сыр жирный и размягченный сливочный, сахар-песок, сметана, ванильный экстракт, мука, яйца.`,
      ],
      size: "right",
      price: "19.99zl",
    },
    rightPlacement: {
      classTitle: "align-end",
      dir: { dir: "bottom" },
      imgurl: cheescake,
      box: [
        { top: "-10px", right: "-20px" },
        { left: "-20px", bot: "-20px" },
      ],
    },
  },
];