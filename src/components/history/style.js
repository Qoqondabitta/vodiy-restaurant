import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
  padding-block: 100px;
  z-index: 2;
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
  @media only screen and (max-width: 350px){
  padding-block: 30px;
}
`;

export const Container = styled.div`
  gap: 70px;
  /* height: 100%; */
  position: relative;
  padding-block: 50px;

  @media only screen and (max-width: 900px) {
    padding-block: 30px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    height: 500px;
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding-block: 0px;
  }
`;

export const Title = styled.h2`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #dcca87;
  margin: 0;

  @media only screen and (max-width: 900px) {
    font-size: 50px;
    line-height: 50px;
  }
@media only screen and (max-width: 600px){
  font-size: 40px;
  line-height: 40px;
}
  @media only screen and (max-width: 400px) {
    font-size: 35px;
    line-height: 35px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 30px;
    line-height: 30px;
  }
`;

export const Parts = styled.div`
  gap: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ left }) => (left ? "flex-end" : "flex-start")};

  @media only screen and (max-width: 900px) {
    width: 40%;
  }
  @media only screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const BgV = styled.h1`
  font-size: 550px;
  line-height: 400px;
  font-weight: 400;
  color: rgba(159, 156, 156, 0.268);
  z-index: 1;
  /* height: 600px; */
  position: absolute;
  top: -5%;
  left: 35%;
  margin: 0;
  padding: 0;
  font-style: normal;

  @media only screen and (max-width: 1200px) {
    /* left: 30%; */
    top: 15%;
    font-size: 450px;
    line-height: 200px;
    /* height: 200px; */
  }
  @media only screen and (max-width: 900px) {
    left: 30%;
    top: 10%;
    font-size: 450px;
    line-height: 200px;
    /* height: 200px; */
  }
  @media only screen and (max-width: 600px) {
    /* width: 300px; */
    /* height: 350px; */
    font-size: 300px;
    line-height: 200px;
    left: 30%;
    top: 40%;
  }
  @media only screen and (max-width: 400px) {
    left: 20%;
  }
  @media only screen and (max-width: 350px) {
    left: 20%;
    line-height: 100px;
  }
`;

export const Blur = styled.div`
  position: absolute;
  top: 15%;
  left: 31%;
  z-index: 1;
  width: 500px;
  height: 70%;
  opacity: 0.7;
  background-color: black;
`;

export const Scissors = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: ${({ bot }) => bot};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: 120px;
  height: 120px;
  z-index: 2;

  @media only screen and (max-width: 900px) {
    width: 80px;
    height: 80px;
    right: 10%;
    bottom: -15%;
  }
  @media only screen and (max-width: 600px) {
    bottom: -10%;
    right: 10%;
  }
  @media only screen and (max-width: 350px){
    display: none;
  } 
`;

export const SpoonWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ left }) => (left ? "flex-end" : "flex-start")};
  gap: 10px;
`;

export const Spoon = styled.img`
  width: 40px;
  height: 9px;
  transform: rotateY(${({ rot }) => rot && "180deg"});
`;

export const Text = styled.h1`
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
    width: 90%;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    font-size: 16px;
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ large, minis }) =>
      large ? "60px" : minis ? "16px" : "20px"};
    width: 300px;
    line-height: ${({ large, minis }) =>
      large ? "50px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 350px) {
    width: 100%;
    font-size: 14px;
  }
`;
