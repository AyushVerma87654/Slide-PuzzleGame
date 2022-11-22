import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import MainPage from "./MainPage";
import NavBar from "./NavBar";
import Puzzle3 from "./Puzzle3";
import Puzzle4 from "./Puzzle4";
import Puzzle5 from "./Puzzle5";
import Puzzle6 from "./Puzzle6";
import Puzzle7 from "./Puzzle7";
import Puzzle8 from "./Puzzle8";
import Puzzle9 from "./Puzzle9";
import Puzzle10 from "./Puzzle10";
import Puzzle11 from "./Puzzle11";
import Puzzle12 from "./Puzzle12";

const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="grow">
        <Routes>
          <Route index element={<MainPage />} />
          <Route path="/puzzle3" element={<Puzzle3 />} />
          <Route path="/puzzle4" element={<Puzzle4 />} />
          <Route path="/puzzle5" element={<Puzzle5 />} />
          <Route path="/puzzle6" element={<Puzzle6 />} />
          <Route path="/puzzle7" element={<Puzzle7 />} />
          <Route path="/puzzle8" element={<Puzzle8 />} />
          <Route path="/puzzle9" element={<Puzzle9 />} />
          <Route path="/puzzle10" element={<Puzzle10 />} />
          <Route path="/puzzle11" element={<Puzzle11 />} />
          <Route path="/puzzle12" element={<Puzzle12 />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
