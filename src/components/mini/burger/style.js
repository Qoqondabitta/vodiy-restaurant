import styled from "styled-components";
import bg from "../../../assets/images/backgrounds/BG.jpg";

export const Container = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  max-width: 600px;
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 60px;
  left: 0;
  z-index: 10;
`;

export const Rows = styled.div`
  gap: 15px;
  width: 100%;
  display: none;
  padding-block: 20px;

  @media only screen and (max-width: 600px) {
    display: flex;
  }
`;

export const NavTab = styled.a`
  text-decoration: none;
  width: 100%;
  width: fit-content;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  color: #dcca87;
  z-index: 15;

  @media only screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Icon = styled.div``;
