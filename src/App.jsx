import React from 'react';
import TopNav from './components/TopNav';
import SideNav from './components/SideNav';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="app">
      <TopNav />
      <div className="app-body">
        <SideNav />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
