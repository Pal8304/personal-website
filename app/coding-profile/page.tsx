import { profile } from "console";
import CodingProfileLink from "../../components/coding-profile-link";
import CPAchievementsCard from "../../components/cp-achievements-card";
import { CPACHIEVEMENTS, CODINGPROFILES } from "../../data/constants";


export default function CodingProfile() {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col items-start justify-center w-2/3 h-screen ml-6 gap-4">
        <div>
          <div className="text-6xl font-semibold justify-items-center items-center ml-4">
            Coding Profiles
          </div>
          <div className="text-2xl opacity-50 ml-4">
            My competitive programming profiles
          </div>
        </div>
        <div className="flex flex-wrap">
          {
            CODINGPROFILES.map((profile,index) => {
              return(
              <CodingProfileLink
                key={index}
                codingPlatform={profile.codingPlatform}
                codingProfileLink={profile.codingProfileLink}
                handle={profile.handle}
                iconPath={profile.iconPath}
                highestTag={profile.handle}
                maxRating={profile.maxRating}
               />)
            })
          }
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-1/3 h-screen ml-6 gap-4">
        <div>
          <div className="text-6xl font-semibold justify-items-center items-center ml-4">
            Achievements
          </div>
          <div className="text-2xl opacity-50 ml-4">
            My competitive programming achievements
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          {CPACHIEVEMENTS.map((achievement,index) => {
            return (
              <CPAchievementsCard
                key={index}
                event={achievement.event}
                rank={achievement.rank}
                certificateLink={achievement.certificateLink}
                description={achievement.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
