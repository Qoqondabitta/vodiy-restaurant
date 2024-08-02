import React from "react";
import { Container, Left, Main, Note, Right, VeganFood } from "./style";
import { Button, Title } from "../about/style";
import fried from "../../assets/images/foods/lagmanFried.png";

const Vegan = () => {
  return (
      <Main className="center">
      <Container className="just-evenly">
        <Left className="col-align-start">
          <Note>We Offer You</Note>
          <Title style={{ color: "white", width: "fit-content" }} large="true">
            Delicious & Vegan Friendly Taste
          </Title>
          <Title minis="true">
            Meet Our Vegan-Friendly meal Lagman Fried without any meat, eggs and
            anti-vegan ingridients. We provide appropirate meals according your
            special diet.
          </Title>
          <Button>Order Now</Button>
        </Left>
        <Right className="center">
          <VeganFood src={fried} />
        </Right>
      </Container>
    </Main>
  );
};

export default Vegan;
