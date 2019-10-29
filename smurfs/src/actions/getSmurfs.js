import axios from "axios"
export const FETCH_SMURFS_DATA = "FETCH_SMURFS_DATA"
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS"
export const FETCH_SMURFS_ERROR = "FETCH_SMURFS_ERROR"
export const ADD_SMURFS = "ADD_SMURFS"
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS"
export const ADD_SMURFS_ERROR = "ADD_SMURFS_ERROR"

export function FetchData(){
    return(dispatch)=>{
        dispatch({type: FETCH_SMURFS_DATA})
        axios.get("http://localhost:3333/smurfs")
            .then(res=>{
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err=>{
                dispatch({type: FETCH_SMURFS_ERROR, payload: err})
            })
    }

}

export function addSmurfs(values){
    return(dispatch)=>{
        dispatch({type: ADD_SMURFS})
        axios.post("http://localhost:3333/smurfs",values)
            .then(res=>{
                console.log(res)
                dispatch({type:ADD_SMURFS_SUCCESS, payload:res.data})
            })
            .catch(err=>{
                dispatch({type: ADD_SMURFS_ERROR, payload:err})
            })
    }
}