import { NavLink } from "react-router-dom";
import "./style/Header.css";

export default function Header() {
  return(
   <>
    <div className="header_wrap">
      <div className="logo_wrap bg-red-500">
        <NavLink to="/main">R\</NavLink>
      </div>
        <NavLink to="/aboutme">ABOUT ME</NavLink>
        <NavLink to="/projects">PROJECTS</NavLink>
        <NavLink to="/skill">SKILL</NavLink>
        <NavLink to="/contactme">CONTACT ME</NavLink>

      <div className="manu_wrap bg-blue-500">
        <div className="header_line_1" />
        <div className="header_line_2" />
      </div>
    </div>
   </>
  );
}