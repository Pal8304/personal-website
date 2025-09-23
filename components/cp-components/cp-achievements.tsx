import { CPACHIEVEMENTS } from "@/data/constants";
import CPAchievementsCard from "./cp-achievements-card";

export default function CPAchievements() {
  return (
    <div className="flex flex-col items-start justify-center w-1/3 h-full ml-6 gap-4">
      <div>
        <div className="text-6xl justify-items-center items-center ml-4">
          Achievements
        </div>
        <div className="text-2xl opacity-50 ml-4">
          My competitive programming achievements
        </div>
      </div>
      <div className="flex flex-wrap w-full">
        {CPACHIEVEMENTS.map((achievement, index) => {
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
  );
}
