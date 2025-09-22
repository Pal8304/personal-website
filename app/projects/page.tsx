import ProjectCard from "../../components/project-card";
import PageTemplate from "../../components/page-template";
import { PROJECTS } from "../../data/constants";

export default function Project() {
  return (
    <PageTemplate 
      title="My Projects" 
      subtitle="The debacles I create when an idea hits me"
    >
      <div className="flex flex-wrap gap-4 overflow-auto pt-8">
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
