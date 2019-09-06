const INITIAL_STATE = {
   isOpen: true,
}

export default function menu (state = INITIAL_STATE, action){
    switch(action.type){
        case 'MENU_OPEN':
            return {...state, isOpen: true}
        case 'MENU_CLOSE':
            return {...state, isOpen: false}
        default:
            return state;
    }
}