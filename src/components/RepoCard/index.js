import React from 'react';

function RepoCard() {

    // get data from store
    // const repoData

    const renderCard = repoData => (
            <div id="repo-card">
                <div className="intro">
                    <span className="p-name">{repo.name}</span>
                    <span className="p-description">{repo.description}</span>
                </div>

                <span>Created on: {repo.created_at.slice(0, 10)}</span>
                <span>Language: {repo.language}</span>

                <div className="stats">
                    <span>Forks: {repo.forks}</span>
                    <span>Stargazers: {repo.stargazers_count}</span>
                </div>

                <div className="links">
                    <button id="https-link">Copy https link</button>
                    <button id="ssh-link">Copy SSH link</button>
                </div>
            </div>
        )

    // add logic for displaying errors
    return({ renderCard() })
}

export default RepoCard;
