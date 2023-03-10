

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          <div className="flex justify-center mt-10">
            <i className="fa-brands fa-html5 fa-5x pr-10"></i>
            <i class="fa-brands fa-css3-alt fa-5x pr-10"></i>
            <i className="fa-brands fa-square-js fa-5x pr-10"></i>
            <i className="fa-brands fa-react fa-5x"></i>
            {/* <i className="fa-brands fa-npm fa-3x"></i>
            <i className="fa-brands fa-github fa-3x"></i> */}
            </div>
          </span>
         </div>
        </div>
      </section>
    );
   }


