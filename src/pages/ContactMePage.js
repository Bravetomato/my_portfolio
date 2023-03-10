import img5 from "../img/contactme.jpg";

export default function ContactMePage() {
 
    return (
      <>
      <section id="contact">
        <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
         <div className="lg:flex-glow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start 
         md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-400">
           CONTACT ME
            <br className="hidden lg:inline-block" />
          </h1>
          <i className="fa-solid fa-user"></i>
          <span className="mb-8 leading-relaxed">
          </span>/
         <br />
          <div className="flex justify-center">
           <a href="mailto:princeps2nd@gmail.com"><i className="fa-solid fa-envelope fa-2x px-4"></i></a>
           <a href="https://github.com/Bravetomato">
           <i className="fa-brands fa-github fa-2x pr-4"></i></a>
           <a href="https://blog.naver.com/princeps1c">
           <i className="fa-solid fa-blog fa-2x pr-4"></i></a> 
          </div> 
         </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img src={img5} className="object-cover object-center rounded" />
          </div>
        </div> 
      </section> 
      </>
    );
  }


