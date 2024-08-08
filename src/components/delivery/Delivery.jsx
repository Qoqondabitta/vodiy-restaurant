import React from "react";
import {
  Container,
  Deliver,
  Left,
  Links,
  Main,
  Navigates,
  Right,
  Title
} from "./style";
import { Button } from "../about/style";
import courier from "../../assets/images/backgrounds/courier.webp";
import { GoldBoxes } from "../about/style";
import { e, f, n, o, w } from "../../constants/componentconstants/delivery";
import { useSelector } from "react-redux";
import "./delivery.css"

const Delivery = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="delivery" className="center">
      <Container className="center">
        <Left className="col-align-start">
          <Title style={{ width: "fit-content" }} large="true">
            {l == "eng" ? e[0] : l == "pol" ? e[1] : e[2]}
            <Links href="https://food.bolt.eu/pl-PL/landing">
              {l == "eng" ? f[0] : l == "pol" ? f[1] : f[2]}
            </Links>
            {l == "eng" ? w[0] : l == "pol" ? w[1] : w[2]}
          </Title>
          <Title minis="true">
            {l == "eng" ? n[0] : l == "pol" ? n[1] : n[2]}
          </Title>
          <Navigates href="https://food.bolt.eu/pl-PL/landing">
            <Button>{l == "eng" ? o[0] : l == "pol" ? o[1] : o[2]}</Button>
          </Navigates>
        </Left>

        <Right className="col-align-start">
          <Deliver src={courier} />
          <GoldBoxes id="goldenbox1" top="true"></GoldBoxes>
          <GoldBoxes id="goldenbox2" left="true"></GoldBoxes>
        </Right>
      </Container>
    </Main>
  );
};

export default Delivery;
