import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  width: 100%;
  background-color: black;
  border: 1px solid white;
  z-index: 10;
`;

export const LanguagTabs = styled.a`
  width: 100%;
  text-decoration: none;
  height: 35px;
  color: white;
  padding: 5px 10px;
  font-size: 16px;
  border-bottom: 1px solid white;
  text-align: left;
  cursor: pointer;

  &:hover {
    color: ${({ list }) => list && "black"};
    background-color: ${({ list }) => list && "#DCCA87"};
  }
`;
