import styled from "styled-components";
import pilaf from "../../assets/images/backgrounds/BG.jpg"

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
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export const Left = styled.div`
  gap: 30px;
  width: 50%;
  padding-left: 20px;
`;

export const Right = styled.div`
  position: relative;
  width: 50%;
  height: 550px;
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
`;
