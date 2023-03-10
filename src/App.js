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
    <Header/>
    <MainPage/>
    <AboutMePage/>
    <ProjectsPage/>
    <SkillPage/>
    <ContactMePage/>

    <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/contactme" element={<ContactMePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes> 
    </>
  );
}

export default App;