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
      rgba(0, 0, 0, 0.2),
      rgba(124, 123, 123, 0)
    );
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap: 80px;
  color: white;
  z-index: 10;
  padding: 0px 45px 0px 55px;
  position: relative;
  padding-block: 10px;
  padding-top: 20px;

  @media only screen and (max-width: 1200px) {
    gap: 20px;
    padding: 0px 10px;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: space-between;
    padding: 0px 20px;
    height: 80px;
  }

  @media only screen and (max-width: 450px) {
    justify-content: space-between;
    padding: 0px 30px;
  }

  @media only screen and (max-width: 400px) {
    justify-content: space-between;
    padding: 0px 20px;
  }
`;

export const Vodiy = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  @media only screen and (max-width: 1200px) {
    width: 80px;
    height: 80px;
  }
  @media only screen and (max-width: 600px) {
    width: 60px;
    height: 60px;
  }
`;

export const List = styled.div`
  gap: 20px;

  @media only screen and (max-width: 600px) {
    display: none;
    gap: 10px;
  }
`;

export const Item = styled.p`
  font-size: 16px;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Castoro Titling", serif;

  @media only screen and (max-width: 1200px) {
    text-transform: capitalize;
    font-size: 14px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const Links = styled.a`
  text-decoration: none;
  color: white;
  font-size: 16px;
  color: white;
  z-index: 50;
  text-transform: uppercase;
  font-weight: 600;
  font-family: "Castoro Titling", serif;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    font-size: 12px;
    text-transform: capitalize;
  }
`;

export const Box = styled.div`
  gap: 5px;

  @media only screen and (max-width: 1200px) {
    gap: 0px;
  }
`;

export const Stick = styled.div`
  width: 1px;
  height: 30px;
  background-color: #dcca87;

  @media only screen and (max-width: 900px) {
    height: 25px;
  }
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
  display: ${({ round }) => (round ? "none" : "flex")};
  align-items: center;
  justify-content: center;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }

  @media only screen and (max-width: 900px) {
    font-size: 12px;
    width: 100px;
    height: 25px;
  }

  @media only screen and (max-width: 600px) {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: ${({ round }) => (round ? "flex" : "none")};
    /* position: ${({ round }) => (round ? "flex" : "none")}; */
    position: fixed;
    z-index: 200;
    top: ${({ top }) => top};
    /* top: 85%; */
    left: ${({ left }) => left};
    /* left: 85%; */
  }
`;

export const IconBurger = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;
