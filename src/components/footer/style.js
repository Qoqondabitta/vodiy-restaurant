import styled from "styled-components";
import bg from "../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  width: 100%;
  height: 600px;
  margin: 0 auto;
  background-image: url(${bg});
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 50px;
  z-index: 0;
  position: relative;
  gap: 50px;
  @media only screen and (max-width: 1200px) {
    height: 500px;
  }

  @media only screen and (max-width: 900px) {
    height: 800px;
    padding-top: 0px;
  }
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
  gap:50px;
  z-index: 10;

  @media only screen and (max-width: 1200px) {
    gap: 10px;
    align-items: flex-start;
  }
  @media only screen and (max-width: 900px) {
    gap: 100px;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    /* gap: 20px; */
  }
`;

export const Columns = styled.div`
  gap: 20px;
  max-width: 440px;
  width: 100%;

  @media only screen and (max-width: 600px) {
    gap: 10px;
  }
`;

export const Headline = styled.div`
  font-size: ${({ big }) => (big ? "60px" : "30px")};
  margin-bottom: ${({ big }) => (big ? "10px" : "0px")};
  font-weight: ${({ big }) => (big ? "700" : "400")};
  line-height: ${({ big }) => (big ? "65px" : "35px")};
  letter-spacing: 0.04em;
  color: ${({ big }) => (big ? "#DCCA87" : "#F5EFDB")};
  text-align: center;
  font-family: "Cormorant Upright";
  cursor: pointer;
`;

export const Texts = styled.p`
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 400;
  /* line-height: 10px; */
  /* line-height: 10px; */
  letter-spacing: 0.04em;
  margin: 0;
  text-align: center;
  color: ${({ quote }) => (quote ? "white" : "#AAAAAA")};
  line-height: ${({ quote }) => (quote ? "20px" : "10px")};

  @media only screen and (max-width: 600px) {
    width: ${({ quote }) => (quote ? "90%" : null)};
  }
`;

export const Links = styled.a`
  text-decoration: none;
  color: #aaaaaa;
  line-height: 4px;
  font-size: 16px;
  font-family: "Open Sans";
  font-weight: 400;
  line-height: 14px;
  letter-spacing: 0.04em;
`;

export const Tel = styled.div`
  gap: 10px;
`;
