import styled from "styled-components";
import pilaf from "../../assets/images/foods/pilaf.avif"

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 120vh;
  background-image: url(${pilaf});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.7),
      rgba(124, 123, 123, 0)
    );
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
`;

export const Left = styled.div`
  gap: 20px;
  width: 40%;
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "80px" : minis ? "16px" : "30px"};
  color: ${({ large, minis }) =>
    large ? "white" : minis ? "#AAAAAA" : "yellow"};
  font-weight: ${({ minis, large }) => (minis || large ? "400" : "600")};
  line-height: ${({ large, minis }) =>
    large ? "90px" : minis ? "175%" : null};
  /* width: 400px; */
  margin: 0;
`;

export const Button = styled.button`
  width: 150px;
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  border: none;
  font-size: 14px;
  height: 35px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;
