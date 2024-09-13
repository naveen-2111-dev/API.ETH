import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {SubNavbar,Navbar} from "./components";
import Hero from "./pages/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <SubNavbar />
      <Hero/>
      <BrowserRouter>
        <Routes>
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
