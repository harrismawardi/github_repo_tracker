const initState = 
{
    user: { name: '', username:'', bio: ''},
    repos: []
}

const searchReducer = (state=initState, action) => {
    switch(action.type){
        case 'LOAD_RESULT': 
            return {...action.body}
        default:
            return state
    }
}

export default searchReducer