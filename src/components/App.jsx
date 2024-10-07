import React, { useState } from 'react';
import NavBar from './NavBar';
import DashboardCards from './DashboardsCards';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <div>
      <NavBar onViewChange={handleViewChange} />
      <div className="content">
        {currentView === 'dashboard' && <DashboardCards />}
      </div>
    </div>
  );
};

export default App;