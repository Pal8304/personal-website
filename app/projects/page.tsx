import ProjectCard from "../components/project-card";

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
        <ProjectCard
          deployLink="https://scheduling-algorithms-rnud.vercel.app/"
          githubLink="https://github.com/Pal8304/Scheduling_Algorithms"
          title="Scheduling_Algorithms"
          description="A simulator of scheduling algorithms for OS project"
          tags={["NextJs", "Tailwind"]}
        />
        <ProjectCard
          deployLink="https://pal8304.github.io/Tower_of_Hanoi/"
          githubLink="https://github.com/Pal8304/Tower_of_Hanoi"
          title="Tower_of_Hanoi"
          description="A simple tower of hanoi game simulator"
          tags={["HTML", "CSS", "Javascript"]}
        />
        <ProjectCard
          deployLink=""
          githubLink="https://github.com/Pal8304/Code_Climb"
          title="Code_Climb"
          description="CF Problem suggestor"
          tags={["React", "FastAPI"]}
        />
        <ProjectCard
          deployLink=""
          githubLink=""
          title="Portfolio"
          description="My portfolio website"
          tags={["NextJs", "Tailwind"]}
        />
      </div>
    </div>
  );
}
