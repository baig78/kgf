import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MembershipForm from './form/MembershipForm';
import Login from './Login/Login';
import WelcomePage from './WelcomePage/WelcomePage';
import CreateUser from './CreateUser/CreateUser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/membership-form" element={<MembershipForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
