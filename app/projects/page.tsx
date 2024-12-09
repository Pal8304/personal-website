import ProjectCard from "../../components/project-card";
import { PROJECTS } from "../../data/constants";
export default function Project() {
  return (
    <div className="flex flex-row w-full justify-center items-center h-screen">
      <div className="flex flex-col items-start justify-center w-2/3 h-2/3">
        <div className="mb-6">
          <div className="text-6xl justify-items-center items-center mb-1">
            My Projects
          </div>
          <div className="text-2xl opacity-50">
            The debacles I create when an idea hits me
          </div>
        </div>
        <div className="flex flex-wrap gap-4 overflow-auto">
          {PROJECTS.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                title={project.title}
                deployLink={project.deployLink}
                githubLink={project.githubLink}
                description={project.description}
                tags={project.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
