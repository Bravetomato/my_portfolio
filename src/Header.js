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
    <div className="header_wrap text-black" style={{ fontFamily: "Marcellus"}}>
      <div className="logo_wrap flex flex-wrap">
        <a href="#main" className="text-3xl font-bold pr-20 mb-4 md:mb-0 text-black hover:text-sky-200">R</a>
      </div>
      <nav className="flex flex-wrap items-center justify-center">
        <a href="#aboutme" className="mr-5 hover:text-sky-200">ABOUT ME</a>
        <a href="#projects" className="mr-5 hover:text-sky-200">PROJECTS</a>
        <a href="#skills" className="mr-5 hover:text-sky-200">SKILLS</a>
        <a href="#contactme" className="mr-5 hover:text-sky-200">CONTACT ME</a>
        {/*<NavLink to="/main" className="text-4xl font-bold pr-20 mb-4 md:mb-0 text-black hover:text-sky-200">R</NavLink>*/}
        {/* <NavLink to="/aboutme" className="mr-5 hover:text-sky-200">ABOUT ME</NavLink>
        <NavLink to="/projects" className="mr-5 hover:text-sky-200">PROJECTS</NavLink>
        <NavLink to="/skills" className="mr-5 hover:text-sky-200">SKILLS</NavLink>
        <NavLink to="/contactme" className="mr-5 hover:text-sky-200">CONTACT ME</NavLink> */}
      </nav>   
    </div>
   </>
  );
}