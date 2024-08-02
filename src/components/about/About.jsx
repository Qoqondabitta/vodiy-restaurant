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
import Halal from "../../assets/images/objects/Halal.webp"

const About = () => {
  return (
    <Main className="center">
      <Container className="just-evenly">
      <Scissors src={Halal} bot="15%" left="40%" />
        <Left className="col-align-start">
          <Title>Chase The New Flavour</Title>
          <Title large="true">The Key To Fine Dining</Title>
          <Title minis="true">
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </Title>
          <Button>Explore Menu</Button>
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
