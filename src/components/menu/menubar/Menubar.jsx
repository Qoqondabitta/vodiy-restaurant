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
import { menuNavbar } from "../../../constants/componentconstants/menuNavbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../../display.css";
import vodiy from "../../../assets/images/logo/vodiy.jpg";
import { changeTitle, title } from "../../../redux/title";
import "./menuBar.css";
import { btn } from "../../../constants/componentconstants/reservation";

const MenuNavbar = () => {
  const dispatch = useDispatch();
  const language = useSelector((store) => store.language.value);
  const text = useSelector((store) => store.title.value);
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
  };
  console.log(text, "tex");
  return (
    <Main className="center">
      <Container className="just-evenly">
        <Vodiy src={vodiy} />
        <List className="center">
          {menuNavbar.map((v, i) => (
            <NavLink style={{ textDecoration: "none" }} key={i} to={v?.path}>
              <Links onClick={() => changeTag(v?.tag)}>
                <Item id={`${text == v?.tag && "Product"}`}>
                  {language === "eng"
                    ? v.title[0]
                    : language === "pol"
                    ? v.title[1]
                    : v.title[2]}
                </Item>
              </Links>
            </NavLink>
          ))}
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
      </Container>
    </Main>
  );
};

export default MenuNavbar;
