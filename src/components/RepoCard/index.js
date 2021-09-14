import React from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

function RepoCard() {

    const location = useLocation();
    const repoName = location.split('/')[1];
    const allRepos = useSelector(state => state.result.repos);
    const repoData = allRepos.filter(repo => repo.name === repoName);
    const error = useSelector(state => state.error);

    const renderCard = repoData => (
            <div id="repo-card">
                <div className="intro">
                    <span className="repo-name">{repo.name}</span>
                    <span className="repo-description">{repo.description}</span>
                </div>

                <div className="stats">
                    <span>Created on: {repo.created_at.slice(0, 10)}</span>
                    <span>Language: {repo.language}</span>
                    <span>Forks: {repo.forks}</span>
                    <span>Stargazers: {repo.stargazers_count}</span>
                </div>

                <div className="links">
                    <button id="https-link">Copy https link</button>
                    <button id="ssh-link">Copy SSH link</button>
                </div>
            </div>
        )

    return(
        <>{ error ? <p role="alert">Could not find the repo data</p> : renderCard(repoData) }</>
    )
}

export default RepoCard;
