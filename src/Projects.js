import img2 from "./img/Kakaobank.jpg";
import img3 from "./img/TodoList.jpg";
import img4 from "./img/Portfolio.jpg";
// 각 project 내용를 객체로 만들어 배열로 만들어 Projects로 선언.

export const Projects = [
  {
    title: "카카오뱅크 모작",
    skills: "HTML, CSS, JAVA SCRIPT",
    description: "카카오뱅크 웹페이지를 모작한 것으로, HTML, CSS, JAVA SCRIPT를 사용하였으며, JQuery를 이용해 슬릭슬라이더 등의 기능을 구현하였습니다.",
    image: "<img src={img2} />",
    link: "https://codepen.io/bravetomato-the-looper/pen/jOpbLaZ?editors=1010",
  },
  {
    title: "TodoList",
    skills: "HTML, CSS, REACT",
    description: "할일을 적는 것 뿐만 아니라 완료, 미완료를 구분할 수 있으며, 할일의 급한 정도로 나눌 수 있는 기능이 있습니다. HTML, CSS, REACT를 사용하였으며 특히 REACT의 State를 적극 활용하였습니다.",
    image: <img src={img3} />,
    link: "https://bravetomato.github.io/project_TodoList/",
  },
  {
    title: "Portfolio",
    skills: "HTML, CSS, REACT",
    description: "HTML, CSS, REACT를 사용해 만든 포트폴리오 사이트입니다.",
    image: <img src={img4} />,
    link: "",
  },
];