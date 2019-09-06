const initialState = {
    isLogged: false,
    token: null,
}

export default function(state = initialState, action){
    switch(action.type){
        case 'LOGIN':
            return {...state, isLogged: true, profile: action.profile, token: action.token};
        case 'LOGOUT':
            return {initialState};
        default:
            return state
    }
}