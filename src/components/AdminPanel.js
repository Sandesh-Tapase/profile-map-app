// src/components/AdminPanel.js

import React from 'react';

const AdminPanel = ({ profiles, setProfiles }) => {
  const addProfile = () => {
    const newProfile = {
      id: profiles.length + 1,
      name: 'New Profile',
      photoUrl: 'https://via.placeholder.com/150',
      description: 'New Profile Description',
      address: 'New Address',
      coordinates: [0, 0],
    };
    setProfiles([...profiles, newProfile]);
  };

  const deleteProfile = (id) => {
    const updatedProfiles = profiles.filter((profile) => profile.id !== id);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <button onClick={addProfile}>Add Profile</button>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} - <button onClick={() => deleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
