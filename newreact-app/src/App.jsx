// src/App.js
import React from 'react';
import './App.css';
import TopHeader from './components/TopHeader';
import MiddleHeader from './components/MiddleHeader';
import SwipeableCards from './components/SwipeableCards';
import InformationTable from './components/InformationTable';

function App() {
  return (
    <div className="App">
      <TopHeader />
      <SwipeableCards />
      <MiddleHeader />
      <InformationTable />
    </div>
  );
}

export default App;
