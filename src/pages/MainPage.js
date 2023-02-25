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
    flexdirection: "column",
  }
    return (
      <>
       <div className="MainPage">
        <h2 type="text" style={mainStyle} className="p-20">WELLCOME TO MY PORTFOLIO</h2> 
        <Link to="/aboutme">
        <button style={nextButtonStyle} className="flex flex-col p-20">START</button>
        </Link>
       </div>
      </>
    );
   }


