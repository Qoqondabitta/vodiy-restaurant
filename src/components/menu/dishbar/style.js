import styled from "styled-components";
import bg from "../../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
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
      rgba(0, 0, 0, 0.2),
      rgba(124, 123, 123, 0)
    );
  }

  @media only screen and (max-width: 600px){
    display: none;
  }`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  z-index: 10;
  gap: 20px;
  /* background-color: black; */
  height: 100px;
  padding-bottom: 20px;
`;
