import React, { useEffect, useState } from 'react';
import KPSOneLogo from '../assets/KPSOneCrop.png'; // Import your logo

const TopNav = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(r => r.json())
      .then(setData => {
        setUser(setData.user);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="topnav">
      <div className="brand">
        <img draggable={false} 
          src={KPSOneLogo}
          alt="KPS One"
          className="logo-img"
        />
      </div>
      {/* <div className="search">
        <span className="ico">🔎</span>
        <input placeholder="Search" />
      </div> */}
      <div className="actions">
        <span className="icon">🔔</span>
        <div className="user">
          <span className="avatar" />
          <div>
            <div>Alex M M</div>
            <div className="small">Location Manager</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
