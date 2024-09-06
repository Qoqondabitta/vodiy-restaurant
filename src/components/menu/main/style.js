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

    @media only screen and (max-width: 600px) {
      padding-bottom: 20px;
      padding-top: 20px;
    }
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

  @media only screen and (max-width: 1200px){
    height: 560px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 900px;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 800px;
    /* gap: 150px; */
    padding-top: 60px;
    padding-bottom: 0px;
  }

  @media only screen and (max-width: 350px) {
    height: 700px;
  }
`;

export const Left = styled.div`
  gap: 20px;
  width: 50%;
  height: 100%;
  /* z-index: 10; */

  @media only screen and (max-width: 900px) {
    width: 90%;
    padding-left: 40px;
    height: fit-content;
    align-items: flex-start;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    height: fit-content;
    align-items: flex-start;
    gap: 15px;
    padding-left: 20px;
  }
`;

export const Right = styled.div`
  position: relative;
  height: 100%;
  /* z-index: 10; */
  ${({ dir }) => dir}: -30px;

  @media only screen and (max-width: 900px) {
    top: 10px;
    height: 50%;
    justify-content: center;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    top: 10px;
    height: 50%;
    justify-content: center;
    width: 100%;
  }
`;

export const FoodIamge = styled.img`
  width: 450px;
  height: 500px;
  object-fit: cover;
  z-index: 1;
  cursor: pointer;
  object-position: center;
  @media only screen and (max-width: 1200px) {
    width: 425px;
    height: 475px;
  }
  @media only screen and (max-width: 1200px) {
    width: 400px;
    height: 450px;
  }
  @media only screen and (max-width: 600px) {
    width: 300px;
    height: 350px;
  }
  @media only screen and (max-width: 400px) {
    width: 300px;
    height: 350px;
  }
  @media only screen and (max-width: 350px) {
    width: 250px;
    height: 300px;
  }
`;

export const GoldBoxes = styled.div`
  width: 357px;
  height: 357px;
  position: absolute;
  top: ${({ top }) => top};
  right: ${({ right }) => right};
  bottom: ${({ bot }) => bot};
  left: ${({ left }) => left};
  z-index: 0;
  color: transparent;
  background-color: #dcca87;

  @media only screen and (max-width: 1200px) {
    width: 325px;
    height: 325px;
    bot: -100px;
  }

  @media only screen and (max-width: 900px) {
    width: 300px;
    height: 300px;
    left: ${({ left }) => left && "21.5%"};
    right: ${({ right }) => right && "21.5%"};
    top: ${({ top }) => top && "-17%"};
    bottom: ${({ bot }) => bot && "-5%"};
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    height: 250px;
    left: ${({ left }) => left && "11%"};
    right: ${({ right }) => right && "11%"};
    top: ${({ top }) => top && "1%"};
    bottom: ${({ bot }) => bot && "-4%"};
  }
  @media only screen and (max-width: 415px) {
    left: ${({ left }) => left && "9.5%"};
    right: ${({ right }) => right && "9.5%"};
  }
  @media only screen and (max-width: 400px) {
    width: 250px;
    height: 250px;
    left: ${({ left }) => left && "6%"};
    right: ${({ right }) => right && "6%"};
  }
  @media only screen and (max-width: 370px) {
    width: 250px;
    height: 250px;
    left: ${({ left }) => left && "4%"};
    right: ${({ right }) => right && "4%"};
  }
  @media only screen and (max-width: 350px) {
    width: 200px;
    height: 200px;
    bottom: ${({ bot }) => bot && "-5%"};
  }
`;

export const Note = styled.h1`
  font-size: 36px;
  line-height: 35px;
  letter-spacing: 0.04em;
  margin: 0;
  font-weight: 600;
  color: rgb(162, 118, 62);
  font-family: "Cormorant Upright";
  @media only screen and (max-width: 600px) {
    font-size: 30px;
    line-height: 30px;
    width: 100%;
  }
  @media only screen and (max-width: 350px) {
    font-size: 26px;
    line-height: 26px;
    width: 100%;
  }
`;

export const Ingridients = styled.p`
  font-size: 20px;
  color: white;
  text-transform: capitalize;

  text-align: ${({ side }) => side};
  width: 60%;

  @media only screen and (max-width: 900px) {
    text-align: left;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: left;
  }
  @media only screen and (max-width: 400px) {
    font-size: 18px;
    width: 100%;
  }
  @media only screen and (max-width: 350px) {
    font-size: 16px;
    line-height: 18px;
  }
`;

export const Price = styled.p`
  font-size: 40px;
  margin: 0;
  font-weight: 600;
  color: rgb(162, 118, 62);

  @media only screen and (max-width: 350px) {
    font-size: 30px;
    line-height: 30px;
  }
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

  @media only screen and (max-width: 900px) {
    width: 175px;
    height: 175px;
    top: 24%;
    left: 30%;
    transform: rotate(85deg);
  }

  @media only screen and (max-width: 600px) {
    display: none;
    top: 25%;
    left: 65%;
    transform: rotate(140deg);
    width: 150px;
    height: 150px;
  }
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

  @media only screen and (max-width: 900px) {
    top: 30%;
    left: 65%;
  }

  @media only screen and (max-width: 600px) {
    top: 40%;
    left: 5%;
    font-size: 70px;
    line-height: 70px;
  }
`;
