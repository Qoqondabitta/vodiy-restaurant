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
import { DataUrl } from "../../navbar/style";

const MenuNavbar = () => {
  const dispatch = useDispatch();
  const [copiedText, setCopiedText] = useState("");
  const language = useSelector((store) => store.language.value);
  const text = useSelector((store) => store.title.value);
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
  };
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  };

  const l = navbarItems[4].title;
  return (
    <Main id="main" className="center">
      <Container className="just-evenly">
        <Logo />
        <List className="center">
          {/* <NavLink style={{ textDecoration: "none" }} to="/">
            <Item sizefont="true">
              {language == "eng" ? m[0] : language == "pol" ? m[1] : m[2]}
            </Item>
          </NavLink> */}
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
            <FaPhone id="faphone" />
            <Links href="tel:+48502400608">+48 795-999-991</Links>
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
        <DataUrl
          top="85%"
          left="83%"
          className="hotmeal center"
          href="tel:+48795999991"
          onClick={() => {
            handleCopy("+48 795-999-991");
            alert("Phone Number Copied: +48 795-999-991");
          }}
        >
          <FaPhone id="roundbtn" color="black" />
        </DataUrl>
        <DataUrl
          top="85%"
          left="6%"
          className="hotmeal center"
          href="https://www.google.com/maps/dir/?api=1&destination=Aleja+Krakowska+139%2C+02-180+Warsaw%2C+Poland"
        >
          <FaMapMarkerAlt id="roundbtn" color="black" size="1.2rem" />
        </DataUrl>
      </Container>
    </Main>
  );
};

export default MenuNavbar;
