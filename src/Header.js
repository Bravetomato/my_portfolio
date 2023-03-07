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
        <NavLink to="/main"><img src={logo} alt=""/></NavLink>
      </div>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/skill">SKILL</NavLink>
        <NavLink to="/contactme">CONTACT ME</NavLink>
    </div>
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