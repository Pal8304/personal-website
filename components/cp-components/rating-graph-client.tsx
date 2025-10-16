"use client";

import { RatingGraphData } from "./rating-graph";

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

interface RatingGraphClientProps {
  data: RatingGraphData[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as RatingGraphData;
    return (
      <div className="rounded-lg p-3 shadow-lg backdrop-blur-sm">
        <div className="text-white font-semibold text-sm mb-1">
          {data.contestName}
        </div>
        <div className="text-white/70 text-xs mb-2">
          {new Date(data.contestTime).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
        <div className="text-blue-400 font-bold text-lg">
          Rating: {data.rating}
        </div>
      </div>
    );
  }
  return null;
};

export function RatingGraphClient({ data }: RatingGraphClientProps) {
  const ratings = data.map((d) => d.rating);
  const minRating = Math.min(...ratings);
  const maxRating = Math.max(...ratings);
  const yAxisMin = Math.floor(minRating / 100) * 100 - 50;
  const yAxisMax = Math.ceil(maxRating / 100) * 100 + 50;

  return (
    <div className="w-full h-full rounded-2xl p-6 backdrop-blur-sm">
      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis
            dataKey="contestTime"
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.toLocaleDateString("en-US", {
                month: "short",
                year: "2-digit",
              });
            }}
            minTickGap={50}
          />
          <YAxis
            stroke="rgba(255,255,255,0.5)"
            tick={{ fill: "rgba(255,255,255,0.7)", fontSize: 12 }}
            domain={[yAxisMin, yAxisMax]}
            tickCount={8}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{
              paddingTop: "20px",
              color: "rgba(255,255,255,0.9)",
            }}
          />
          <Line
            type="monotone"
            dataKey="rating"
            stroke="#3b82f6"
            strokeWidth={3}
            dot={{
              fill: "#3b82f6",
              strokeWidth: 2,
              r: 4,
              stroke: "#1e40af",
            }}
            activeDot={{
              r: 7,
              fill: "#60a5fa",
              stroke: "#3b82f6",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
