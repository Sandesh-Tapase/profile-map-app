import React from 'react';

const ProfileList = ({ profiles, onSummaryClick }) => {
  const handleClick = (profile) => {
    console.log('Clicked profile:', profile); // Debugging statement
    onSummaryClick(profile); // Trigger onSummaryClick function
  };

  return (
    <div className="profile-list">
      {profiles.map((profile) => (
        <div key={profile.id} className="profile-summary">
          <h3>{profile.name}</h3>
          <p>{profile.description}</p>
          <button onClick={() => handleClick(profile)}>Show Summary</button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
