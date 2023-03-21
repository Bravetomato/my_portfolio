

export default function SkillPage() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto text-center lg:px-40">
         <div className="flex flex-col w-full mb-20"> 
          <h1 className="sm:text-4xl text-3xl font-medium title-font mt-4 mb-4 text-slate-400">
          SKILLS
          </h1>
          <i className="fa-solid fa-gears"></i>
          <span className="lg:w-2/3 mx-auto leading-relaxed text-base">
            HTML, CSS를 사용해 원하는 사이트의 틀을 구현할 수 있으며, 
            <br/>
            JAVA SCRIPT를 통해 사이트의 동적 움직임을 만들 수 있습니다. 
            <br />
            또한 REACT의 State 기능을 이해하고 있으며, 반응형 웹을 제작하는 것이 가능합니다.
            <br />
            이외에도 MUI, Tailwind를 다룰 수 있습니다. 
          <div className="grid grid-cols-2 gap-2 mt-10 p-10">
            <i className="fa-brands fa-html5 fa-5x"></i>
            <i className="fa-brands fa-css3-alt fa-5x"></i>
            <i className="fa-brands fa-square-js fa-5x"></i>
            <i className="fa-brands fa-react fa-5x"></i>
            </div>
          </span>
         </div>
        </div>
      </section>
    );
   }


