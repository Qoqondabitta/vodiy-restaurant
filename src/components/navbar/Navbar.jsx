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
  IconBurger,
} from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  navbarItems,
  pageLinker,
} from "../../constants/componentconstants/navbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../display.css";
import vodiy from "../../assets/images/logo/vodiy.jpg";
import { changeTitle } from "../../redux/title";
import Burger from "../mini/burger/Burger";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiHotMeal } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const p = pageLinker[0].path;
  const t = pageLinker[0].title;
  const language = useSelector((store) => store.language.value);
  return (
    <Main className="coplumn-center">
      <Container className="just-around">
        <Vodiy src={vodiy} />
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
        <List className="center">
          <Box className="center">
            <FaPhone />
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
        <NavLink style={{ textDecoration: "none" }} to="/menu">
          <GiHotMeal size="3rem" color="#dcca87" />
        </NavLink>
        <Button top="85%" left="83%" round="true">
          <Links href="tel:+48502400608">
            <FaPhone />
          </Links>
        </Button>
        <Button top="85%" left="7%" round="true">
          <Links href="https://maps.app.goo.gl/Aleja Krakowska 139, 02-180 Warszawa">
            <FaMapMarkerAlt size="1.2rem" />
          </Links>
        </Button>
      </Container>
      <Burger />
    </Main>
  );
};

export default Navbar;
