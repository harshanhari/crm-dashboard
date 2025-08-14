import React from 'react';
import { useState } from 'react';
import { BsFilterCircle } from 'react-icons/bs';
import { IoCreateOutline } from 'react-icons/io5';

export default function FilterBar() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  return (
    <div className="filters-container" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div className="filters" style={{ display: 'flex', gap: '8px' }}>
        {['All', 'Unseen', 'Read', 'Internal', 'External'].map(c => (
          <span
            key={c}
            className={`chip ${selectedFilter === c ? 'all-filter' : ''}`}
            onClick={() => setSelectedFilter(c)}
          >
            {c}
          </span>
        ))}
      </div>
      <BsFilterCircle size={24} style={{ cursor: 'pointer', color: '#7F7F7F' }} />
      <IoCreateOutline size={24} style={{ cursor: 'pointer', color: '#7F7F7F' }} />
    </div>
  );
}