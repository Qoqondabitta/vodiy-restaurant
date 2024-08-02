import React from "react";
import { Container, InputWrappers, Main, Spoon } from "./style";
import "./reservation.css";
import { Button, Title } from "../about/style";
import spoon from "../../assets/images/objects/spoon.png";
import { Title as MainTitle } from "../history/style";

const Reservation = () => {
  return (
    <Main className="center">
      <Container className="col-just-start">
        <Title style={{ textAlign: "center" }}>Reservations</Title>
        <Spoon src={spoon} />
        <MainTitle>Book A Table</MainTitle>
        <InputWrappers className="center">
          <input
            className="reservation-input"
            type="number"
            placeholder="Number Of Guests"
          />
          <input
            className="reservation-input"
            type="text"
            placeholder="Date MM/DD/YY"
          />
          <input
            className="reservation-input"
            type="text"
            placeholder="Name of Reserver"
          />
              </InputWrappers>
              <Button>Book Now</Button>
      </Container>
    </Main>
  );
};

export default Reservation;
