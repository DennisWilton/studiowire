const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
 }
 
 export default function menu (state = INITIAL_STATE, action){
     switch(action.type){
         case 'REQUEST_JOBS':
             return {...state, loading: true}
         case 'JOBS_FETCH_SUCCESS':
             return {...state, loading: false, error: false, data: action.payload.data}
         case 'JOBS_FETCH_ERROR':
             return {...INITIAL_STATE, error: true}
         default:
             return state;
     }
 }