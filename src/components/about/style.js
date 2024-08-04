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
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export const Left = styled.div`
  gap: 20px;
`;

export const Right = styled.div`
  position: relative;
  z-index: 0;
`;

export const FoodIamge = styled.img`
  width: 457px;
  height: 526px;
  object-fit: cover;
  z-index: 2;
  cursor: pointer;
  object-position: center;
`;

export const GoldBoxes = styled.div`
  width: 357px;
  height: 357px;
  position: absolute;
  top: ${({ top }) => top && "-20px"};
  right: ${({ top }) => top && "-20px"};
  bottom: ${({ left }) => left && "-20px"};
  left: ${({ left }) => left && "-20px"};
  z-index: 1;
  color: transparent;
  background-color: #dcca87;
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) => large ? "80px" : minis ? "16px" : "20px"};
  color: ${({ large, minis }) =>
    large ? "#DCCA87" : minis ? "#AAAAAA" : "white"};
  font-weight: ${({ minis }) => (minis ? "600" : "400")};
  line-height: ${({ large, minis }) => large ? "90px" : minis ? "175%" : null};
  width: 400px;
  margin: 0;
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
