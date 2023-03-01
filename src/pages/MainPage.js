import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import "../style/MainPage.css";

export default function MainPage() {
  const completeText ="안녕하세요. 꾸준하게 성장하는 프론트엔드 개발자 김보람입니다.";
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + completeText[count]);
      setCount(count + 1);
    }, 100);

    if (count === completeText.length) { //count가 completeText길이와 같아지면 claerInterval.
      clearInterval(interval);
    } 
    return() => clearInterval(interval)
  })

  const buttonStyle = {
    color: "#FCFFE6",
    size: "35px",
    marginTop: "80px",
    alignItems: "center",
  }

    return (
      <>
       <div className="mainPage">
        <Container className="text-center">
         <h2 className="mainTitle">WELLCOME TO MY PORTFOLIO</h2> 
         <h3>{text}</h3>
         <Link to="/aboutme">
          <button style={buttonStyle}>START</button>
         </Link>
        </Container>
       </div>
      </>
    );
   }


