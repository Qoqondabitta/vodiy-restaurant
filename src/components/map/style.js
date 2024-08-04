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
`;

export const Container = styled.div`
  max-width: 1300px;
  gap: 50px;
  width: 100%;
  height: 100%;
  z-index: 10;
`;

export const MapImg = styled.img`
  object-fit: cover;
  object-position: center;
  width: 1000px;
  height: 500px;
  cursor: pointer;
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
`;
