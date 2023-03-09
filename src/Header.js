import { Routes, Route, NavLink, useLocation, useNavigate } from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutMePage from "./pages/AboutMePage";
import ProjectsPage from "./pages/ProjectsPage";
import SkillPage from "./pages/SkillPage";
import ContactMePage from "./pages/ContactMePage";
import "./style/Header.css";

export default function Header() {
  const navigate = useNavigate();

  return(
   <>
    <div className="header_wrap text-slate-400">
      <div className="logo_wrap">
        <a href="/main" className="text-5xl font-bold text-black hover:text-sky-200">R</a>
        {/* <NavLink to="/main">R</NavLink> */}
      </div>
        <a href="#/aboutme" className=" hover:text-sky-200">ABOUT ME</a>
        <a href="#/projects" className=" hover:text-sky-200">PROJECTS</a>
        <a href="#/skills" className=" hover:text-sky-200">SKILLS</a>
        <a href="#/contactme" className=" hover:text-sky-200">CONTACT ME</a>
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