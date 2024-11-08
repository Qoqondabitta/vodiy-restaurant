import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./minilang.css";
import { languages } from "../../../constants/componentconstants/language";
import { changeLanguage } from "../../../redux/language";
import { IoIosArrowDown } from "react-icons/io";
import rus from "../../../assets/images/objects/russia.png";
import usam from "../../../assets/images/objects/usa.webp";
import uzb from "../../../assets/images/objects/uzbekistan.png";

const MiniLanguage = () => {
  const dispatch = useDispatch();
  const l = useSelector((store) => store.language.value);
  const [show, setShow] = useState(false);
  return (
    <div className="container show">
      {show ? (
        <div className="container column-center">
          {languages.map((v, i) => (
            <div
              key={i}
              id={v.t == l && "active-language-tab"}
              className="mini-language-tabs just-between"
              onClick={() => {
                dispatch(changeLanguage(v.t));
                setShow(!show);
              }}
            >
              {v.l} <img className="flag" src={v.f} />
            </div>
          ))}
        </div>
      ) : (
        <div
          className="styled-tab just-between show"
          onClick={() => setShow(!show)}
        >
          <div className="center flag-wrap">
            {l == "eng" ? "English" : l == "pol" ? "Polski" : "Ruski"}
            {
              <img
                className="flag"
                src={l == "eng" ? usam : l == "pol" ? uzb : rus}
              />
            }
          </div>
          <IoIosArrowDown
            style={{ marginTop: "3px" }}
            color="white"
            size="20px"
          />
        </div>
      )}
    </div>
  );
};

export default MiniLanguage;
