import React, { useState } from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [animate, setAnimate] = useState(false);

  const handleChatSelect = (chatId) => {
    setSelectedChatId(chatId);
    setAnimate(true);
  };

  return (
    <div className="app">
      <TopNav />
      <div className="app-body">
        <SideNav onChatSelect={handleChatSelect} />
        {selectedChatId !== null && (
          <div className={`dashboard-fade-wrapper${animate ? ' animate' : ''}`}>
            <Dashboard key={selectedChatId} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
