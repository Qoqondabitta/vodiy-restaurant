import React from "react";
import MenuNavbar from "../components/menu/menubar/Menubar";
import MainDishes from "../components/menu/main/MainDishes";
import Dishbar from "../components/menu/dishbar/Dishbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";
import Minilist from "../components/mini/minilist/Minilist";
import SecondList from "../components/mini/minilist/SecondList";

const Menu = () => {
  const title = useSelector(store=>store.title.value)
  return (
    <>
      <MenuNavbar />
      <Minilist />
      {title !== "drinks" && <SecondList />}
      {title !== "drinks" && <Dishbar />}
      {/* <GoldenLine src={goldenline} /> */}
      <MainDishes />
      <Footer />
    </>
  );
};

export default Menu;
