import React from "react";
import {
  Box,
  Container,
  LogoTitle,
  Transparent,
  Wrapper,
} from "./style";
import "./logo.css";
import MiniLanguage from "../language/MiniLanguage";

const Logo = () => {
  return (
    <>
      <Wrapper className="column-center">
        <Container className="center">
          <Box className="center">
            <Transparent>
              <div className="triangle"></div>
              <div className="second"></div>
              <div className="third"></div>
              <div className="fourth"></div>
            </Transparent>
          </Box>
        </Container>
        <MiniLanguage />
        <LogoTitle className="logoVodiy">VODIY</LogoTitle>
      </Wrapper>
    </>
  );
};

export default Logo;
