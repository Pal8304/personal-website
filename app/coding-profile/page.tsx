import CodingProfileLink from "../components/coding-profile-link";
export default function CodingProfile() {
  return (
    <div className="flex flex-col items-center justify-center w-2/3 h-screen">
      <div>
        <div className="text-4xl font-bold justify-items-center items-center m-6">
          Coding Profiles
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
