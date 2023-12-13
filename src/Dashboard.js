import React from 'react';

function Dashboard({ onLogout }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to the dashboard!</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
