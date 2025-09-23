import CodingProfileLink from "../../components/cp-components/coding-profile-link";
import PageTemplate from "../../components/page-template";
import { CODINGPROFILES } from "../../data/constants";

export default function CodingProfile() {
  return (
    <PageTemplate
      title="Coding Profiles"
      subtitle="My competitive programming profiles"
    >
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
      {/* <CPAchievements /> */}
    </PageTemplate>
  );
}
