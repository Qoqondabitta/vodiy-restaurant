import styled from "styled-components";
import bg from "../../../assets/images/backgrounds/BG.jpg";

export const Main = styled.div`
  margin: 0 auto;
  width: 100%;
`;

export const Wrapper = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  position: relative;
  padding-bottom: 50px;
  &:before {
    content: "";
    position: absolute;
    z-index: 0;
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
  position: relative;
  gap: 50px;
  padding-bottom: 50px;
  padding-top: 50px;
  height: 610px;
`;

export const Left = styled.div`
  gap: 20px;
  width: 50%;
  height: 100%;
  z-index: 10;
`;

export const Right = styled.div`
  position: relative;
  height: 100%;
  z-index: 10;
  ${({ dir }) => dir}: -30px;
`;

export const FoodIamge = styled.img`
  width: 450px;
  height: 500px;
  object-fit: cover;
  z-index: 2;
  cursor: pointer;
  object-position: center;
`;

export const GoldBoxes = styled.div`
  width: 357px;
  height: 357px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bot }) => bot};
  left: ${({ left }) => left};
  z-index: 1;
  color: transparent;
  background-color: #dcca87;
`;

export const Note = styled.h1`
  font-size: 36px;
  line-height: 35px;
  letter-spacing: 0.04em;
  margin: 0;
  font-weight: 600;
  color: rgb(162, 118, 62);
  font-family: "Cormorant Upright";
`;

export const Ingridients = styled.p`
  font-size: 20px;
  color: white;
  text-transform: capitalize;

  text-align: ${({ side }) => side};
  width: 60%;
`;

export const Price = styled.p`
  font-size: 40px;
  margin: 0;
  font-weight: 600;
  /* color: #dcca87; */
  color: rgb(162, 118, 62);
`;

export const Vector = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  position: absolute;
  bottom: ${({ bot }) => bot};
  left: ${({ left }) => left};
  transform: rotate(${({ deg }) => deg});
`;

export const Signature = styled.h1`
  position: absolute;
  /* font-family: "Mrs Saint Delafield", cursive; */
  font-weight: 400;
  font-style: normal;
  color: grey;
  font-size: 90px;
  line-height: 80px;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
`;
