import React from "react";
import map from "../../assets/images/backgrounds/map.png";
import { Container, Linker, Main, Map, MapImg, Title } from "./style";
import { useSelector } from "react-redux";

const Address = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Main id="address" className="center">
      <Container className="column-center">
        <Title>
          {l == "eng"
            ? "Just Click Map And Find Us"
            : l == "pol"
            ? "Po prostu kliknij Mapa i znajdź nas"
            : "Просто нажмите на карту и найдите нас"}
        </Title>
        <Linker href="https://www.google.com/maps/place/Aleja+Krakowska+139,+02-180+Warszawa/@52.1637579,20.8878848,12.45z/data=!4m6!3m5!1s0x4719336652c2679d:0xe7b82c6f2c3e27c2!8m2!3d52.179978!4d20.9471963!16s%2Fg%2F11csn9y828?entry=ttu">
          <MapImg src={map} />
        </Linker>
      </Container>
    </Main>
  );
};

export default Address;
