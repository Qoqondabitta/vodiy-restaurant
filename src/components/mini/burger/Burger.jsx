import React from "react";
import { Container, NavTab, Rows } from "./style";
import {
  burgerbar,
  pageLinker,
} from "../../../constants/componentconstants/navbar";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Burger = React.memo(() => {
  const l = useSelector((store) => store.language.value);
  const i = pageLinker[0].title;
  return (
    <Rows className="center">
      <NavLink style={{ textDecoration: "none", color: "#dcca87", fontWeight: "bold", zIndex:"20" }} to="/menu">
        {l == "eng" ? i[0] : l == "pol" ? i[1] : i[2]}
      </NavLink>
      {burgerbar.map((v, i) => (
        <NavTab key={i} href={v.path}>
          {l == "eng" ? v.title[0] : l == "pol" ? v.title[1] : v.title[2]}
        </NavTab>
      ))}
    </Rows>
  );
});

export default Burger;