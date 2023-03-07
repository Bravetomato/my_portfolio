import { Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import ContactMePage from "./pages/ContactMePage";
import "./style/Header.css";
import logo from "./img/favicon.png";

export default function Header() {
  const navigate = useNavigate();

  return(
   <>
    <div className="header_wrap text-gray-400">
      <div className="logo_wrap">
        <a href="/main"><img src={logo} alt=""/></a>
        {/* <NavLink to="/main"><img src={logo} alt=""/></NavLink> */}
      </div>
        <a href="#/aboutme">ABOUT ME</a>
        <a href="#/projects">PROJECTS</a>
        <a href="#/skills">SKILLS</a>
        <a href="#/contactme">CONTACT ME</a>
        {/* <NavLink to="/aboutme">ABOUTME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/skills">SKILLS</NavLink>
        <NavLink to="/contactme">CONTACT ME</NavLink> */}
    </div>
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