import React, { useReducer,useEffect } from 'react'
import axios from 'axios'

const initialState={
    loading : true,
    post : [],
    error : ""
}

const reducer = (state,action) => {
    switch(action.type){
        case "Fetch-Succuss" : 
            return {
                loading : false,
                post : action.playload,
                error : ""
            }
        case "Fetch-Failed" :
            return {
                loading : false,
                post : {},
                error : "Something went wrong"
            }
        default : 
            return state
    }
}

function DataFetchingUseReducer() {

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => {
           dispatch({type : "Fetch-Succuss",playload:response.data})
        })
        .catch(error => {
           dispatch({type:"Fetch-Failed"})
        })
      })

    const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        {state.loading ? 'loading' : state.post.title}
        {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingUseReducer