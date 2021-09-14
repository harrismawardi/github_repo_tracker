const initState =
{
    result: {
        user: { name: '', login: '', bio: '', avatar_url:'' },
        repos: [],
    },
    error: false
}

const searchReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOAD_RESULT':
            return { ...state, result: action.payload, error: false }
        case 'SET_ERROR':
            return { ...state, error: action.payload }
        default:
            return state
    }
}

export default searchReducer
