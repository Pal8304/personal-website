import ProjectCard from "../../components/projects/project-card";
import PageTemplate from "../../components/page-template";
import { PROJECTS } from "../../data/constants";

export default function Project() {
  return (
    <PageTemplate 
      title="Projects" 
      subtitle="The debacles I create when an idea hits me"
    >
      <div className="w-full flex flex-wrap overflow-auto">
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
    </PageTemplate>
  );
}
