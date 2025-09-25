import { SOCIALS } from "@/data/constants";
import AccountLink from "./account-link";
export default function HeyThere() {
  return (
    <div className="text-white text-2xl bg-slate-900 h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden">
      <div>Hey there, {`I'm`}</div>
      <div className="text-8xl mt-4 font-dancing">Palash Jhaveri</div>
      <div className="mt-4 gap-8 flex flex-row">
        {SOCIALS.map((social, index) => (
          <AccountLink
            key={index}
            externalLink={social.externalLink}
            Icon={social.Icon}
          />
        ))}
      </div>
    </div>
  );
}
