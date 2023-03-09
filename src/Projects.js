import img2 from "./img/Kakaobank.jpg";
import img3 from "./img/TodoList.jpg";
import img4 from "./img/Portfolio.jpg";
// 각 project 내용를 객체로 만들어 배열로 만들어 Projects로 선언.

export const Projects = [
  {
    title: "카카오뱅크 모작",
    skills: "HTML, CSS, JAVA SCRIPT",
    description: "카카오뱅크 웹페이지 모작. HTML, CSS, JAVA SCRIPT, JQuery 사용.",
    image: <img className="wd-380" src={img2} alt ="" />,
    link: "https://codepen.io/bravetomato-the-looper/pen/jOpbLaZ?editors=1010",
  },
  {
    title: "TodoList",
    skills: "HTML, CSS, REACT",
    description: "할일을 적는 사이트. HTML, CSS, REACT 사용. 특히 REACT의 State를 적극 활용.",
    image: <img className="project2" src={img3} alt ="" />,
    link: "https://bravetomato.github.io/project_TodoList/",
  },
  {
    title: "Portfolio",
    skills: "HTML, CSS, REACT",
    description: "포트폴리오 사이트. HTML, CSS, REACT 사용.",
    image: <img className="project3" src={img4} alt ="" />,
    link: "",
  },
  {
    title: "Portfolio",
    skills: "HTML, CSS, REACT",
    description: "포트폴리오 사이트. HTML, CSS, REACT 사용.",
    image: <img className="project4" src={img4} alt =""/>,
    link: "",
  },
];