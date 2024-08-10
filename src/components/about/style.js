import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  background-color: black;
  padding-top: 50px;
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

    @media only screen and (max-width: 600px) {
      padding-top: 0px;
    }
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  position: relative;
  padding-bottom: 50px;

  @media only screen and (max-width: 900px) {
    height: 1200px;
    flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0px;
    height: 850px;
  }
  @media only screen and (max-width: 350px) {
    padding-bottom: 20px;
    height: 800px;
  }
`;

export const Left = styled.div`
  gap: 20px;
  /* @media only screen and (max-width: 1200px) {
    padding-left: 15px;
  } */
  @media only screen and (max-width: 600px) {
    /* padding-left: 30px; */
    height: 400px;
    justify-content: flex-start;
  }
  @media only screen and (max-width: 415px) {
    padding-left: 10px;
  }
  @media only screen and (max-width: 350px) {
    height: 400px;
    justify-content: flex-start;
  }
`;

export const Right = styled.div`
  position: relative;
  z-index: 0;

  @media only screen and (max-width: 600px) {
    height: 350px;
    /* padding-left: 45px; */
    align-items: center;
    justify-content: center;
  }

  @media only screen and (max-width: 415px) {
    /* padding-left: 35px; */
  }

  @media only screen and (max-width: 350px) {
    /* padding-left: 30px; */
  }
`;

export const FoodIamge = styled.img`
  width: 457px;
  height: 526px;
  object-fit: cover;
  z-index: 2;
  cursor: pointer;
  object-position: center;

  @media only screen and (max-width: 600px) {
    width: 225px;
    height: 332px;
  }
`;

export const GoldBoxes = styled.div`
  width: 357px;
  height: 357px;
  position: absolute;
  top: ${({ top }) => top && "-20px"};
  right: ${({ top }) => top && "-20px"};
  bottom: ${({ left }) => left && "-20px"};
  left: ${({ left }) => left && "-20px"};
  z-index: -1;
  color: transparent;
  background-color: #dcca87;

  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 300px;
  }

  @media only screen and (max-width: 350px) {
    width: 225px;
    height: 300px;
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
    width: 410px;
  }
  @media only screen and (max-width: 900px) {
    font-size: ${({ large, minis }) =>
      large ? "80px" : minis ? "16px" : "20px"};
    line-height: ${({ large, minis }) =>
      large ? "90px" : minis ? "175%" : null};
  }
  @media only screen and (max-width: 600px) {
    font-size: ${({ large, minis }) =>
      large ? "55px" : minis ? "16px" : "18px"};
    width: ${({ large }) => (large ? "390px" : null)};
    height: ${({ large }) => large && "120px"};
    line-height: ${({ large, minis }) =>
      large ? "55px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 400px) {
    font-size: ${({ large, minis }) =>
      large ? "45px" : minis ? "16px" : "18px"};
      /* background-color: ${({ large }) => large && "red"}; */
    height: ${({ large }) => large && "110px"};
    width: 350px;
    /* width: 370px; */
    line-height: ${({ large, minis }) =>
      large ? "45px" : minis ? "18px" : "18px"};
  }
  @media only screen and (max-width: 350px) {
    font-size: ${({ large, minis }) =>
      large ? "45px" : minis ? "16px" : "18px"};
    height: ${({ large }) => large && "100px"};
    width: 300px;
    line-height: ${({ large, minis }) =>
      large ? "45px" : minis ? "18px" : "18px"};
  }
`;

export const Button = styled.button`
  width: ${({ width }) => (width ? width : "150px")};
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  color: black;
  border: none;
  font-size: 14px;
  height: 35px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;
