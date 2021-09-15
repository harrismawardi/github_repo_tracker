import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import './style.css'

const RepoList = () => {

    const [repoElements, setRepoElements] = useState('hi')
    const reposArr = useSelector(state => state.result.repos)

    useEffect(() => {
        const renderElements = () => {
           const userRepos = reposArr.map((repo, idx) => <NavLink className="repo-link" to={`/repo?${repo.name}`} key={idx}>{repo.name}</NavLink>)
           setRepoElements(userRepos)
        }
        renderElements()
    }, [reposArr])


    return (
        <section id='repo-list'>
            {repoElements}
        </section>
    )
}

export default RepoList;
