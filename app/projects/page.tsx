import PageTemplate from "../../components/page-template";
import ProjectList from "@/components/projects/project-list";

export default function Project() {
  return (
    <PageTemplate 
      title="Projects" 
      subtitle="The debacles I create when an idea hits me"
    >
     <ProjectList /> 
    </PageTemplate>
  );
}
