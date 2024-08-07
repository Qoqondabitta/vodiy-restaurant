import React from "react";
import { Button, Container, Left, Main, Plov, Right, Title, Links } from "./style";
// import { Links } from "../delivery/style";
import { a, m, z, zestavurls } from "../../constants/componentconstants/zestav";
import { useDispatch, useSelector } from "react-redux";
import { Spoon, SpoonWrapper } from "../history/style";
import spoon from "../../assets/images/objects/spoon.png";
import { NavLink } from "react-router-dom";
import { changeTitle } from "../../redux/title";

const Zestav = () => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="discount" className="center">
      <Container className="center">
        <Left className="col-align-start">
          <SpoonWrapper>
            <Title> {l == "eng" ? a[0] : l == "pol" ? a[1] : a[2]}</Title>
            <Spoon src={spoon} />
          </SpoonWrapper>
          <Title large="true">
            {l == "eng" ? z[0] : l == "pol" ? z[1] : z[2]}
            <Links> 34.99zl</Links>
          </Title>
          <NavLink style={{ textDecoration: "none" }} to="/menu">
            <Button width="170px" onClick={() => dispatch(changeTitle("main"))}>
              {l == "eng" ? m[0] : l == "pol" ? m[1] : m[2]}
            </Button>
          </NavLink>
        </Left>
        <Right>
          {zestavurls.map((v, i) => (
            <Plov
              key={i}
              src={v.url}
              width={v.width}
              height={v.height}
              top={v.top}
              left={v.left}
              plov={v?.polv}
              tea={v?.tea}
              salad={v?.salad}
            />
          ))}
        </Right>
      </Container>
    </Main>
  );
};

export default Zestav;
