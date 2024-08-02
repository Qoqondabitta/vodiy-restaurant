import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  margin: 0 auto;
  background-color: black;
`;

export const Container = styled.div`
  max-width: 1350px;
  width: 100%;
  color: white;
`;

export const Vodiy = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  object-position: center;
`;

export const List = styled.div`
  gap: 20px;
`;

export const Item = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 600;
  font-family: "Castoro Titling", serif;
`;

export const Links = styled.a`
  text-decoration: none;
  color: white;
`;

export const Box = styled.div`
  gap: 5px;
`;

export const Stick = styled.div`
  width: 1px;
  height: 30px;
  background-color: #dcca87;
`;


export const Button = styled.button`
  width: 120px;
  font-family: "Cormorant Upright";
  font-weight: 600;
  background-color: #dcca87;
  border: none;
  font-size: 14px;
  height: 30px;
  cursor: pointer;
  transition: all 0.7s;
  &:hover {
    scale: 0.8;
  }
`;
