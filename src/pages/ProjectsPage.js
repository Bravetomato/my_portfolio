import img2 from "../img/Kakaobank.jpg";
import img3 from "../img/TodoList.jpg";
import img4 from "../img/Portfolio.jpg";

export default function ProjectsPage() {
    return (
    <section id="projects">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20"> 
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 mb-4 text-slate-400">
          PROJECTS
          </h1>
          <i className="fa-regular fa-folder-open"></i>
          <span className="lg:w-2/3 mx-auto leading-relaxed text-base">
            HTML, CSS를 기본으로 사용하였으며, 
            <br/>
            JavaScript와 React를 이용해 동적 부분을 구현하였습니다. 
            <br/>
            그 외에도 Tailwind, MUI 등을 함께 사용했습니다.
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 place-content-center-m-4">
           <a href="https://codepen.io/bravetomato-the-looper/pen/jOpbLaZ?editors=1010" target="_blank" rel="noopner noreferrer">
           <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-cover object-center rounded" src={img2}/>
            <div className="px-8 py-10 relative z-10 w-full bg-gray-300 opacity-0 hover:opacity-100 rounded">
              <h1 className="title-font text-lg font-medium text-white mb-3">카카오뱅크</h1>
              <h2 className="tracking-widest text-m titlefont font-medium text-indigo-400 mb-1">HTML, CSS, JavaScript, JQuery</h2>
              <span className="leading-relaxed">카카오뱅크 웹페이지 모작</span>
            </div>
          </div>
          </a>
          <a href="https://bravetomato.github.io/project_TodoList/" target="_blank" rel="noopner noreferrer">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-cover object-center rounded" src={img3}/>
            <div className="px-8 py-10 relative z-10 w-full bg-gray-300 opacity-0 hover:opacity-100 rounded">
              <h1 className="title-font text-lg font-medium text-white mb-3">TodoList</h1>
              <h2 className="tracking-widest text-m titlefont font-medium text-indigo-400 mb-1">HTML, CSS, React</h2>
              <span className="leading-relaxed">웹에서 사용하는 To Do List</span>
            </div>
          </div>
          </a>
          <a href="https://bravetomato.github.io/portfolio/" target="_blank" rel="noopner noreferrer">
          <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-cover object-center rounded" src={img4}/>
            <div className="px-8 py-10 relative z-10 w-full bg-gray-300 opacity-0 hover:opacity-100 rounded">
              <h1 className="title-font text-lg font-medium text-white mb-3">Portfolio</h1>
              <h2 className="tracking-widest text-m titlefont font-medium text-indigo-400 mb-1">HTML, CSS, React</h2>
              <span className="leading-relaxed">포트폴리오 사이트</span>
            </div>
          </div>
          </a>
        </div>  
      </div>
    </section> 
    );
   }


