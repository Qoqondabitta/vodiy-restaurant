import React from "react";
import {
  Button,
  Container,
  Left,
  Main,
  Title,
} from "./style";
import { Links } from "../delivery/style";

const Zestav = () => {
  return (
    <Main className="center">
      <Container className="just-start">
        <Left className="col-align-start">
          <Title>Amazing Deal</Title>
          <Title large="true">
            Pilaf, Bread, Drink and Salad Just For
            <Links style={{color: "yellow", borderBottom: "2px solid yellow"}}> 30 zl</Links>
          </Title>
          <Button>More Offers</Button>
        </Left>
      </Container>
    </Main>
  );
};

export default Zestav;
