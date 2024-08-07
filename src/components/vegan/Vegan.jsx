import React from "react";
import { Container, Left, Linker, Main, Note, Right, VeganFood, Button, Title } from "./style";
import fried from "../../assets/images/foods/lagmanFried.png";
import { useSelector } from "react-redux";
import { d, v, y } from "../../constants/componentconstants/vegan";
import { o } from "../../constants/componentconstants/delivery";
import spoon from "../../assets/images/objects/spoon.png";
import { Spoon, SpoonWrapper } from "../history/style";

const Vegan = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="vegan" className="center">
      <Container className="just-evenly">
        <Left className="col-align-start">
          <SpoonWrapper>
            <Note>{l == "eng" ? y[0] : l == "pol" ? y[1] : y[2]}</Note>
            <Spoon src={spoon} />
          </SpoonWrapper>
          <Title style={{ color: "white", width: "fit-content" }} large="true">
            {l == "eng" ? d[0] : l == "pol" ? d[1] : d[2]}
          </Title>
          <Title minis="true">
            {l == "eng" ? v[0] : l == "pol" ? v[1] : v[2]}
          </Title>
          <Linker href="https://food.bolt.eu/pl-PL/landing">
            <Button>{l == "eng" ? o[0] : l == "pol" ? o[1] : o[2]}</Button>
          </Linker>
        </Left>
        <Right className="center">
          <VeganFood src={fried} />
        </Right>
      </Container>
    </Main>
  );
};

export default Vegan;
