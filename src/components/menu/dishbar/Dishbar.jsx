import React from "react";
import { Container } from "./style";
import { dishbar } from "../../../constants/componentconstants/menuNavbar";
import { Item } from "../menubar/style";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../../../redux/title";
import "../menubar/menuBar.css"

const Dishbar = () => {
  const dispatch = useDispatch();
  const title = useSelector((store) => store.title.value);
  const language = useSelector((store) => store.language.value);
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
  };
  return (
    <Container className="center">
      {dishbar.map((v, i) => (
        <Item id={`${v.tag==title&&"Product"}`} key={i} onClick={() => changeTag(v?.tag)}>
          {language === "eng"
            ? v.title[0]
            : language === "pol"
            ? v.title[1]
            : v.title[2]}
        </Item>
      ))}
    </Container>
  );
};

export default Dishbar;
