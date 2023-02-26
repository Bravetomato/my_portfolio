import { useState, useEffect } from "react";

 const TypingText = () => {
    const txt = "안녕하세요. 프론트엔드 개발자 김보람입니다.";
    const [text, setText] = useState("");
    const [count, setCount] = useState(0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setText(text + txt[count]); //이전 set한 문자 + 다음 문자
      setCount(count + 1); // 개수 만큼 체크
    }, 100);
    if(count === txt.length) { //만약 txt길이가 개수와 일치하면
      clearInterval(interval); // setInterval 해제
    }
    return () => clearInterval(interval); //unmount 시 setInterval 해제
  })

  export default TypingText;



