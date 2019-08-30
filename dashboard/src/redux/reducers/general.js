const initialState = {
    name: 'Studio Wire',
}

export default function(state = initialState, action){
    switch(action.type){
        case 'SET_WEBSITE_NAME':
            return {...state, name: action.name};
        default:
            return state
    }
}