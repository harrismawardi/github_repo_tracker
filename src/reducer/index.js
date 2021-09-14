const initState = 
{
    user: { name: '', username:'', bio: ''},
    repos: [],
    error: false
}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOAD_RESULT': 
            return {...state, repos: action.payload}
        case 'SET_ERROR':
            return {...state, error: action.payload}
        default:
            return state
    }
}

export default searchReducer