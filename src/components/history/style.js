import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  width: 100%;
  /* height: 100vh; */
  margin: 0 auto;
  padding-block: 100px;
  z-index: 2;
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
      rgba(0, 0, 0, 0.45),
      rgba(124, 123, 123, 0)
    );
  }
`;

export const Container = styled.div`
  gap: 70px;
  height: 100%;
  position: relative;
  padding-block: 50px;
`;

export const Knife = styled.img`
  object-fit: cover;
  object-position: center;
  height: 553px;
  width: 64px;
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: "Cormorant Upright";
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  line-height: 64px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  font-feature-settings: "tnum" on, "lnum" on;
  color: #dcca87;
  margin: 0;
`;

export const Parts = styled.div`
  gap: 30px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ left }) => (left ? "flex-end" : "flex-start")};
`;

export const V = styled.img`
  object-fit: cover;
  object-position: center;
  height: 100%;
  width: 500px;
  position: absolute;
  z-index: 0;
  left: 31%;
`;

export const BgV = styled.h1`
  font-size: 550px;
  line-height: 400px;
  font-weight: 400;
  color: rgba(159, 156, 156, 0.268);
  z-index: 1;
  height: 600px;
  position: absolute;
  top: -5%;
  left: 35%;
  margin: 0;
  padding: 0;
  font-style: normal;
`;

export const Blur = styled.div`
  position: absolute;
  top: 15%;
  left: 31%;
  z-index: 1;
  width: 500px;
  height: 70%;
  opacity: 0.7;
  background-color: black;
`;

export const Scissors = styled.img`
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: ${({ bot }) => bot};
  right: ${({ right }) => right};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  width: 120px;
  height: 120px;
  z-index: 2;
`;

export const SpoonWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ left }) => (left ? "flex-end" : "flex-start")};
  gap: 10px;
`;

export const Spoon = styled.img`
  width: 40px;
  height: 9px;
  transform: rotateY(${({rot})=>rot&&"180deg"});
`;
