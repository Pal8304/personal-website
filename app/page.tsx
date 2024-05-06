import Link from "next/link";

export default function Home() {
  return (
    <div className={`text-white text-2xl bg-slate-900 h-screen w-screen flex flex-col justify-center items-center font-roboto`}>
      <div>
        Hey there, {`I'm`}
      </div>
      <div className="text-8xl mt-4 font-dancing">
        Palash Jhaveri
      </div>
      <div className="mt-4">
        <Link href={"https://www.linkedin.com/in/palash-jhaveri/"} rel="noopener noreferrer" target="_blank" className="p-2 rounded-lg hover:bg-slate-700">
          LinkedIn
        </Link>
        <Link href={"https://github.com/Pal8304"} rel="noopener noreferrer" target="_blank" className="p-2 rounded-lg hover:bg-slate-700">
          Github
        </Link>
        <Link href={"https://twitter.com/PalJ_08"} rel="noopener noreferrer" target="_blank" className="p-2 rounded-lg hover:bg-slate-700">
          Twitter
        </Link>
      </div>
    </div>
  );
}
