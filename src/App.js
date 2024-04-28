import React, { useState } from 'react';
import ProfileList from './components/ProfileList';
import MapContainerComponent from './components/MapContainerComponent';
import './App.css';

const App = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    {
      id: 1,
      name: 'John Doe',
      description: 'Software Engineer',
      // Add more profile properties as needed
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'Web Developer',
      // Add more profile properties as needed
    },
    // Add more profiles as needed
  ];

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div className="app">
      <h1>Profile Explorer</h1>
      <div className="profiles-container">
        {/* Pass profiles and handleSummaryClick function as props */}
        <ProfileList profiles={profiles} onSummaryClick={handleSummaryClick} />
      </div>
      <div className="map-container">
        {/* Pass selectedProfile to MapContainerComponent */}
        <MapContainerComponent selectedProfile={selectedProfile} />
      </div>
    </div>
  );
};

export default App;
