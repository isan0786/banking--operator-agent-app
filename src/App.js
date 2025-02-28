import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Hub from './Hub';
import OpenAccountForm from './OpenAccountForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/hub" element={<Hub />} />
            <Route path="/open-account" element={<OpenAccountForm />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;