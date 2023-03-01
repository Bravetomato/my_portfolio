import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function MainPage() {
  
  const mainStyle = {
    color: "#FCFFE6",
    fontSize: "61px",
    alignItems: "center",
    justifyContent: "center",
  }
  const nextButtonStyle = {
    color: "#FCFFE6",
    fontSize: "35px",
    marginTop: "80px",
  }

 
    return (
      <>
       <div className="MainPage">
        <Container className="text-center">
        <h2 type="text" style={mainStyle} className="p-20">WELLCOME TO MY PORTFOLIO</h2> 
        <Link to="/aboutme">
        <button style={nextButtonStyle}>START</button>
        </Link>
        </Container>
       </div>
      </>
    );
   }


