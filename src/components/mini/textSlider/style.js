import styled from "styled-components";

export const Container = styled.div`
  width: 350px;
  overflow: hidden;
  position: absolute;
  left: 20%;
  bottom: 47%;
  @media only screen and (max-width: 1200px) {
    bottom: 46%;
    left: 15%;
  }
  @media only screen and (max-width: 900px) {
    top: 17.5%;
    left: 42%;
  }
  @media only screen and (max-width: 600px) {
    top: 10.5%;
    left: 30%;
    width: 250px;
  }
  @media only screen and (max-width: 400px) {
    top: 10.5%;
    left: 32%;
    width: 250px;
  }
  @media only screen and (max-width: 350px) {
    top: 11.5%;
    left: 40%;
    width: 200px;
  }
`;

export const TextWrapper = styled.div`
  width: 1750px;
  position: relative;
  left: 0;
  height: 90px;

  @media only screen and (max-width: 600px) {
    width: 1250px;
  }
  @media only screen and (max-width: 350px) {
    width: 1000px;
  }
`;

export const Meal = styled.p`
  color: #dcca87;
  text-align: center;
  font-size: 80px;
  line-height: 70px;
  font-weight: 400;
  width: 20%;

  @media only screen and (max-width: 1200px) {
    font-size: 70px;
    line-height: 60px;
  }
  @media only screen and (max-width: 900px) {
    font-size: 80px;
    line-height: 70px;
  }
  @media only screen and (max-width: 600px) {
    font-size: 50px;
    line-height: 40px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 40px;
    line-height: 40px;
  }
`;
