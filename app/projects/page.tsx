import ProjectCard from "../../components/project-card";
import { PROJECTS } from "../../data/constants";
export default function Project() {
  return (
    <div className="text-2xl flex flex-col items-left justify-center h-screen gap-4 ml-16 w-2/3">
      <div className="flex flex-col justify-center mb-4">
        <div className="text-6xl mb-1">My Projects</div>
        <div className="text-2xl opacity-50">
          The debacles that I create when an idea hits me
        </div>
      </div>
      <div className="flex flex-wrap gap-4 overflow-auto">
        {
          PROJECTS.map((project,index) => {
            return(
              <ProjectCard 
              key={index}
              title={project.title}
              deployLink={project.deployLink}
              githubLink={project.githubLink}
              description={project.description}
              tags={project.tags} />
            )
          })
        }
      </div>
    </div>
  );
}
