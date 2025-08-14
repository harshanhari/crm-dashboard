import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';

const SideNav = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch('/data.json').then(r => r.json()).then(data => setChats(data.chats));
  }, []);

  return (
    <aside className="sidenav">

      <div className="search-container">
        <div className="search-box">
          <span className="ico">🔎</span>
          <input placeholder="Search" />
        </div>
        <span className="icon">⋮</span>
      </div>

      <FilterBar />

      <div className="chatlist">
        {chats.map((c, idx) => (
          <div className="chatitem" key={idx}>
            <div className="avatar" />
            <div className="meta">
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <strong>{c.title}</strong>
                <span className="time">{c.time}</span>
              </div>
              <div className="small">{c.subtitle}</div>
            </div>
            {c.unread > 0 && <span className="badge">{c.unread}</span>}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
