import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink, useNavigate, useLocation } from "react-router-dom";

import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  const [ url, setUrl ] = useState("main");
  const style = {
    display: "inline-block",
    color: "#E26559",
    
  }

  return (
    <>      
      <header>
        {/* <span onClick={() => setUrl("main")} className="cursor-pointer pr-5">MAIN</span> */}
        <span onClick={() => setUrl("aboutme")} className="cursor-pointer pr-5">ABOUT ME</span>
        <span onClick={() => setUrl("projects")} className="cursor-pointer pr-5">PROJECTS</span>
        <span onClick={() => setUrl("skill")} className="cursor-pointer pr-5">SKILL</span>
        <span onClick={() => setUrl("contactme")} className="cursor-pointer">CONTACT ME</span>
      </header>

        {/* {url == "main" && <MainPage />} */}
        {url == "aboutme" && <AboutMePage />}
        {url == "projects" && <ProjectsPage />}
        {url == "skill" && <SkillPage />}
        {url == "contactme" && <ContactMePage />}
      <div style={style} className="select-none flex items-center">
        <h2>WELLCOME TO MY PORTFOLIO</h2> 
      </div>
    </>
  );
}

export default App;