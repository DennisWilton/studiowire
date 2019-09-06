const INITIAL_STATE = {
    data: {},
    loading: false,
    error: false,
}

export default function main (state = INITIAL_STATE, action){
    switch(action.type){
        case 'NEWS_FETCH_SUCCESS':
            return {...state, data: {...state.data, news: action.payload.data}}
        case 'NEWS_FETCH_ERROR':
            return {...state, data: {...state.data, news: []}, error: action.payload.message}
        default:
            return state;
    }
}