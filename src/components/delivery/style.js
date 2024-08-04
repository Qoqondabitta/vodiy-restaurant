import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  height: 100vh;
  /* margin-top: 70px; */
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
  max-width: 1300px;
  width: 100%;
  z-index: 10;
`;

export const Left = styled.div`
  gap: 20px;
  width: 50%;
`;
export const Right = styled.div`
  position: relative;
  z-index: 0;
`;

export const Deliver = styled.img`
  width: 470px;
  height: 500px;
  object-fit: cover;
  cursor: pointer;
  z-index: 2;
  object-position: center;
`;

export const Links = styled.a`
  font-family: "Cormorant Upright";
  font-size: 80px;
  color: orange;
  font-weight: 600;
  cursor: pointer;
  line-height: 85px;
  text-decoration: none;
  border-bottom: 3px solid gold;
  margin: 0;
  padding-bottom: 5px;
`;

export const Navigates = styled.a`
  text-decoration: none;
`;

export const Title = styled.h1`
  font-family: "Cormorant Upright";
  font-size: ${({ large, minis }) =>
    large ? "80px" : minis ? "16px" : "20px"};
  color: ${({ large, minis }) =>
    large ? "#DCCA87" : minis ? "#AAAAAA" : "white"};
  font-weight: ${({ minis }) => (minis ? "400" : "400")};
  line-height: ${({ large, minis }) =>
    large ? "90px" : minis ? "175%" : null};
  width: 500px;
  margin: 0;
`;
