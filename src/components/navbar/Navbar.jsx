import React from "react";
import { Box, Container, Item, Links, List, Main, Stick, Vodiy, Button } from "./style";
import { useSelector } from "react-redux";
import { navbarItems } from "../../constants/componentconstants/navbar";
import { NavLink } from "react-router-dom";
import { FaPhone } from "react-icons/fa6";
import "../../display.css";
import vodiy from "../../assets/images/logo/vodiy.jpg"

const Navbar = () => {
  const language = useSelector((store) => store.language);
  return (
    <Main className="center">
      <Container className="just-evenly">
        <Vodiy src={vodiy} />
        <List className="center">
          {navbarItems.map((v, i) => (
            <NavLink style={{ textDecoration: "none" }} key={i} to={v.path}>
              <Links>
                <Item>
                  {v.title[0]}
                  {/* {language === "eng"
                    ? v.title[0]
                    : language === "pol"
                    ? v.title[1]
                    : v.title[2]} */}
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
          <Button>Book Table</Button>
        </List>
      </Container>
    </Main>
  );
};

export default Navbar;
