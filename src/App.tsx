import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Puzzle3 from "./Puzzle3";
import Puzzle4 from "./Puzzle4";
import Puzzle5 from "./Puzzle5";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/puzzle3" element={<Puzzle3 />} />
        <Route path="/puzzle4" element={<Puzzle4 />} />
        <Route path="/puzzle5" element={<Puzzle5 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
