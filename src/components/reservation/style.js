import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  height: 500px;
  position: relative;

  @media only screen and (max-width: 600px) {
    height: 540px;
  }
  @media only screen and (max-width: 350px) {
    height: 460px;
  }
`;

export const Container = styled.div`
  width: 75%;
  height: 370px;
  padding-top: 30px;
  gap: 20px;
  border: 1px solid rgba(220, 202, 135, 0.2);
  background: #0c0c0c;
  position: absolute;
  top: 200px;
  z-index: 10;

  @media only screen and (max-width: 1200px) {
    top: 70px;
    width: 90%;
  }

  @media only screen and (max-width: 900px) {
    gap: 15px;
  }
  @media only screen and (max-width: 600px) {
    top: 20px;
    height: 500px;
    width: 90%;
  }

  @media only screen and (max-width: 350px) {
    gap: 10px;
    height: 420px;
  }
`;

export const InputBox = styled.div`
  height: 40px;
  position: relative;
`;

export const InputWrappers = styled.div`
  gap: 5px;
  margin-block: 30px;

  @media only screen and (max-width: 900px) {
    gap: 10px;
  }
  @media only screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Spoon = styled.img`
  width: 40px;
  height: 9px;
`;
