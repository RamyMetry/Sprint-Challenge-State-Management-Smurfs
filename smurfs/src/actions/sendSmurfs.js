import Axios from "axios"
export const SEND_DATA ="SEND_DATA"
export const SEND_NAME = "SEND_NAME"
export const SEND_AGE = "SEND_AGE"
export const SEND_HEIGHT = "SEND_HEIGHT"
export const SEND_ERROR = "SEND_ERROR"

export function handleSubmit(){
    return(dispatch)=>{
        dispatch({type:SEND_DATA})
        Axios.post("http://localhost:3333/smurfs")
            .then(res=>{
                dispatch({type:SEND_NAME, payload:res.data.name})
                dispatch({type:SEND_AGE, payload:res.data.age})
                dispatch({type:SEND_HEIGHT, payload:res.data.height})
            })
        .catch(err=>{
            dispatch({type:SEND_ERROR, payload:err})
        })
    }
}
