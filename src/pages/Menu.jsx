import React from "react";
import MenuNavbar from "../components/menu/menubar/Menubar";
import MainDishes from "../components/menu/main/MainDishes";
import Dishbar from "../components/menu/dishbar/Dishbar";
import { useSelector } from "react-redux";

const Menu = () => {
  const title = useSelector(store=>store.title.value)
  return (
    <>
      <MenuNavbar />
      {title != "drinks" && <Dishbar />}
      <MainDishes />
    </>
  );
};

export default Menu;
