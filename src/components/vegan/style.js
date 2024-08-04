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
  z-index: 19;
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
