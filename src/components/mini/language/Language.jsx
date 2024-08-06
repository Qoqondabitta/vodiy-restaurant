import React, { useState } from "react";
import { Container, LanguagTabs } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { language } from "../../../constants/componentconstants/language";
import { changeLanguage } from "../../../redux/language";
import { IoIosArrowDown } from "react-icons/io";

const Language = () => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  const [show, setShow] = useState(false);
  const changeShwo = () => {
    setShow(!show);
  };
  return (
    <Container>
      {show ? (
        <Container className="column-center">
          {language.map((v, i) => (
            <LanguagTabs
              key={i}
              href="#main"
              list="true"
              onClick={() => {
                dispatch(changeLanguage(v.tag));
                setShow(!show);
              }}
            >
              {l == "eng" ? v.l[0] : l == "pol" ? v.l[1] : v.l[2]}
            </LanguagTabs>
          ))}
        </Container>
      ) : (
        <LanguagTabs className="just-between" onClick={changeShwo}>
          {l == "eng" ? "English" : l == "pol" ? "Polski" : "Русский"}
          <IoIosArrowDown size="1.4rem" color="white" />
        </LanguagTabs>
      )}
    </Container>
  );
};

export default Language;
