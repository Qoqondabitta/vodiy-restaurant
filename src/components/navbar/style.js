import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
scroll-behavior: smooth;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.20),
      rgba(124, 123, 123, 0)
    );
  }
`;

export const Container = styled.div`
  max-width: 1350px;
  width: 100%;
  color: white;
  z-index: 10;
`;

export const Vodiy = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
`;

export const List = styled.div`
  gap: 20px;
`;

export const Item = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 600;
  font-family: "Castoro Titling", serif;
`;

export const Links = styled.a`
  text-decoration: none;
  color: white;
`;

export const Box = styled.div`
  gap: 5px;
`;

export const Stick = styled.div`
  width: 1px;
  height: 30px;
  background-color: #dcca87;
`;


export const Button = styled.button`
  width: 120px;
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  border: none;
  font-size: 14px;
  height: 30px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;
