import ProjectCard from "../components/project-card";

export default function Project() {
  return (
    <div className="text-2xl flex flex-col items-center justify-center h-screen w-screen gap-4">
      <div className="text-6xl">My Projects</div>
      <div>
        <ProjectCard
          externalLink="https://www.google.com"
          title="Hello"
          description="Me"
          tags={["lol", "lol", "lol"]}
        />
      </div>
    </div>
  );
}
