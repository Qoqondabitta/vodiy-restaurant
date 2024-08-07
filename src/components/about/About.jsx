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
import {
  chase,
  description,
  e,
  fine,
} from "../../constants/componentconstants/about";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeTitle } from "../../redux/title";
import spoon from "../../assets/images/objects/spoon.png";
import { Spoon, SpoonWrapper } from "../history/style";
import TextSlider from "../mini/textSlider/TextSlider";
import MealSlider from "../mini/mealSlider/MealSlider";
import "./about.css"

const About = () => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="main" className="center">
      <Container className="just-evenly">
        <Scissors id="halal" src={Halal} bot="5%" left="43%" />
        <Left className="col-align-start">
          <SpoonWrapper className="column-center">
            <Title>
              {l == "eng" ? chase[0] : l == "pol" ? chase[1] : chase[2]}
            </Title>
            <Spoon src={spoon} />
          </SpoonWrapper>
          <Title large="true">
            {l == "eng" ? fine[0] : l == "pol" ? fine[1] : fine[2]}
            <TextSlider />
          </Title>
          <Title minis="true">
            {l == "eng"
              ? description[0]
              : l == "pol"
              ? description[1]
              : description[2]}
          </Title>
          <NavLink style={{ textDecoration: "none" }} to="/menu">
            <Button onClick={() => dispatch(changeTitle("main"))}>
              {l == "eng" ? e[0] : l == "pol" ? e[1] : e[2]}
            </Button>
          </NavLink>
        </Left>
        <Right className="center">
          <MealSlider />
          {/* <FoodIamge src={plov} /> */}
          <GoldBoxes id="goldnbox1" top="true"></GoldBoxes>
          <GoldBoxes id="goldnbox2" left="true"></GoldBoxes>
        </Right>
      </Container>
    </Main>
  );
};

export default About;
