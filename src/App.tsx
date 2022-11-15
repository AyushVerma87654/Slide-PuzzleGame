import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Puzzle from "./Puzzle";
import Puzzle2 from "./Puzzle2";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="/puzzle" element={<Puzzle />} />
        <Route path="/puzzle2" element={<Puzzle2 />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
