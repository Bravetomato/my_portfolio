import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

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
        <h3>{text}</h3>
        <Link to="/aboutme">
        <button style={nextButtonStyle}>START</button>
        </Link>
        </Container>
       </div>
      </>
    );
   }


