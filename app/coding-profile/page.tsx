"use client";

import { useState } from "react";
import CodingProfileLink from "../../components/cp-components/coding-profile-link";
import ProfileGraph from "../../components/cp-components/profile-graph";
import PageTemplate from "../../components/page-template";
import { CODINGPROFILES } from "../../data/constants";

export default function CodingProfile() {
  const [codingPlatformHovered, setCodingPlatformHovered] = useState<
    string | null
  >(null);
  return (
    <PageTemplate title="Coding Profiles" subtitle="WA on testcase 2 prevails">
      <div className="flex flex-col gap-3">
        {CODINGPROFILES.map((profile, index) => {
          return (
            <div
              key={index}
              className="relative flex items-start gap-4 min-h-36"
            >
              <CodingProfileLink
                key={index}
                codingPlatform={profile.codingPlatform}
                codingProfileLink={profile.codingProfileLink}
                handle={profile.handle}
                iconPath={profile.iconPath}
                highestTag={profile.highestTag}
                maxRating={profile.maxRating}
                codingPlatformHovered={codingPlatformHovered}
                setCodingPlatformHovered={setCodingPlatformHovered}
              />
              {profile.codingPlatform === codingPlatformHovered && (
                <div className="flex">
                <ProfileGraph codingPlatformHovered={codingPlatformHovered} />
                </div>
              )}
              <div className="hidden md:block flex-1" />
            </div>
          );
        })}
      </div>
    </PageTemplate>
  );
}
