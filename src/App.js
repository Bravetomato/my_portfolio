import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink, useNavigate, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  const location = useLocation();

  return (
    <> 
      <topBar className="topBarStyle">
       <div className="topBarText">
        <NavLink to="/main" className="cursor-pointer pl-3 pr-5">MAIN</NavLink>
        <NavLink to="/aboutme" className="cursor-pointer pr-5">ABOUT ME</NavLink>
        <NavLink to="/projects" className="cursor-pointer pr-5">PROJECTS</NavLink>
        <NavLink to="/skill" className="cursor-pointer pr-5">SKILL</NavLink>
        <NavLink to="/contactme" className="cursor-pointer">CONTACT ME</NavLink>
       </div>
      </topBar>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/aboutme" element={<AboutMePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/skill" element={<SkillPage />} />
        <Route path="/contactme" element={<ContactMePage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;