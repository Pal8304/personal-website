"use client";

import { useState } from "react";
import PageTemplate from "../../components/page-template";
import CodingProfileList from "@/components/cp-components/coding-profile-list";

export default function CodingProfile() {
  const [codingPlatformHovered, setCodingPlatformHovered] = useState<
    string | null
  >(null);
  return (
    <PageTemplate title="Coding Profiles" subtitle="WA on testcase 2 prevails">
      <CodingProfileList
        codingPlatformHovered={codingPlatformHovered}
        setCodingPlatformHovered={setCodingPlatformHovered}
      />
    </PageTemplate>
  );
}
