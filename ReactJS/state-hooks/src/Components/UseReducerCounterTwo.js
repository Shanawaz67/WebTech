import React, { useReducer } from 'react'

const initialState={
    firstCounter : 0,
    secondCounter : 10
}
const reducer = (state,action) => {
    switch(action.type){
        case "Increment" :
            return {...state,firstCounter : state.firstCounter+action.value}
        case "Decrement" :
            return {...state,firstCounter : state.firstCounter-action.value}
        case "Increment2" :
            return {...state,secondCounter : state.secondCounter+action.value}
        case "Decrement2" :
            return {...state,secondCounter : state.secondCounter-action.value}
        case "Reset" :
            return initialState
        default :
            return state
    }
}

function UseReducerCounterTwo() {
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
        <div>FirstCount-{count.firstCounter}</div><br/>
        <div>SecondCount-{count.secondCounter}</div>
        <button onClick={() => dispatch({type:"Increment",value:1})}>Increment-1</button>
        <button onClick={() => dispatch({type:"Decrement",value:1})}>Decrement-1</button>
        <button onClick={() => dispatch({type:"Increment",value:5})}>Increment-5</button>
        <button onClick={() => dispatch({type:"Decrement",value:5})}>Decrement-5</button>
        <button onClick={() => dispatch({type:"Increment2",value:1})}>2Increment-1</button>
        <button onClick={() => dispatch({type:"Decrement2",value:1})}>2Decrement-1</button>
        <button onClick={() => dispatch({type:"Reset"})}>Reset</button>
    </div>
  )
}

export default UseReducerCounterTwo