import React from 'react';
import "./dashBoardStyle.css";

const ProfileCard = ({ profile }) => {
  const { name, image, status, readiness, temperature } = profile;

  // Determine the color of the status indicator
  let statusColor;
  switch (status) {
    case 'green':
      statusColor = 'green';
      break;
    case 'yellow':
      statusColor = 'yellow';
      break;
    default:
      statusColor = 'red';
  }

  return (
    <div className="profile-card">
      <img src={image} alt="Profile" className="profile-image" />
      <div className="profile-details">
        <h2>{name}</h2>
        <div className="status-indicator" style={{ backgroundColor: statusColor }}></div>
        <p>Status: {status}</p>
        <p>Readiness: {readiness}</p>
        <p>Temperature: {temperature}</p>
      </div>
    </div>
  );
};

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  );
};

const Dashboard = () => {
  const profiles = [
    {
      name: 'John Doe',
      image: './frontend/public/profilePics/guy1.jpeg',
      status: 'green',
      readiness: 90,
      temperature: '37°C',
    },
    {
      name: 'Jane Smith',
      image: 'jane-smith.jpg',
      status: 'yellow',
      readiness: 75,
      temperature: '36.5°C',
    },
    {
      name: 'David Johnson',
      image: 'david-johnson.jpg',
      status: 'red',
      readiness: 50,
      temperature: '36°C',
    },
  ];

  return (
    <div className="app">
      <h1>Soldier Dashboard</h1>
      <ProfileList profiles={profiles} />
    </div>
  );
};

export default Dashboard;


