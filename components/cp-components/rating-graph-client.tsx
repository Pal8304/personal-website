import { RatingChange } from "./rating-graph";
import { use, useMemo } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface RatingGraphData {
  contestName: string;
  contestTime: Date;
  rating: number;
}

export default function RatingGraphClient({
  ratingPromise,
}: {
  ratingPromise: Promise<RatingChange[]>;
}) {
  const ratingChanges = use(ratingPromise);
  const ratingData = useMemo(
    () =>
      ratingChanges.map((change) => ({
        contestName: change.contestName,
        contestTime: new Date(change.ratingUpdateTimeSeconds * 1000),
        rating: change.newRating,
      })),
    [ratingChanges]
  );

  return (
    <div>
      <ResponsiveContainer width="100%" height="100%" minHeight={190}>
        <LineChart
          data={ratingData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#444444" />
          <XAxis
            dataKey="contestTime"
            tickFormatter={(time) =>
              new Date(time).toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              })
            }
            stroke="#888888"
          />
          <YAxis stroke="#888888" />
          <Legend />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
