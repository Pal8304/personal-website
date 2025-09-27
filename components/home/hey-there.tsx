import { SOCIALS } from "@/data/constants";
import AccountLink from "./account-link";
import AnimatedName from "./animated-name";
import AnimatedEnter from "./animated-enter";

export default function HeyThere() {
  return (
    <div className="text-white text-2xl h-screen w-screen flex flex-col justify-center items-center overflow-y-hidden">
      <AnimatedEnter from="top">
        <div>Hey there, {`I'm`}</div>
      </AnimatedEnter>
      
      <AnimatedName name="Palash Jhaveri" />

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
