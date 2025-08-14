import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// Color mapping: Location head (green), Senior (yellow), Junior (red)
const colorMap = {
  'Location head': '#0BB783',
  'Senior': '#FFA800',
  'Junior': '#7A1F2A',
};

const legendOrder = [
  { name: 'Location head', className: 'head' },
  { name: 'Senior', className: 'senior' },
  { name: 'Junior', className: 'junior' },
];

// Custom label to show percentage inside the pie
const renderLabel = ({ percent }) =>
  percent > 0 ? `${(percent * 100).toFixed(0)}%` : '';

// Custom Tooltip component
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value } = payload[0];
    const bg = colorMap[name] || '#222';
    return (
      <div
        style={{
          background: bg,
          color: '#fff',
          border: '1px solid #3a3231',
          borderRadius: 6,
          padding: '8px 12px',
          fontSize: 14,
        }}
      >
        <strong>{name}</strong>: {value}
      </div>
    );
  }
  return null;
};

const TaskOverviewPie = ({ data = {} }) => {
  // Ensure the order matches legend and color mapping
  const pieData = legendOrder
    .map(({ name }) => ({
      name,
      value: data[name] || 0,
    }))
    .filter(d => d.value > 0);

  return (
    <div className="card chart-card" style={{ height: 320, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <div className="section-title" style={{ marginBottom: 8 }}>Task Overview</div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        minHeight: 0
      }}>
        <div style={{ width: 210, height: 210, flexShrink: 0 }}>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100} // Increased from 70 to 100
                label={renderLabel}
                labelLine={false}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colorMap[entry.name]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div style={{ marginLeft: 24 }}>
          <div className="legend" style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <span><span className="dot head" /> Location head</span>
            <span><span className="dot senior" /> Senior</span>
            <span><span className="dot junior" /> Junior</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskOverviewPie;