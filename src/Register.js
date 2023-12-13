// src/Register.js
import React, { useState } from 'react';

function Register({ onRegister, onLoginRedirect }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    if (password === "" || username === "") {
      alert('Fill the form');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match. Please try again.');
      return;
    }

    // Implement your registration logic here
    onRegister(username, password);
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Set Username
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Already have an account?{' '}
        <span
          style={{ color: 'yellow', textDecoration: 'none', cursor: 'pointer' }}
          onClick={onLoginRedirect}
        >
          Login
        </span>
      </p>
    </div>
  );
}

export default Register;
