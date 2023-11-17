import { Box } from "@mui/material";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Example from "./components/Example";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from "./components/dashboard/DashBoard";
import "./index.css";
import Footer from "./components/Footer";
import Connect from "./components/Connect/Connect";
import Market from "./components/Market/Market";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        {<Header />}
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/signup" Component={Login} />
          <Route path="/register" Component={Register} />
          <Route path="/dashboard" Component={DashBoard} />
          <Route path="/connect" Component={Connect} />
          <Route path="/market" Component={Market} />
        </Routes>
        {<Footer />}
      </BrowserRouter>
    </div>
  );
};

export default App;
