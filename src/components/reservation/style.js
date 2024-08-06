import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  height: 500px;
  position: relative;
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
`;

export const InputBox = styled.div`
  height: 40px;
  position: relative;
`;

export const InputWrappers = styled.div`
  gap: 5px;
  margin-block: 30px;
`;

export const Spoon = styled.img`
  width: 40px;
  height: 9px;
`;
