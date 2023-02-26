import { Link } from "react-router-dom";

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
  }

 
    return (
      <>
       <div className="MainPage">
        <div className="text-center container">
        <h2 type="text" style={mainStyle} className="p-20">WELLCOME TO MY PORTFOLIO</h2> 
        <Link to="/aboutme">
        <button style={nextButtonStyle}>START</button>
        </Link>
        </div>
       </div>
      </>
    );
   }


