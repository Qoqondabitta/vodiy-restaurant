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
  top: 0;
  left: 0;
  z-index: 10;
`;

export const Rows = styled.div`
  gap: ${({ gap }) => gap};
`;

export const NavTab = styled.a`
  text-decoration: none;
  width: 100%;
  font-size: 16px;
  color: gold;
`;

export const Icon = styled.div`
`