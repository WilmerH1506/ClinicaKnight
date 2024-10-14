import React, { useState } from 'react';
import NavBar from './NavBar';
import DashboardCards from './DashboardsCards';
import Patients from './Patients';
import Dates from './Dates';
import Inventory from './Inventory';
import './App.css';

const App = () => {
  const [currentView, setCurrentView] = useState('dashboard');

  const handleViewChange = (view) => {
    setCurrentView(view);
  };


  let content;
  switch (currentView) 
  {
    case 'dashboard':
      content = <DashboardCards />;
      break;
    
    case 'Pacientes':
      content = <Patients />;
      break;

    case 'Citas':
      content = <Dates />;
      break;
    
    case 'Inventario':
      content = <Inventory />;
      break;
      
    default:
      content = null;
      break;
  }

  return (
    <div>
      <NavBar onViewChange={handleViewChange} />
      <div className="content">
        {content}
      </div>
    </div>
  );
};

export default App;