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
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(10, 10, 10, -10)
    );
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Left = styled.div`
  flex: 1;
  gap: 20px;
  padding-left: 50px;
  z-index: 5;
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
`;

export const Note = styled.h1`
  font-size: 30px;
  line-height: 35px;
  letter-spacing: 0.04em;
  margin: 0;
  font-weight: 400;
  color: #dcca87;
  font-family: "Cormorant Upright";
`;
