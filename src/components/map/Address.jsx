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
        <Linker href="https://www.google.com/maps/dir/?api=1&destination=Aleja+Krakowska+139%2C+02-180+Warsaw%2C+Poland">
          <MapImg src={map} />
        </Linker>
      </Container>
    </Main>
  );
};

export default Address;
