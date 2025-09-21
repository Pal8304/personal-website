import CodingProfileLink from "../../components/coding-profile-link";
import { CODINGPROFILES } from "../../data/constants";

export default function CodingProfile() {
  return (
    <div className="flex flex-row w-full justify-center items-center h-screen">
      <div className="flex flex-col items-start justify-center w-2/3">
        <div className="mb-6">
          <div className="text-6xl justify-items-center items-center ml-4 mb-1">
            Coding Profiles
          </div>
          <div className="text-2xl opacity-50 ml-4">
            My competitive programming profiles
          </div>
        </div>
        <div className="flex flex-wrap">
          {CODINGPROFILES.map((profile, index) => {
            return (
              <CodingProfileLink
                key={index}
                codingPlatform={profile.codingPlatform}
                codingProfileLink={profile.codingProfileLink}
                handle={profile.handle}
                iconPath={profile.iconPath}
                highestTag={profile.highestTag}
                maxRating={profile.maxRating}
              />
            );
          })}
        </div>
      </div>
      {/* <CPAchievements /> */}
    </div>
  );
}
