export default function AboutMe() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center mb-32 gap-2">
      <div className="flex flex-col w-2/3 h-2/3 items-start p-10">
        <div className="text-6xl font-semibold mb-4">More About Me</div>
        <div className="flex flex-col gap-4 text-wrap text-xl">
          <div>
            I am a CS undergrad, who enjoys maths and problem solving. I guess,
            so naturally, I have a keen interest in competitive programming as
            well.
          </div>
          <div>
            Moreover I enjoy learning in depth about various territories of
            computer science, be it internal working of compiler, derivations of
            machine learning formaulae or implementation of database properties.
          </div>
          <div>
            I am also starting my web development journey, so a newbie. I think
            the quality of this portofolio kind of proves it.
          </div>
          <div>
            Would love to connect via any medium possible learn, discuss and
            grow !!
          </div>
        </div>
      </div>
    </div>
  );
}
