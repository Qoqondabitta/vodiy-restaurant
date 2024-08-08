import styled from "styled-components";
import pilaf from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  /* height: 100vh; */
  background-image: url(${pilaf});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding-block: 100px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.6),
      rgba(124, 123, 123, 0)
    );
  }

  @media only screen and (max-width: 1200px) {
    padding-block: 0px;
    padding-top: 30px;
  }
  @media only screen and (max-width: 900px) {
    padding-top: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  position: relative;
  padding-bottom: 50px;

  @media only screen and (max-width: 1200px) {
    padding-bottom: 0px;
  }
  @media only screen and (max-width: 900px){
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 30px;
  }
  @media only screen and (max-width: 350px) {
    justify-content: space-between;
  }
`;

export const Left = styled.div`
  gap: 30px;
  width: 50%;
  padding-left: 20px;
@media only screen and (max-width: 900px){
  width: 70%;
}
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 0px 20px;
  }
`;

export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 550px;

  @media only screen and (max-width: 350px){
    height: 400px;
  }
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "70px" : minis ? "16px" : "30px"};
  color: ${({ large, minis }) =>
    large ? "#dcca87" : minis ? "#AAAAAA" : "white"};
  font-weight: ${({ minis, large }) => (minis || large ? "400" : "600")};
  line-height: ${({ large, minis }) =>
    large ? "80px" : minis ? "175%" : null};
  margin: 0;

  @media only screen and (max-width: 1200px) {
    font-size: ${({ large, minis }) =>
      large ? "70px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "70px" : minis ? "18px" : null};
  }
  @media only screen and (max-width: 900px) {
    font-size: ${({ large, minis }) =>
      large ? "60px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "60px" : minis ? "175%" : null};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ large, minis }) =>
      large ? "50px" : minis ? "16px" : "20px"};
    width: 100%;
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 350px) {
    /* font-size: ${({ large, minis }) =>
      large ? "30px" : minis ? "16px" : "20px"}; */
    width: 300px;
    /* line-height: ${({ large, minis }) =>
      large ? "30px" : minis ? "18px" : "18px"}; */
  }
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
  margin-top: 20px;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;

export const Plov = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};

  @media only screen and (max-width: 1200px) {
    width: ${({ plov, tea, salad }) =>
      plov ? "400px" : tea ? "250px" : salad ? "400px" : "200px"};
    height: ${({ plov, tea, salad }) =>
      plov ? "290px" : tea ? "40%" : salad ? "400px" : "200px"};
    top: ${({ plov, tea, salad }) =>
      plov ? null : tea ? "300px" : salad ? "-10%" : "0%"};
    left: ${({ plov, tea, salad, bread }) =>
      plov ? null : tea ? "-30%" : salad ? "-20%" : "40%"};
  }
  @media only screen and (max-width: 900px) {
    width: ${({ plov, tea, salad }) =>
      plov ? "300px" : tea ? "250px" : salad ? "350px" : "200px"};
    height: ${({ plov, tea, salad }) =>
      plov ? "220px" : tea ? "250px" : salad ? "350px" : "200px"};
    top: ${({ plov, tea, salad }) =>
      plov ? "45%" : tea ? "50%" : salad ? "4%" : "10%"};
    left: ${({ plov, tea, salad, bread }) =>
      plov ? null : tea ? "-45%" : salad ? "-28%" : "40%"};
  }
  @media only screen and (max-width: 600px) {
    width: ${({ plov, tea, salad }) =>
      plov ? "300px" : tea ? "200px" : salad ? "300px" : "150px"};
    height: ${({ plov, tea, salad }) =>
      plov ? "220px" : tea ? "200px" : salad ? "300px" : "150px"};
    top: ${({ plov, tea, salad }) =>
      plov ? "45%" : tea ? "20%" : salad ? "-10%" : "25%"};
    left: ${({ plov, tea, salad, bread }) =>
      plov ? "-20%" : tea ? "-55%" : salad ? "-10%" : "75%"};
  }
  @media only screen and (max-width: 400px) {
    top: ${({ plov, tea, salad }) =>
      plov ? "45%" : tea ? "20%" : salad ? "-10%" : "20%"};
    left: ${({ plov, tea, salad, bread }) =>
      plov ? "-20%" : tea ? "-55%" : salad ? "-45%" : "60%"};
  }
  @media only screen and (max-width: 350px) {
    width: ${({ plov, tea, salad }) =>
      plov ? "250px" : tea ? "175px" : salad ? "200px" : "125px"};
    height: ${({ plov, tea, salad }) =>
      plov ? "180px" : tea ? "175px" : salad ? "200px" : "125px"};
    top: ${({ plov, tea, salad }) =>
      plov ? "45%" : tea ? "15%" : salad ? "-10%" : "20%"};
    left: ${({ plov, tea, salad, bread }) =>
      plov ? "-20%" : tea ? "-55%" : salad ? "-10%" : "70%"};
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
    padding-bottom: 0px;
    font-size: 70px;
    line-height: 70px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 60px;
    line-height: 50px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 35px;
    line-height: 35px;
  }
  /* @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
  } */
`;
