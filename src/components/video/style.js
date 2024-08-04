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
`;

export const Container = styled.div`
  max-width: 1300px;
  height: 100%;
  gap: 30px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin-top: 50px;
`;

export const VideoBox = styled.div`
  width: 200px;
  height: 200px;
  position: relative;
  margin-bottom: 20px;
`;

export const VideoWrapper = styled.div`
gap: 30px;
`;

export const Videos = styled.video`
  position: absolute;
  top: -20px;
  /* left: ${({ left }) => left}; */
  left: -22px;
  width: 200%;
  /* z-index: ${({ z }) => z}; */
  height: 100%;
  transform: scaleY(1.3);
  /* transform: scale(1.05); */
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
`;