import React from "react";
import { BackButton, Profile, RepoList } from "../../components";
import './style.css';

const User = () => {
  return (
    <div id="user-page-container">
      <Profile />
      <RepoList />
      <BackButton />
    </div>
  );
};

export default User;
