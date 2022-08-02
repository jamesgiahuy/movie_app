import React from "react";
import Homepage from "../../containers/Home";
import Welcome from "./Welcome/Welcome";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Welcome />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </main>
  );
};

export default Main;
