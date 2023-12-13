// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (enteredUsername, enteredPassword) => {
    const correctUsername = 'user1234';
    const correctPassword = 'password';

    if (enteredUsername !== correctUsername) {
      alert('Wrong username or it doesn\'t exist');
    } else if (enteredPassword !== correctPassword) {
      alert('Invalid password');
    } else {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleRegister = (newUsername, newPassword) => {
    console.log(`Registered ${newUsername}`);
    setIsLoggedIn(true); 
  };

  const handleLoginRedirect = () => {
    setShowRegister(false);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <Dashboard onLogout={handleLogout} />
      ) : showRegister ? (
        <Register onRegister={handleRegister} onLoginRedirect={handleLoginRedirect} />
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <p style={{ marginTop: '20px' }}>
            Don't have an account?{' '}
            <span classname="hyperlink"
              style={{ color: "yellow", textDecoration: 'none', cursor: 'pointer' }}
              onClick={() => setShowRegister(true)}>
              Register
            </span>
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
