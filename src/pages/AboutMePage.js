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
            <p className="text-red-500 font-bold">"Slow but, Steady"</p>
            토끼와의 달리기에서 이겼던 거북이처럼<br/>
            빠르진 않아도, 한걸음씩 꾸준하게 걸어가는 태도를 가졌습니다.<br/>
            <p className="text-red-500 font-bold">"헛된 노력도 버려지는 경험도 없다"</p>
            비전공자이고, 개발 경력을 가지고 있지 않지만<br/>   
            개발을 알지 못하는 사용자들이 겪게 되는 문제를 해결하는데<br/> 도움이 될 것입니다.<br/>
            <p className="text-red-500 font-bold">"모르는 것을 두려워하지 않는 개발자"</p>  
            모르는 문제가 나왔을 때 부끄러워 하기보다는<br/>
            질문을 통해 해결하는 것이 더 중요하다고 생각합니다.<br/>
            이런 자세를 통해 성장하는 개발자가 되도록 노력하겠습니다.          
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


