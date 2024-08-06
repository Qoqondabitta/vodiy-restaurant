import React from "react";
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
  navbarItems,
  pageLinker,
} from "../../constants/componentconstants/navbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../display.css";
import vodiy from "../../assets/images/logo/vodiy.jpg";
import { changeTitle } from "../../redux/title";

const Navbar = () => {
  const dispatch = useDispatch();
  const p = pageLinker[0].path;
  const t = pageLinker[0].title;
  const language = useSelector((store) => store.language.value);
  return (
    <Main className="center">
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
            <Links href="tel:+48502400608">+48 502-400-608</Links>
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
      </Container>
    </Main>
  );
};

export default Navbar;
