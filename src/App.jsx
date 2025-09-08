import React from 'react';
import Dashboard from './components/DashBoard/DashBoard';
import { DashboardProvider } from './context/dashBoardContext.jsx';
import './index.css';

function App() {
  return (
    <DashboardProvider>
      <Dashboard />
    </DashboardProvider>
  );
}

export default App;