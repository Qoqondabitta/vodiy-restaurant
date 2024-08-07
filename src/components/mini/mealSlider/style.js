import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Container = styled.div`
  width: 457px;
  height: 526px;
  overflow: hidden;
  z-index: 5;
  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 470px;
  }
  @media only screen and (max-width: 900px) {
    width: 457px;
    height: 526px;
  }
  @media only screen and (max-width: 600px) {
    width: 330px;
    height: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
    height: 370px;
  }
  @media only screen and (max-width: 350px) {
    width: 260px;
    height: 340px;
  }
`;

export const ImageWrapper = styled.div`
  width: 2285px;
  height: 526px;
  position: relative;
  left: 0;

  @media only screen and (max-width: 1200px) {
    width: 2000px;
    height: 470px;
  }
  @media only screen and (max-width: 900px) {
    width: 2285px;
    height: 526px;
  }
  @media only screen and (max-width: 600px) {
    width: 1650px;
    height: 400px;
  }
  @media only screen and (max-width: 400px) {
    width: 1500px;
    height: 370px;
  }
  @media only screen and (max-width: 350px) {
    width: 1300px;
    height: 340px;
  }
`;

export const MealImage = styled.img`
  width: 457px;
  height: 526px;
  object-fit: cover;
  object-position: center;
  cursor: pointer;

  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 470px;
  }
  @media only screen and (max-width: 900px) {
    width: 457px;
    height: 526px;
  }
  @media only screen and (max-width: 600px) {
    width: 330px;
    height: 400px;
  }

  @media only screen and (max-width: 400px) {
    width: 300px;
    height: 370px;
  }
  @media only screen and (max-width: 350px) {
    width: 260px;
    height: 340px;
  }
`;
