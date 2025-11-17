import { CODINGPROFILES } from "@/data/constants";
import CodingProfileLink from "./coding-profile-link";
import ProfileGraph from "./profile-graph";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function CodingProfileList({
  codingPlatformHovered,
  setCodingPlatformHovered,
}: {
  codingPlatformHovered: string | null;
  setCodingPlatformHovered: (platform: string | null) => void;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;
      const wrapper = Array.from(
        container.querySelectorAll<HTMLElement>(".coding-link-wrapper")
      );
      const tl = gsap.timeline();
      tl.from(wrapper, {
        autoAlpha: 0,
        y: 20,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.15,
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="flex flex-col gap-3 px-4 lg:px-0">
      {CODINGPROFILES.map((profile, index) => {
        return (
          <div
            key={index}
            className="coding-link-wrapper relative flex items-start gap-4 min-h-28 lg:min-h-36"
          >
            <CodingProfileLink
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
              <div className="hidden lg:flex">
                <ProfileGraph codingPlatformHovered={codingPlatformHovered} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
