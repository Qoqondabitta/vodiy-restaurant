import React from "react";
import { MiniList as Container, GoldenLine, MiniItem } from "../../menu/menubar/style";
import { dishbar } from "../../../constants/componentconstants/menuNavbar";
import { useDispatch, useSelector } from "react-redux";
import { changeTitle } from "../../../redux/title";
import "./minilist.css";
import goldenline from "../../../assets/images/objects/goldenLine.webp"

const SecondList = () => {
    const dispatch = useDispatch();
    const text = useSelector(store=>store.title.value)
  const l = useSelector((store) => store.language.value);
  const changeTag = (tag) => {
    dispatch(changeTitle(tag));
  };
  return (
    <Container width="80px" className="center">
      {dishbar.map((v, i) => (
        <MiniItem
          id={text == v.tag && "miniitemactive"}
          col="true"
          key={i}
          onClick={() => changeTag(v.tag)}
        >
          {l == "eng" ? v.title[0] : l == "pol" ? v.title[1] : v.title[2]}
        </MiniItem>
      ))}
          <GoldenLine src={goldenline} />
    </Container>
  );
};

export default SecondList;
