import React from 'react';

const KPI = ({ label, value, suffix, progress }) => {
  return (
    <div className="card stat-card" style={{ position: 'relative' }}>
      <div className="kpi">
        {label === 'Average Team' ? (
          <div className="icon">👥</div>
        ) : (
          <div className="icon">💸</div>
        )}        <div>
          <div className="label">{label}</div>
          <div className="value">{value.toLocaleString()} {suffix || ''}</div>
        </div>
      </div>
      <br />
      {typeof progress === 'number' && (
        <div className="progress">{progress}%</div>
      )}
    </div>
  );
};

export default KPI;
