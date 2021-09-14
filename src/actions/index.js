

const loadResult = (userData, repoData) => ({
    type: 'LOAD_RESULT',
    payload: {
        user: {...userData},
        repos: {...repoData}
    }
})

const getResults = (username) => {
    try {
        const userData = await userRequest(username);
        const repoData = await repoRequest(username);
        dispatch(loadResult(userData, repoData))

    } catch (err) {
        //dispatch err message
    }
}


const userRequest = async (username) => {
    const resp = await fetch(`https://api.github.com/users/${username}`)
    const data = await resp.json()

    //filter out the good stuff into new object

    return filteredData
}

const repoRequest = (username) => {
    const resp = await fetch(`https://api.github.com/users/${username}/repos`)
    const data = await resp.json()

    //filter out the good stuff into the new object
    return filteredData
}