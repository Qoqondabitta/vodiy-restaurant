import React from "react";
import { Container, Meal, TextWrapper } from "./style";
import { useSelector } from "react-redux";
import "./text.css";
import { meal } from "../../../constants/componentconstants/about";

const TextSlider = () => {
  const l = useSelector((store) => store.language.value);
  return (
    <Container>
      <TextWrapper className="just-start textSlider">
        {meal.map((v, i) => (
          <Meal key={i}>
            {l == "eng" ? v.m[0] : l == "pol" ? v.m[1] : v.m[2]}
          </Meal>
        ))}
      </TextWrapper>
    </Container>
  );
};

export default TextSlider;
