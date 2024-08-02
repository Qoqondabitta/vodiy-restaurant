import React from "react";
import {
  BgV,
  // Blur,
  Container,
  Knife,
  Main,
  Parts,
  Scissors,
  Title,
  // V,
} from "./style";
import { Button, Title as Text } from "../about/style";
import knife from "../../assets/images/objects/knife.png";
// import v from "../../assets/images/objects/v.png"
import scissors from "../../assets/images/objects/scissors.png";

const History = () => {
  return (
    <Main>
      <Container className="center">
        {/* <Blur />
              <V src={v} /> */}
        <BgV>v</BgV>
        <Scissors src={scissors} bot="0%" right="3%" />
        <Parts left="true">
          <Title>About Us</Title>
          <Text minis="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </Text>
          <Button>Explore More</Button>
        </Parts>
        <Knife src={knife} />
        <Parts>
          <Title>Our History</Title>
          <Text minis="true">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </Text>
          <Button>Explore More</Button>
        </Parts>
      </Container>
    </Main>
  );
};

export default History;
