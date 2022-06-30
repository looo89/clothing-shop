import { fetchClosesApi } from "../../api"

const FETCH_CLOTHES_START='FETCH_CLOTHES_START'
const FETCH_CLOTHES_SUCCES='FETCH_CLOTHES_SUCCES'
const FETCH_CLOTHES_FAIL='FETCH_CLOTHES_FAIL'


const initialState={
    
}

export  const clothesReduser=(state= initialState, action)=>{
    return state
}


export const fetchCloses =()=>async dispatch =>{
    dispatch({
        type: FETCH_CLOTHES_START
    })
    try{
        const clothes= await fetchClosesApi()
        dispatch({
            type: FETCH_CLOTHES_SUCCES,
            payload: clothes
        })
    } catch(err) {
        dispatch({
            type: FETCH_CLOTHES_FAIL,
            payload: err,
            error: true
        })

    }
}