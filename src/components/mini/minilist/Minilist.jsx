import React from "react";
import {
  MiniList as Container,
  MiniItem,
  DishP,
} from "../../menu/menubar/style";
import {
  menuNavbar,
  m,
} from "../../../constants/componentconstants/menuNavbar";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { navbarItems } from "../../../constants/componentconstants/navbar";
import { changeTitle } from "../../../redux/title";
import "./minilist.css";
import MiniLanguage from "../language/MiniLanguage";

const Minilist = () => {
  const dispatch = useDispatch();
  const text = useSelector((store) => store.title.value);
  const l = useSelector((store) => store.language.value);
  const lang = navbarItems[4].title;
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
    console.log(tag);
  };

  return (
    <Container className="center">
      <NavLink style={{ textDecoration: "none", zIndex: "100" }} to="/home">
        <DishP>{l == "eng" ? m[0] : l == "pol" ? m[1] : m[2]}</DishP>
      </NavLink>
      {menuNavbar.map((v, i) => (
        <MiniItem
          id={text == v.tag && "miniitemactive"}
          key={i}
          href={v.path}
          onClick={() => changeTag(v.tag)}
        >
          {l == "eng" ? v.title[0] : l == "pol" ? v.title[1] : v.title[2]}
        </MiniItem>
      ))}
      {/* <MiniItem href="#footer">
        {l == "eng" ? lang[0] : l == "pol" ? lang[1] : lang[2]}
      </MiniItem> */}
    </Container>
  );
};

export default Minilist;
