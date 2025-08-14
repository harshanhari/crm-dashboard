import React from 'react';
import { ResponsiveContainer, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

const SalePerformanceChart = ({ data = [] }) => {
  return (
    <div className="card chart-card">
      <div className="section-title">Sale Performance</div>
      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3a3231" />
            <XAxis dataKey="month" stroke="#bfb6b3" />
            <YAxis stroke="#bfb6b3" />
            <Tooltip contentStyle={{ background: '#2a2221', border: '1px solid #3a3231' }} />
            <Legend formatter={(value, entry) => (
              <span style={{ color: '#FFFFFF' }}>{value}</span>
            )} />             <Bar dataKey="target" fill="#01AD96" radius={[6, 6, 0, 0]} />
            <Bar dataKey="achieved" fill="#FF6868" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalePerformanceChart;
