import { Suspense } from "react";
import RatingGraphClient from "./rating-graph-client";

export interface RatingChange {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

async function getRatingData(): Promise<RatingChange[]> {
  const data = await fetch(
    "https://codeforces.com/api/user.rating?handle=pal_j",
  );
  const json = await data.json();
  const ratingChanges: RatingChange[] = json.result;
  return ratingChanges;
}

export default function RatingGraph() {
  const ratingPromise: Promise<RatingChange[]> = getRatingData();

  return (
    <Suspense fallback={
      <div className="flex justify-center items-center">
        Loading...
      </div>
    }>
      <RatingGraphClient ratingPromise={ratingPromise} />
    </Suspense>
  );
}
