import React from "react";
import { Container, InputBox, InputWrappers, Main, Spoon } from "./style";
import "./reservation.css";
import { Button, Title } from "../about/style";
import spoon from "../../assets/images/objects/spoon.png";
import { Title as MainTitle } from "../history/style";
import { useSelector } from "react-redux";
import {
  b,
  btn,
  inputConstants,
  r,
} from "../../constants/componentconstants/reservation";
import { Linker } from "../vegan/style";

const Reservation = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main className="center">
      <Container className="col-just-start">
        <Title style={{ textAlign: "center" }}>
          {l == "eng" ? r[0] : l == "pol" ? r[1] : r[2]}
        </Title>
        <Spoon src={spoon} />
        <MainTitle> {l == "eng" ? b[0] : l == "pol" ? b[1] : b[2]}</MainTitle>
        <InputWrappers className="center">
          {inputConstants.map((v, i) => (
            <InputBox key={i} className="center input-group">
              <input
                className="reservation-input"
                type={v.sort}
                placeholder={v.sort}
              />
              <label className="reservation-label">
                {l == "eng"
                  ? v.labelValue[0]
                  : l == "pol"
                  ? v.labelValue[1]
                  : v.labelValue[2]}
              </label>
            </InputBox>
          ))}
        </InputWrappers>
        <Linker href="http://t.me/Restauracja_Vodiy">
          <Button width="170px">
            {l == "eng" ? btn[0] : l == "pol" ? btn[1] : btn[2]}
          </Button>
        </Linker>{" "}
      </Container>
    </Main>
  );
};

export default Reservation;
