import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function MainPage() {
  const mainStyle = {
    color: "#E26559",
    fontSize: "61px",
    alignItems: "center",
    justifyContent: "center",
  }
  const nextButtonStyle = {
    color: "#2B7799",
    fontSize: "35px",
    position:"absolute",
  }
    return (
      <>
        <h2 type="text" style={mainStyle} className="p-20">WELLCOME TO MY PORTFOLIO</h2> 
        <Link to="/aboutme">
        <Button variant="outlined" style={nextButtonStyle} className="p-20 ">START</Button>
        </Link>
      </>
    );
   }


