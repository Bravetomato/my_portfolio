import { Projects } from "../Projects";

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
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </span>
        </div>
        <div className="flex flex-wrap -m-4">{Projects.map((project) => (
          <a 
          href={project.link}
          key={project.image}
          className="sm:w-1/2 w-100 p-4">
           <div className="flex relative">
            <img className="absolute inset-0 w-full h-full object-cover object-center" src={project.image}/> 
            <div className="px-8 py-10 relative z-10 w-full bg-gray-300 opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-m titlefont font-medium text-purple-400 mb-1">{project.skills}</h2>
              <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
              <span className="leading-relaxed">{project.description}</span>
            </div>
          </div>
         </a>  
        ))}
        </div>         
        
      </div>
    </section> 
    );
   }


