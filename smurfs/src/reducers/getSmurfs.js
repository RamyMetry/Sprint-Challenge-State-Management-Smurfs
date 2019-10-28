import {
    FETCH_SMURFS_DATA ,
    FETCH_SMURFS_SUCCESS , 
    FETCH_SMURFS_ERROR
} from "../actions/getSmurfs"

const initialState = {
    smurfs:[],
    isLoading :false,
    error : null
}

export function reducer (state = initialState, action){
    switch(action.type){
        case FETCH_SMURFS_DATA :
            return {
                ...state,
                isLoading:true
            }
            
        case FETCH_SMURFS_SUCCESS :
            return {
                ...state,
                smurfs :action.payload,
                isLoading :false
            }

        case FETCH_SMURFS_ERROR :
            return {
                ...state,
                error : action.payload,
                isLoading :false
            }

        default:
            return state;
    }
}