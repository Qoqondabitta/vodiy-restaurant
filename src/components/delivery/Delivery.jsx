import React from "react";
import { Container, Deliver, Left, Links, Main, Navigates } from "./style";
import { Button, Title } from "../about/style";
import courier from "../../assets/images/backgrounds/courier.webp";
import { Right, GoldBoxes, Title as Note } from "../about/style";

const Delivery = () => {
  return (
    <Main className="center">
      <Container className="just-evenly">
        <Left className="col-align-start">
          <Title style={{ color: "white", width: "fit-content" }} large="true">
            Enjoy Your{" "}
            <Links href="https://food.bolt.eu/pl-PL/landing">Food </Links>
            Without Leaving The House
          </Title>
          <Note minis="true">
            Even though we do not deliver on ourselfs, you can easily order and
            enjoy from our traditional Uzbek Halal Meals via Bolt Application
          </Note>
          <Navigates href="https://food.bolt.eu/pl-PL/landing">
            <Button>Order Now</Button>
          </Navigates>
        </Left>

        <Right className="col-align-start">
          <Deliver src={courier} />
          <GoldBoxes top="true"></GoldBoxes>
          <GoldBoxes left="true"></GoldBoxes>
        </Right>
      </Container>
    </Main>
  );
};

export default Delivery;
