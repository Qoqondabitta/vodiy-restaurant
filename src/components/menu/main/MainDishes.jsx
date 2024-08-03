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
import line from "../../../assets/images/objects/line.webp";
import { breakfast } from "../../../constants/componentconstants/breakfast";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../../redux/store";
import { minlist } from "../../../constants/componentconstants/menuNavbar";
import { main } from "../../../constants/componentconstants/mainDishes";

const MainDishes = () => {
  const dispatch = useDispatch()
  const language = useSelector(store => store.language.value)
  const title = useSelector(store => store.title.value)
  const res = minlist.filter(v=>v.tag==title)[0]?.data
  return (
    <Main className="column-center">
      {(res||main).map((v, i) => (
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
            <Vector
              src={line}
              deg={v.vector.deg}
              bot={v.vector.bot}
              left={v.vector.left}
            />
            <Left className={v.leftPlacement.classTitle}>
              <Note>
                {language == "eng"
                  ? v.leftPlacement.note[0]
                  : language == "pol"
                  ? v.leftPlacement.note[1]
                  : v.leftPlacement.note[2]}
              </Note>
              <Ingridients side={v.leftPlacement.size}>
                {language == "eng"
                  ? v.leftPlacement.ingredients[0]
                  : language == "pol"
                  ? v.leftPlacement.ingredients[1]
                  : v.leftPlacement.ingredients[2]}
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
