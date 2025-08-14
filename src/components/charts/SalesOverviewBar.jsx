import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const SalesOverviewBar = ({ data = [] }) => {
  return (
    <div className="card chart-card">
      <div className="section-title">Sales Overview Details</div>
      <br/>
      <div style={{ height: 260 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ left: 0, right: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#3a3231" />
            <XAxis dataKey="group" stroke="#bfb6b3" />
            <YAxis stroke="#bfb6b3" />
            <Tooltip contentStyle={{ background: '#2a2221', border: '1px solid #3a3231' }} />
            <Legend formatter={(value, entry) => (
              <span style={{ color: '#FFFFFF' }}>{value}</span>
            )} />            
            <Bar dataKey="target" fill="#200DC6" radius={[6, 6, 0, 0]} />
            <Bar dataKey="achieve" fill="#0AABC8" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesOverviewBar;
