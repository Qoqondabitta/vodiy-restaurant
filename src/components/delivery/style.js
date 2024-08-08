import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  height: 100vh;
  /* margin-top: 70px; */
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

  @media only screen and (max-width: 1200px) {
    height: 500px;
  }
  @media only screen and (max-width: 900px) {
    height: 850px;
  }
  @media only screen and (max-width: 600px) {
    height: 830px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  z-index: 10;

  @media only screen and (max-width: 1200px) {
    gap: 30px;
  }
  @media only screen and (max-width: 900px) {
    gap: 70px;
    flex-direction: column;
    justify-content: space-between;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding-bottom: 50px;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Left = styled.div`
  gap: 20px;
  width: 50%;

  @media only screen and (max-width: 900px) {
    width: 70%;
    padding: 0px 20px;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0px 20px;
  }
`;
export const Right = styled.div`
  position: relative;
  z-index: 0;

  @media only screen and (max-width: 900px) {
    padding-right: 20px;
  }
  @media only screen and (max-width: 600px) {
    padding-right: 0px;
  }
`;

export const Deliver = styled.img`
  width: 470px;
  height: 500px;
  object-fit: cover;
  cursor: pointer;
  z-index: 0;
  object-position: center;

  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 470px;
  }
  @media only screen and (max-width: 900px) {
    width: 457px;
    height: 526px;
  }
  @media only screen and (max-width: 900px) {
    width: 330px;
    height: 400px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
    height: 370px;
  }
  @media only screen and (max-width: 350px) {
    width: 260px;
    height: 340px;
  }
`;

export const Links = styled.a`
  font-family: "Cormorant Upright";
  font-size: 80px;
  color: orange;
  font-weight: 600;
  cursor: pointer;
  line-height: 85px;
  text-decoration: none;
  border-bottom: 3px solid gold;
  margin: 0;
  padding-bottom: 5px;

  @media only screen and (max-width: 1200px) {
    font-size: 70px;
    line-height: 70px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 50px;
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 50px;
    line-height: 50px;
    margin-bottom: 5px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 50px;
    line-height: 50px;
  }
`;

export const Navigates = styled.a`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "80px" : minis ? "16px" : "20px"};
  color: ${({ large, minis }) =>
    large ? "#DCCA87" : minis ? "#AAAAAA" : "white"};
  font-weight: ${({ minis }) => (minis ? "400" : "400")};
  line-height: ${({ large, minis }) =>
    large ? "90px" : minis ? "175%" : null};
  width: 500px;
  margin: 0;
  @media only screen and (max-width: 1200px) {
    width: 90%;
    font-size: ${({ large, minis }) =>
      large ? "70px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "70px" : minis ? "18px" : null};
  }
  @media only screen and (max-width: 900px) {
    font-size: ${({ large, minis }) =>
      large ? "50px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "175%" : null};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ large, minis }) =>
      large ? "50px" : minis ? "16px" : "20px"};
    width: 90%;
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 350px) {
    font-size: ${({ large, minis }) =>
      large ? "40px" : minis ? "16px" : "20px"};
    /* width: 300px; */
    line-height: ${({ large, minis }) =>
      large ? "40px" : minis ? "18px" : "18px"};
  }
`;
