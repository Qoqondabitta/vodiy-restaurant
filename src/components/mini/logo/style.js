import styled from "styled-components";

export const Wrapper = styled.div`
  gap: 8px;

  @media only screen and (max-width: 1200px) {
    position: relative;
    top: 15px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: row;
    width: 68%;
    top: 0px;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  top: 0px;
  position: relative;
  background: rgb(162, 118, 62);
  background: goldenrod;
  transform: rotate(45deg);
  width: 50px;
  height: 50px;
  border: 1px solid #dcca87;
  z-index: 0;

  @media only screen and (max-width: 600px) {
    top: 10px;
  }
`;

export const Box = styled.div`
  width: 45px;
  height: 50px;
  transform: rotate(45deg);
  position: relative;
  z-index: 1;
  background: #dcca87;
  overflow: hidden;
`;

export const Transparent = styled.div`
  background-color: transparent;
  width: 50px;
  transform: rotate(40deg);
  height: 50px;
  position: relative;
  top: 2px;
  overflow: hidden;
`;

export const Bottom = styled.div`
  background: #dcca87;
  width: 8px;
  height: 100%;
  transform: translateY(5px);
  position: absolute;
  right: 0;
  bottom: 10px;
`;

export const LogoTitle = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 400;

  @media only screen and (max-width: 600px){
    display: none;
  }
`;

export const Letters = styled.p`
  color: white;
  font-size: 22px;
  font-weight: 600;
  position: relative;
  top: ${({top})=>top};
`;
