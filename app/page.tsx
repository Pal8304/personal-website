import AccountLink from "./components/account-link";
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Home() {
  return (
    <div className={`text-white text-2xl bg-slate-900 h-screen w-screen flex flex-col justify-center items-center font-roboto`}>
      <div>
        Hey there, {`I'm`}
      </div>
      <div className="text-8xl mt-4 font-dancing">
        Palash Jhaveri
      </div>
      <div className="mt-4 gap-8 flex flex-row">
        <AccountLink externalLink="https://github.com/Pal8304" icon= {<Github size={32} />} />
        <AccountLink externalLink="https://www.linkedin.com/in/palash-jhaveri/" icon={<Linkedin size={32} />} />
        <AccountLink externalLink="https://twitter.com/PalJ_08" icon={<Twitter size={32} />} />
      </div>
    </div>
  );
}
