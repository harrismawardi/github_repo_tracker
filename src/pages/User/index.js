import React from "react";
import { Profile, RepoList } from "../../components";
import './style.css';

const User = () => {
  return (
    <div id="container">
      <Profile />
      <RepoList />
    </div>
  );
};

export default User;
