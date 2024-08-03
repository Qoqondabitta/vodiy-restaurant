import React from "react";
import {
  Container,
  FoodIamge,
  GoldBoxes,
  Ingridients,
  Left,
  Main,
  Note,
  Price,
  Right,
  Signature,
  Vector,
  Wrapper,
} from "./style";
import Halal from "../../../assets/images/objects/Halal.webp";
import { Scissors } from "../../history/style";
import plov from "../../../assets/images/foods/plov.jpg";
import line from "../../../assets/images/objects/line.webp";
import kazankebab from "../../../assets/images/foods/kazan-kebab.jpg";
import { dishes } from "../../../constants/componentconstants/mainDishes";
import { soups } from "../../../constants/componentconstants/soups";
import { grill } from "../../../constants/componentconstants/grill";
import { bakery } from "../../../constants/componentconstants/bakery";
import { salad } from "../../../constants/componentconstants/salad";
// import signature from "../../../assets/images/objects/signature.svg"

const MainDishes = () => {
  return (
    <Main className="column-center">
      {salad.map((v, i) => (
        <Wrapper className="center" key={i}>
          <Container className={v.place}>
            <Scissors
              src={Halal}
              top={v.certificate.top}
              left={v.certificate.left}
            />
            <Signature
              className="signature"
              top={v.sign.top}
              left={v.sign.left}
            >
              Vodiy lik
            </Signature>
            {/* <Scissors
              top={v.certificate.top}
              left={v.certificate.left}
            /> */}
            <Vector
              src={line}
              deg={v.vector.deg}
              bot={v.vector.bot}
              left={v.vector.left}
            />
            <Left className={v.leftPlacement.classTitle}>
              <Note>{v.leftPlacement.note[0]}</Note>
              <Ingridients side={v.leftPlacement.size}>
                {v.leftPlacement.ingredients[0]}
              </Ingridients>
              <Price>{v.leftPlacement.price}</Price>
            </Left>
            <Right
              dir={v.rightPlacement?.dir?.dir}
              className={v.rightPlacement.classTitle}
            >
              <FoodIamge src={v.rightPlacement.imgurl} />
              <GoldBoxes
                top={v.rightPlacement.box[0]?.top}
                right={v.rightPlacement.box[0]?.right}
              ></GoldBoxes>
              <GoldBoxes
                left={v.rightPlacement.box[1]?.left}
                bot={v.rightPlacement.box[1]?.bot}
              ></GoldBoxes>
            </Right>
          </Container>
        </Wrapper>
      ))}
    </Main>
  );
};

export default MainDishes;
