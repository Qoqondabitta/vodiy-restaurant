import React from "react";
import { Container, Icon, NavTab, Rows } from "./style";
import { IoCloseSharp } from "react-icons/io5";
import { navbarItems } from "../../../constants/componentconstants/navbar";

const Burger = () => {
  return (
    <Container className="column-center">
      <Rows className="just-end">
        <Icon className="center">
          <IoCloseSharp size="1.5rem" color="white" />
        </Icon>
      </Rows>
      <Rows className="column-center">
        {navbarItems.map((v, i) => (
          <NavTab key={i} href={v.path}>
            {l == "eng" ? v.title[0] : l == "pol" ? v.title[1] : v.title[2]}
          </NavTab>
        ))}
      </Rows>
    </Container>
  );
};

export default Burger;
