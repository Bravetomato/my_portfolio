import { NavLink } from "react-router-dom";
import "./style/Header.css";
import logo from "./img/favicon.png";

export default function Header() {
  return(
   <>
    <div className="header_wrap">
      <div className="logo_wrap">
        <NavLink to="/main"><img src={logo} alt=""/></NavLink>
      </div>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/skill">SKILL</NavLink>
        <NavLink to="/contactme">CONTACT ME</NavLink>
      <div className="manu_wrap bg-blue-500">
        <span>abc</span>
      </div>
    </div>
   </>
  );
}