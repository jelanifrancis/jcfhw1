// Dashboard.js
import React from 'react';
import './Dashboard.css';

function Dashboard({ name, email, onLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <h2>Welcome to Fashion Helpline</h2> {/* Modified heading */}
        <div className="user-greeting">
          <h3>Hello, {name}! </h3>
          <p>You've successfully logged in with: {email}</p>
        </div>
        <div className="dashboard-content">
          <p>You're looking handsome today, love ya!</p>
        </div>
        <button className="logout-btn" onClick={onLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}

export default Dashboard;