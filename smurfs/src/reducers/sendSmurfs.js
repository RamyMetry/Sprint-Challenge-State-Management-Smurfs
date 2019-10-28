import {
    SEND_DATA,
    SEND_NAME,
    SEND_AGE,
    SEND_HEIGHT,
    SEND_ERROR
} from "../actions/sendSmurfs"

const initialState= {
    name: "",
    age: "",
    height: "",
    data:{}
}

export function reducer (state = initialState, action){
    switch(action.type){
        case SEND_NAME:
            return {
                ...state,
                name :action.payload
            }
        case SEND_AGE :
            return {
                ...state,
                age :action.payload
            }
        case SEND_HEIGHT :
            return {
                ...state,
                height :action.payload
            }
        case SEND_DATA :
            return{
                ...state,
                data :action.payload
            }
        case SEND_ERROR :
            return {
                ...state,
                error :action.payload
            }


        default :
             return state;
    }
}