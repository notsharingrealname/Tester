import React from 'react';

const Profile = ({ user }) => (
  <div>
    <h1>{user.name}</h1>
    <p>{user.email}</p>
    <p>{user.bio}</p>
  </div>
);

export default Profile;
