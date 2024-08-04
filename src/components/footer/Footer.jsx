import React from "react";
import { Columns, Container, Headline, Links, Main, Tel, Texts } from "./style";
import spoon from "../../assets/images/objects/spoon.png";
import { Spoon } from "../reservation/style";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { useSelector } from "react-redux";
import { c, h, m, q, s } from "../../constants/componentconstants/footer";

const Footer = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="footer" className="column-center">
      <Container className="center">
        <Columns className="column-center">
          <Headline>{l == "eng" ? c[0] : l == "pol" ? c[1] : c[2]}</Headline>
          <Tel className="column-center">
            <Texts>Aleja Krakowska 139, 02-180</Texts>
            <Texts>Warszawa</Texts>
          </Tel>
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
            {l == "eng" ? q[0] : l == "pol" ? q[1] : q[2]}
          </Texts>
          <Spoon src={spoon} />
          <Tel className="center">
            <FaTelegramPlane color="white" size="1.5rem" />
            <FaXTwitter color="white" size="1.5rem" />
            <FaInstagram color="white" size="1.5rem" />
          </Tel>
        </Columns>
        <Columns className="column-center">
          <Headline> {l == "eng" ? h[0] : l == "pol" ? h[1] : h[2]}</Headline>
          <Tel className="column-center">
            <Texts>{l == "eng" ? m[0] : l == "pol" ? m[1] : m[2]}</Texts>
            <Texts>09:00 am - 12:00 pm</Texts>
          </Tel>
          <Tel className="column-center">
            <Texts>{l == "eng" ? s[0] : l == "pol" ? s[1] : s[2]}</Texts>
            <Texts>09:00 am - 02:00 am</Texts>
          </Tel>
        </Columns>
      </Container>
    </Main>
  );
};

export default Footer;
