import React from "react";
import { Columns, Container, Headline, Links, Main, Tel, Texts } from "./style";
import spoon from "../../assets/images/objects/spoon.png";
import { Spoon } from "../reservation/style";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <Main className="column-center">
      <Container className="center">
        <Columns className="column-center">
          <Headline>Contact Us</Headline>
          <Texts>Aleja Krakowska 115, 02-945</Texts>
          <Tel className="column-center">
            <Texts>
              <Links href="tel:+48 502-400-608">+48 502-400-608</Links>
            </Texts>
            <Texts>
              <Links href="tel:+48 567-412-327">+48 567-412-327</Links>
            </Texts>
          </Tel>
        </Columns>
        <Columns className="column-center">
          <Headline big="true">VODIY</Headline>
          <Texts quote="true">
            "The best way to find yourself is to lose yourself in the service of
            others.”
          </Texts>
          <Spoon src={spoon} />
          <Tel className="center">
            <FaTelegramPlane color="white" size="1.5rem" />
            <FaXTwitter color="white" size="1.5rem" />
            <FaInstagram color="white" size="1.5rem" />
          </Tel>
        </Columns>
        <Columns className="column-center">
          <Headline>Working Hours</Headline>
          <Tel className="column-center">
            <Texts>Monday-Friday:</Texts>
            <Texts>09:00 am - 12:00 pm</Texts>
          </Tel>
          <Tel className="column-center">
            <Texts>Saturday-Sunday:</Texts>
            <Texts>09:00 am - 02:00 am</Texts>
          </Tel>
        </Columns>
      </Container>
    </Main>
  );
};

export default Footer;
