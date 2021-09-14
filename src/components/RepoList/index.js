import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const RepoList = () => {

    const [repoElements, setRepoElements] = useState()
    const repos = useSelector(state => state.results.repos)

    renderElements = () => (
        repos.map(repo => <NavLink to={`${repo.name}`}>{repo.name}</NavLink>)
    )

    return (
        <section>
            {repoElements}
        </section>
    )
}

export default RepoList;