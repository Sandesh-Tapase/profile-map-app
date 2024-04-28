// src/components/ProfileDetails.js

import React, { useState } from 'react';

const ProfileDetails = ({ profile }) => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="profile-details">
      <h2>{profile.name}</h2>
      <p><strong>Description:</strong> {profile.description}</p>
      <p><strong>Address:</strong> {profile.address}</p>
      <button onClick={handleToggle}>Toggle Expanded</button>
      {expanded && <p>Additional Details...</p>}
    </div>
  );
};

export default ProfileDetails;
