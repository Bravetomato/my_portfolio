import { fontSize } from "@mui/system";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/MainPage.css";

export default function MainPage() {
  const completeText ="My World is what I'm think about it.";
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + completeText[count]);
      setCount(count + 1);
    }, 100);

    if (count === completeText.length) { //count가 completeText길이와 같아지면 claerInterval.
      clearInterval(interval);
    } ;
    return() => clearInterval(interval);
  });

  const buttonStyle = {
    color: "white",
    size: "35px",
    marginTop: "80px",
    alignItems: "center",
  };

  const navigate = useNavigate();

    return (
      <>
       <div id="main" className="mainpage">
        <div className="text-center">
         <h2 className="mainTitle" style={{ fontFamily: "Roboto Mono"}}>WELLCOME TO MY PORTFOLIO</h2> 
         <h3 className="text" style={{ fontFamily: "Nanum Myeongjo"}}>{text}</h3>
         <a href="#aboutme">
          <button style={buttonStyle} className="ml-4 py-2 px-6 border-2 hover:border-sky-200 rounded text-lg">START</button>
         </a>
        </div>
       </div>
      </>
    );
   }


