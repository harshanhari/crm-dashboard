import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';

const SideNav = ({ onChatSelect }) => {
  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    fetch('/data.json').then(r => r.json()).then(data => setChats(data.chats));
  }, []);

  const filteredChats = chats.filter(c => c.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <aside className="sidenav">

      <div className="search-container">
        <div className="search-box">
          <span className="ico">🔎</span>
          <input
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
        <span className="icon">⋮</span>
      </div>

      <FilterBar />

      <div className="chatlist">
        {filteredChats.map((c, idx) => (
          <div
            className={`chatitem${selectedIdx === idx ? ' selected' : ''}`}
            key={idx}
            onClick={() => {
              setSelectedIdx(idx);
              if (onChatSelect) onChatSelect(idx);
            }}
          >
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