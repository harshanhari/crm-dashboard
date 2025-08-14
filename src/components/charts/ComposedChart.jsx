import React, { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ComposedChartExample = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulated API fetch
    const fetchData = async () => {
      // Example fetched data (replace with your API call)
      const rows = [
        { name: "Jan", score: 400, trend: [200, 250, 350] },
        { name: "Feb", score: 300, trend: [150, 220, 270] },
        { name: "Mar", score: 200, trend: [180, 210, 240] },
        { name: "Apr", score: 278, trend: [260, 275, 280] },
        { name: "May", score: 189, trend: [170, 180, 185] },
      ];

      // Transform to chart format
      const series = rows.map((r) => ({
        name: r.name,
        barValue: r.score,
        lineValue: r.trend.reduce((a, b) => a + b, 0) / r.trend.length,
      }));

      setData(series);
    };

    fetchData();
  }, []);

  return (
    <div className="card chart-card">
      <div className="section-title">Top Performer</div>
      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid stroke="#3a3231" />
            <XAxis dataKey="name" stroke="#bfb6b3" />
            <YAxis stroke="#bfb6b3" domain={[0, "dataMax + 5"]} />
            <Tooltip
              contentStyle={{
                background: "#2a2221",
                border: "1px solid #3a3231",
              }}
            />
            <Legend />

            {/* Bars (Score) */}
            <Bar
              dataKey="barValue"
              barSize={20}
              fill="#08a0a0"
              radius={[6, 6, 0, 0]}
              isAnimationActive
              animationDuration={800}
            />

            {/* Glow Gradient for Line */}
            <defs>
              <linearGradient id="lineGlow" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="rgba(106, 167, 182, 0.7)"
                />
                <stop
                  offset="100%"
                  stopColor="rgba(106, 167, 182, 0)"
                />
              </linearGradient>
            </defs>

            {/* Line (Avg Trend) */}
            <Line
              type="monotone"
              dataKey="lineValue"
              stroke="#6aa7b6"
              strokeWidth={3}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComposedChartExample;
