import styled from "styled-components";

export const Main = styled.div`
  margin: 0 auto;
  height: 100vh;
  padding-block: 50px;
`;

export const Container = styled.div`
  max-width: 1300px;
  width: 100%;
`;

export const Left = styled.div`
  gap: 20px;
  width: 50%;
`;
export const Right = styled.div``;

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
