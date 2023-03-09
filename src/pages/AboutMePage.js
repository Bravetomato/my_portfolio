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
            About Me
            <br className="hidden lg:inline-block" />
          </h1>
          <i className="fa-solid fa-magnifying-glass"></i>
          <span className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Quilaborum quasi, 
            incidunt dolore iste n
            ostrum cupiditate voluptas?
            Laborum, voluptas natus
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Quilaborum quasi, 
            incidunt dolore iste n
            ostrum cupiditate voluptas?
            Laborum, voluptas natus
          </span>
         <br />
          <div className="flex justify-center">
           <button onClick={() => openNewPage("")} style={{color:"#195190"}} className="ml-4 py-2 px-6 bg-gray-300 border-0 hover:bg-white rounded text-lg">
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


