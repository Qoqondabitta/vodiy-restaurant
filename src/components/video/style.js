import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 650px;
  margin: 0 auto;
  position: relative;
  padding-block: 50px;
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

  @media only screen and (max-width: 1200px) {
    height: 950px;
    padding-block: 0px;
  }
  @media only screen and (max-width: 900px) {
    height: 1200px;
    padding-bottom: 50px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  height: 100%;
  gap: 30px;
  z-index: 10;

  @media only screen and (max-width: 900px) {
    gap: 20px;
  }
  @media only screen and (max-width: 350px) {
    gap: 15px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;

  @media only screen and (max-width: 1200px) {
    flex-wrap: wrap;
    gap: 60px;
    margin-top: 70px;
  }
  @media only screen and (max-width: 900px) {
    gap: 70px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 350px){
    gap: 60px
  }
`;

export const VideoBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 20px;

  @media only screen and (max-width: 600px) {
    width: 190px;
  }
  @media only screen and (max-width: 400px) {
    width: 160px;
  }
  @media only screen and (max-width: 350px) {
    width: 140px;
    margin-bottom: 0px;
  }
`;

export const VideoWrapper = styled.div`
  gap: 30px;
  margin: 0 auto;

  @media only screen and (ma-width: 900px){
    margin-top: 70px;
  }
  @media only screen and (max-width: 350px){
    gap: 0px;
  }
`;

export const Videos = styled.video`
  position: absolute;
  top: -20px;
  left: -22px;
  width: 200%;
  height: 100%;
  transform: scaleY(1.3);

  @media only screen and (max-width: 450px) {
    left: -10px;
    top: -10px;
  }
  @media only screen and (max-width: 400px) {
    left: 7px;
    top: -10px;
  }
  @media only screen and (max-width: 350px) {
    left: 0px;
    top: -10px;
  }
`;

export const Blur = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  background-color: black;
  opacity: 0.7;
  /* background-color: rgba(159, 156, 156, 0.268); */
`;

export const ZesTitle = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "70px" : minis ? "16px" : "30px"};
  color: ${({ large, minis }) =>
    large ? "white" : minis ? "#AAAAAA" : "#dcca87"};
  font-weight: ${({ minis, large }) => (minis || large ? "600" : "600")};
  line-height: ${({ large, minis }) =>
    large ? "80px" : minis ? "175%" : null};
  /* width: 400px; */
  margin: 0;
  width: 356px;

  @media only screen and (max-width: 400px) {
    width: 335px;
  }
  @media only screen and (max-width: 350px) {
    width: 280px;
  }
`;
