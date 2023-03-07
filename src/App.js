import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink, useLocation } from "react-router-dom";

import Header from "./Header";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
 

  return (
    <> 
      <MainPage />
      <Header />
      <AboutMePage />
      <ProjectsPage />
      <SkillPage />
      <ContactMePage />
    </>
  );
}

export default App;