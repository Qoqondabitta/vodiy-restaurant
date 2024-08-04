import React from "react";
import {
  BgV,
  Container,
  Knife,
  Main,
  Parts,
  Scissors,
  SpoonWrapper,
  Title,
  Spoon,
} from "./style";
import { Button, Title as Text } from "../about/style";
import scissors from "../../assets/images/objects/scissors.png";
import spoon from "../../assets/images/objects/spoon.png";
import "./history.css";
import { history } from "../../constants/componentconstants/history";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { changeTitle } from "../../redux/title";

const History = () => {
  const dispatch = useDispatch()
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="about">
      <Container className="align-start">
        <BgV className="v">V</BgV>
        <Scissors src={scissors} bot="-20%" right="3%" />
        {history.map((v, i) => (
          <Parts key={i} left={v?.partLeft}>
            <SpoonWrapper left={v?.partLeft}>
              <Title>
                {l == "eng" ? v.title[0] : l == "pol" ? v.title[1] : v.title[2]}
              </Title>
              <Spoon rot={v?.rot} src={spoon} />
            </SpoonWrapper>
            <Text>
              {l == "eng" ? v.text[0] : l == "pol" ? v.text[1] : v.text[2]}
            </Text>
            <NavLink style={{textDecoration: "none"}} to="/menu">
              <Button onClick={()=>dispatch(changeTitle("main"))}>
                {l == "eng" ? v.btn[0] : l == "pol" ? v.btn[1] : v.btn[2]}
              </Button>
            </NavLink>
          </Parts>
        ))}
      </Container>
    </Main>
  );
};

export default History;
