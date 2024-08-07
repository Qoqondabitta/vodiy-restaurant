import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-block: 50px;
  padding-bottom: 50px;
  position: relative;
  background-color: red;

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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 800px;
    padding-bottom: 0px;
    padding-top: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 19;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 700px;
    gap: 50px;
  }
`;

export const Left = styled.div`
  flex: 1;
  gap: 20px;
  padding-left: 50px;
  z-index: 5;

  @media only screen and (max-width: 900px) {
    padding-left: 20px;
  }
  @media only screen and (max-width: 350px) {
    padding-left: 10px;
  }
`;

export const Right = styled.div`
  flex: 1;
`;

export const VeganFood = styled.img`
  width: 500px;
  height: 500px;
  z-index: 0;
  object-fit: cover;
  object-position: center;

  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 400px;
  }
  @media only screen and (max-width: 900px) {
    width: 350px;
    height: 350px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 300px;
  }
`;

export const Note = styled.h1`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.04em;
  margin: 0;
  font-weight: 400;
  color: #dcca87;
  font-family: "Cormorant Upright";

  @media only screen and (max-width: 900px) {
    font-size: 20px;
    line-height: 20px;
  }
`;

export const Linker = styled.a`
  text-decoration: none;
`;

export const Button = styled.button`
  width: ${({ width }) => (width ? width : "150px")};
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  border: none;
  font-size: 14px;
  height: 35px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "80px" : minis ? "16px" : "20px"};
  color: ${({ large, minis }) =>
    large ? "#DCCA87" : minis ? "#AAAAAA" : "white"};
  font-weight: ${({ minis }) => (minis ? "600" : "400")};
  line-height: ${({ large, minis }) =>
    large ? "90px" : minis ? "175%" : null};
  width: 450px;
  gap: 20px;
  margin: 0;

  @media only screen and (max-width: 1200px) {
    font-size: ${({ large, minis }) =>
      large ? "70px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "70px" : minis ? "18px" : null};
  }
  @media only screen and (max-width: 900px) {
    font-size: ${({ large, minis }) =>
      large ? "60px" : minis ? "14px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "16px" : null};
    width: 350px;
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ large, minis }) =>
      large ? "60px" : minis ? "16px" : "20px"};
    width: 300px;
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 350px) {
    font-size: ${({ large, minis }) =>
      large ? "50px" : minis ? "16px" : "20px"};
    width: 300px;
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "18px" : "18px"};
  }
`;
