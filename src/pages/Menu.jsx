import React from "react";
import MenuNavbar from "../components/menu/menubar/Menubar";
import MainDishes from "../components/menu/main/MainDishes";
import Dishbar from "../components/menu/dishbar/Dishbar";
import { useSelector } from "react-redux";
import Footer from "../components/footer/Footer";

const Menu = () => {
  const title = useSelector(store=>store.title.value)
  return (
    <>
      <MenuNavbar />
      {title !== "drinks" && <Dishbar />}
      <MainDishes />
      <Footer />
    </>
  );
};

export default Menu;
