const initialState = {
    isLogged: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case 'LOGIN':
            return {...state, isLogged: true, profile: action.profile};
        case 'LOGOUT':
            return {initialState};
        default:
            return state
    }
}