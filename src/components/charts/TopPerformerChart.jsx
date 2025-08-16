import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Area } from 'recharts';
const toSeries = (rows = []) => {
  // Build a chart with bars for current score, and a line for average trend
  return rows.map(r => ({ name: r.name, score: r.score, avg: r.trend.reduce((a, b) => a + b, 0) / r.trend.length }));
};

const TopPerformerChart = ({ rows = [] }) => {
  const data = toSeries(rows);
  return (
    <div className="card chart-card">
      <div className="section-title">Top Performer</div>
      <br />
      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3a3231" />
            <XAxis dataKey="name" stroke="#bfb6b3" />
            <YAxis stroke="#bfb6b3" />
            <Tooltip contentStyle={{ background: '#2a2221', border: '1px solid #3a3231' }} />
            <Legend />
            <Bar dataKey="score" name="score" fill="#075869" radius={[6, 6, 0, 0]} />
            <Line dataKey={(entry) => entry.avg + 10} stroke="#B68660" strokeWidth={2} dot={false} />
            <Area dataKey={(entry) => entry.avg + 10} fill="#B68660" fillOpacity={0.2} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TopPerformerChart;
