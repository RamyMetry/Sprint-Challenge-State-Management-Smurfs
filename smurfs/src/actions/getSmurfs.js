import axios from "axios"
export const FETCH_SMURFS_DATA = "FETCH_SMURFS_DATA"
export const FETCH_SMURFS_SUCCESS ="FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"


export function fetchSumrfs(){
    return (dispatch)=>{
        dispatch ({type:FETCH_SMURFS_DATA})
        axios.get("http://localhost:3333/smurfs")
            .then(res=>{
                console.log(res)
                dispatch({type:FETCH_SMURFS_SUCCESS, payload:res.data})
            })
            .catch(err=>{
                dispatch({type:FETCH_SMURFS_ERROR, payload:err})
            })
    }
}