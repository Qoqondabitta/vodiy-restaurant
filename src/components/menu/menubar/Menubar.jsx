import React, { useState } from "react";
import {
  Box,
  Container,
  Item,
  Links,
  List,
  Main,
  Stick,
  Vodiy,
  Button,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  m,
  menuNavbar,
} from "../../../constants/componentconstants/menuNavbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../../display.css";
import vodiy from "../../../assets/images/logo/vodiy.jpg";
import { changeTitle, title } from "../../../redux/title";
import "./menuBar.css";
import { btn } from "../../../constants/componentconstants/reservation";
import { navbarItems } from "../../../constants/componentconstants/navbar";
import Logo from "../../mini/logo/Logo";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const MenuNavbar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language.value);
  const text = useSelector((store) => store.title.value);
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
  };
  const l = navbarItems[4].title;
  return (
    <Main id="main" className="center">
      <Container className="just-evenly">
        <Logo />
        <List className="center">
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Item sizefont="true">
              {language == "eng" ? m[0] : language == "pol" ? m[1] : m[2]}
            </Item>
          </NavLink>
          {menuNavbar.map((v, i) => (
            <Links key={i} onClick={() => changeTag(v?.tag)}>
              <Item sizefont="true" id={`${text == v?.tag && "Product"}`}>
                {language === "eng"
                  ? v.title[0]
                  : language === "pol"
                  ? v.title[1]
                  : v.title[2]}
              </Item>
            </Links>
          ))}
          <Links href="#footer">
            <Item sizefont="true">
              {language == "eng" ? l[0] : language == "pol" ? l[1] : l[2]}
            </Item>
          </Links>
        </List>
        <List className="center">
          <Box className="center">
            <FaPhone />
            <Links href="tel:+48502400608">+48 502-400-608</Links>
          </Box>
          <Stick></Stick>
          <Links href="http://t.me/Restauracja_Vodiy">
            <Button>
              {language == "eng" ? btn[0] : language == "pol" ? btn[1] : btn[2]}
            </Button>
          </Links>
        </List>
        <NavLink
          id="hotmeal"
          className="hotmeal"
          style={{ textDecoration: "none" }}
          to="/menu"
        >
          <GiHotMeal size="3.5rem" color="#dcca87" />
        </NavLink>
        <Button id="roundbtn" top="85%" left="83%" round="true">
          <Links className="hotmeal" href="tel:+48502400608">
            <FaPhone id="roundbtn" color="black" />
          </Links>
        </Button>
        <Button
          id="roundbtn"
          className="center"
          top="85%"
          left="7%"
          round="true"
        >
          <Links
            className="hotmeal"
            href="https://maps.app.goo.gl/Aleja Krakowska 139, 02-180 Warszawa"
          >
            <FaMapMarkerAlt id="roundbtn" color="black" size="1.2rem" />
          </Links>
        </Button>
      </Container>
    </Main>
  );
};

export default MenuNavbar;
