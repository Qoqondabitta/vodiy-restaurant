import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  height: 700px;
  width: 100%;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.45),
      rgba(124, 123, 123, 0)
    );
  }

  @media only screen and (max-width: 600px) {
    padding-top: 30px;
    height: 600px;
  }
  @media only screen and (max-width: 400px) {
    height: 550px;
  }
  @media only screen and (max-width: 350px) {
    height: 500px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  gap: 50px;
  width: 100%;
  height: 100%;
  z-index: 10;

  @media only screen and (max-width: 900px) {
    gap: 30px;
  }
  @media only screen and (max-width: 600px) {
    gap: 20px;
  }
`;

export const MapImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 1000px;
  height: 500px;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 800px;
  }

  @media only screen and (max-width: 900px) {
    width: 700px;
  }
  @media only screen and (max-width: 600px) {
    width: 500px;
    height: 550px;
  }
  @media only screen and (max-width: 500px) {
    width: 385px;
    height: 435px;
  }
  @media only screen and (max-width: 420px) {
    width: 370px;
    height: 420px;
  }
  @media only screen and (max-width: 400px) {
    width: 335px;
    height: 385px;
  }
  @media only screen and (max-width: 350px) {
    width: 280px;
    height: 330px;
  }
`;

export const Linker = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "70px" : minis ? "16px" : "30px"};
  color: ${({ large, minis }) =>
    large ? "white" : minis ? "#AAAAAA" : "#dcca87"};
  font-weight: ${({ minis, large }) => (minis || large ? "400" : "600")};
  line-height: ${({ large, minis }) =>
    large ? "80px" : minis ? "175%" : null};
  margin: 0;
  text-align: center;

  @media only screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 50px;
    width: 90%;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width: 400px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
