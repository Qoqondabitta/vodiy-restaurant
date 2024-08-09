import React, { useState } from "react";
import {
  Box,
  Container,
  Item,
  Links,
  List,
  Main,
  Stick,
  Button,
  DataUrl,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  navbarItems,
  pageLinker,
} from "../../constants/componentconstants/navbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../display.css";
import { changeTitle } from "../../redux/title";
import Burger from "../mini/burger/Burger";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";
import "./media.css";
import Logo from "../mini/logo/Logo";

const Navbar = () => {
  const dispatch = useDispatch();
  const p = pageLinker[0].path;
  const t = pageLinker[0].title;
  const language = useSelector((store) => store.language.value);
  return (
    <Main className="column-center">
      <Container className="just-around">
        <Logo className="logoSize" />
        <List className="center">
          <NavLink style={{ textDecoration: "none" }} to={p}>
            <Item onClick={() => dispatch(changeTitle("main"))}>
              {language === "eng" ? t[0] : language === "pol" ? t[1] : t[2]}
            </Item>
          </NavLink>
          {navbarItems.map((v, i) => (
            <Links key={i} href={v.path}>
              <Item>
                {language === "eng"
                  ? v.title[0]
                  : language === "pol"
                  ? v.title[1]
                  : v.title[2]}
              </Item>
            </Links>
          ))}
        </List>
        <List className="center" id="number">
          <Box className="center">
            <Links href="tel:+48502400608">+48 795-999-991</Links>
          </Box>
          <Stick></Stick>
          <Links href="http://t.me/Restauracja_Vodiy">
            <Button>
              {language === "eng"
                ? "Book Table"
                : language === "pol"
                ? "Rezerwowy"
                : "Зарезервировать"}
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
        <DataUrl
          top="85%"
          left="83%"
          className="hotmeal center"
          href="tel:+48795-999-991"
        >
          <FaPhone id="roundbtn" color="black" />
        </DataUrl>
        <DataUrl
          top="86%"
          left="6%"
          className="hotmeal center"
          href="https://maps.app.goo.gl/Aleja Krakowska 139, 02-180 Warszawa"
        >
          <FaMapMarkerAlt id="roundbtn" color="black" size="1.2rem" />
        </DataUrl>
      </Container>
      <Burger />
    </Main>
  );
};

export default Navbar;
