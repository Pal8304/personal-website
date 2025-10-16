import { RatingGraphClient } from "./rating-graph-client";

interface RatingChange {
  contestId: number;
  contestName: string;
  handle: string;
  rank: number;
  ratingUpdateTimeSeconds: number;
  oldRating: number;
  newRating: number;
}

export interface RatingGraphData {
  contestName: string;
  contestTime: Date;
  rating: number;
}

function generateRatingGraphData(
  ratingChanges: RatingChange[]
): RatingGraphData[] {
  let graphData: RatingGraphData[] = [];
  ratingChanges.forEach((change) => {
    graphData.push({
      contestName: change.contestName,
      contestTime: new Date(change.ratingUpdateTimeSeconds * 1000),
      rating: change.newRating,
    });
  });
  return graphData;
}

export default async function RatingGraph() {
  let ratingData = await fetch(
    "https://codeforces.com/api/user.rating?handle=Pal_J",
    {
      cache: "no-store", // Update later, refer `https://nextjs.org/docs/app/api-reference/functions/fetch`
    }
  );
  if (!ratingData || !ratingData.ok) {
    return <div>Error fetching data</div>;
  }
  let ratingChangesJSON = await ratingData.json();
  let ratingChanges: RatingChange[] = ratingChangesJSON.result;

  const graphData = generateRatingGraphData(ratingChanges);
  //   console.log(graphData);
  return <RatingGraphClient data={graphData} />;
}
