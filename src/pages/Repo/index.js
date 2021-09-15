import React from "react";
import { BackButton, RepoCard, Profile } from "../../components";

import './style.css'

const Repo = () => {

  return (
    <div id='container'>
        <Profile />
        <RepoCard />
        <BackButton />
    </div>
  );
};

export default Repo;
