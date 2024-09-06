import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Menu from "../pages/Menu";

const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<Menu />} />
        <Route path="/home" element={<Menu />} />
        <Route path="/menu" exact element={<Menu />} />
      </Routes>
    </div>
  );
};

export default Root;
