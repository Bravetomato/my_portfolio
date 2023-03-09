import img1 from "../img/development.png";

export default function AboutMePage() {
    const openNewPage = (url) => {
      window.open(url, "_blank", "noopener, noreferrer");
    };

    return (
      <section id="aboutme">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
         <div className="lg:flex-glow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
         md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-400">
            ABOUT ME
            <br className="hidden lg:inline-block" />
          </h1>
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="mb-8 leading-relaxed">
            "Slow but, Steady"
             토끼와 거북이 이야기에서 달리기 경주의 승자는 거북이였습니다. 
             거북이는 느리지만 꾸준하게 자신의 길을 걸어갔기 때문에 승리할 수 있었습니다. 
             저는 비록 토끼처럼 빠르지 않지만, 멈추지 않고 자신의 페이스를 유지하는 
             거북이 같은 개발자가 되고 싶습니다. 
          </span>
         <br />
          <div className="flex justify-center">
           <button onClick={() => openNewPage("")} style={{color:"#195190"}} className="ml-4 py-2 px-6 bg-slate-400 border-0 hover:bg-sky-200 rounded text-lg">
            RESUME</button>
          </div> 
         </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={img1} className="object-cover object-center rounded" />
          </div>
        </div> 
      </section> 
    );
 }


