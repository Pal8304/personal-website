import AboutMe from "@/components/home/about-me";
import HeyThere from "@/components/home/hey-there";

export default function Home() {
  return (
    <div className="flex flex-col overflow-scroll">
      <div className="flex flex-col w-screen h-screen">
        <HeyThere />
      </div>
      <div className="flex h-screen w-screen">
        <AboutMe />
      </div>
    </div>
  );
}
