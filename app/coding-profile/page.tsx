import CodingProfileLink from "../components/coding-profile-link";
import Image from "next/image";
import CodeforcesIcon from "/public/codeforces.png";
import CodechefIcon from "/public/codechef.jpeg";
import LeetcodeIcon from "/public/leetcode.png";
//import AtcoderIcon from '/public/atcoder.png'
export default function CodingProfile() {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 h-screen ml-4">
      <div>
        <div className="text-4xl font-bold justify-items-center items-center m-6">Coding Profiles</div>
      </div>
      <div className="flex flex-wrap">
        <CodingProfileLink
          handle="Pal_J"
          codingPlatform="Codeforces"
          codingProfileLink="https://codeforces.com/profile/Pal_J"
          icon={<Image src={CodeforcesIcon} width={75} height={75} alt="OK" />}
          maxRating={1600}
          highestTag="Expert"
        />
        <CodingProfileLink
            handle="palash_jhaveri"
            codingPlatform="Codechef"
            codingProfileLink="https://www.codechef.com/users/palash_jhaveri"
            icon={<Image src={CodechefIcon} width={75} height={75} alt="OK" />}
            maxRating={1600}
            highestTag="4 Star"
        />
        <CodingProfileLink
            handle="Pal_J"
            codingPlatform="Leetcode"
            codingProfileLink="https://leetcode.com/Pal_J/"
            icon={<Image src={LeetcodeIcon} width={75} height={75} alt="OK" />}
            maxRating={1600}
            highestTag="None"
        />
      </div>
    </div>
  );
}
