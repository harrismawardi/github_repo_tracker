import React from "react";
import { useSelector } from "react-redux";

function UserCard() {
  const user = useSelector((state) => state.result.user);
  const error = useSelector((state) => state.error);

  const renderUser = (user) => (
    <div id="user-card">
      <div className="user-intro">
        <span className="repo-login">{user.login}</span>
        <br />
        <span className="repo-name">{user.name}</span>
      </div>

      <img className="profile-img" src={user.avatar_url} alt="profile-pic" />

      <div className="user-bio">
        <p>{user.bio}</p>
      </div>
    </div>
  );

  return (
    <>
      {error ? <p role="alert">Could not find user data</p> : renderUser(user)}
    </>
  );
}

export default UserCard;
