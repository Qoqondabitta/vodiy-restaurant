import styled from "styled-components";

export const Main = styled.div`
  width: 98.5vw;
  height: 700px;
  margin: 0 auto;
  position: relative;
`;

export const Videos = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
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
