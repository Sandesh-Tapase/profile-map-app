// src/components/Profile.js
import React from 'react';

const Profile = ({ profile, onSummaryClick }) => {
  const { name, photoUrl, description } = profile;

  return (
    <div className="profile">
      <img src={photoUrl} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <button onClick={() => onSummaryClick(profile)}>Summary</button>
    </div>
  );
};

export default Profile;
