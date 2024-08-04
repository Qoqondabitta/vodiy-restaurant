import React from "react";
import {
  Button,
  Container,
  FoodIamge,
  GoldBoxes,
  Left,
  Main,
  Right,
  Title,
} from "./style";
import plov from "../../assets/images/foods/plov.jpg";
import { Scissors } from "../history/style";
import Halal from "../../assets/images/objects/Halal.webp";
import { about, e } from "../../constants/componentconstants/about";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeTitle } from "../../redux/title";

const About = () => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  return (
    <Main className="center">
      <Container className="just-evenly">
        <Scissors src={Halal} bot="15%" left="40%" />
        <Left className="col-align-start">
          {about.map((v, i) => (
            <Title key={i} minis={v?.m} large={v?.l}>
              {l == "eng" ? v.f[0] : l == "pol" ? v.f[1] : v.f[2]}
            </Title>
          ))}
          <NavLink style={{ textDecoration: "none" }} to="/menu">
            <Button onClick={() => dispatch(changeTitle("main"))}>
              {l == "eng" ? e[0] : l == "pol" ? e[1] : e[2]}
            </Button>
          </NavLink>
        </Left>
        <Right className="center">
          <FoodIamge src={plov} />
          <GoldBoxes top="true"></GoldBoxes>
          <GoldBoxes left="true"></GoldBoxes>
        </Right>
      </Container>
    </Main>
  );
};

export default About;
