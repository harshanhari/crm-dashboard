import React from 'react';

const TeamAvailabilityTable = ({ rows = [] }) => {
  return (
    <div className="team-availability-card">
      <div className="section-title">Team Availability</div>
      <div className="team-availability-table-wrapper">
        <table className="team-availability-table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Assigned Task</th>
              <th>Completed Task</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.sl}>
                <td>{r.sl.toString().padStart(2, '0')}</td>
                <td>{r.name}</td>
                <td>{r.assigned}</td>
                <td>
                  <div className="team-availability-bar">
                    <span style={{ width: r.completed + '%' }} />
                  </div>
                  <div className="team-availability-small">{r.completed}%</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default TeamAvailabilityTable;
