import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-intro">
        <span className="user-name">{user.name}</span>
        <span className="user-login">{user.login}</span>
      </div>

      <img className="profile-img" src={user.avatar_url} alt="profile-pic" />

      <div className="user-bio">
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
