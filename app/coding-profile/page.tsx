import CodingProfileLink from "../components/coding-profile-link";
export default function CodingProfile() {
  return (
    <div className="flex flex-col items-left justify-center w-2/3 h-screen ml-10 gap-4">
      <div>
        <div className="text-6xl font-semibold justify-items-center items-center ml-6">
          Coding Profiles
        </div>
        <div className="text-2xl opacity-50 ml-6">
          My competitive programming profiles
        </div>
      </div>
      <div className="flex flex-wrap">
        <CodingProfileLink
          handle="Pal_J"
          codingPlatform="Codeforces"
          codingProfileLink="https://codeforces.com/profile/Pal_J"
          iconPath="/codeforces.png"
          maxRating={1600}
          highestTag="Expert"
        />
        <CodingProfileLink
          handle="palash_jhaveri"
          codingPlatform="Codechef"
          codingProfileLink="https://www.codechef.com/users/palash_jhaveri"
          iconPath="/codechef.jpeg"
          maxRating={1600}
          highestTag="4 Star"
        />
        <CodingProfileLink
          handle="Pal_J"
          codingPlatform="Leetcode"
          codingProfileLink="https://leetcode.com/Pal_J/"
          iconPath="/leetcode.png"
          maxRating={1600}
          highestTag="None"
        />
      </div>
    </div>
  );
}
