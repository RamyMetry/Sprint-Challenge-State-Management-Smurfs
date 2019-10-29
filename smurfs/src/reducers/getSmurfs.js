import {
    FETCH_SMURFS_DATA,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_ERROR,
    ADD_SMURFS,
    ADD_SMURFS_SUCCESS,
    ADD_SMURFS_ERROR
} from "../actions/getSmurfs"

const initialState = {
    smurfs : [],
    isLoading : false,
    error : null
}

export function Reducer(state=initialState, action){
    switch(action.type){
        case FETCH_SMURFS_DATA :
            return{
                ...state,
                isLoading : true
            }
        case FETCH_SMURFS_SUCCESS: 
            return{
                ...state,
                smurfs:action.payload,
                isLoading : false
            }
        case FETCH_SMURFS_ERROR:
            return{
                ...state,
                error: action.payload,
                isLoading: false
            }
        case ADD_SMURFS:
            return{
                ...state,
                isLoading:true
            }
        case ADD_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs:action.payload,
                isLoading:false
            }
        case ADD_SMURFS_ERROR:
            return{
                ...state,
                error:action.payload,
                isLoading:false
            }

        default :
        return state;
    }
}