import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Counters />
        </div>
      </React.Fragment>
  );
}

export default App;
