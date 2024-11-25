
import React, { useContext } from 'react'
import { CountContext } from '../App'

function ComponentC() {
    const countContext = useContext(CountContext)
  return (
    <div>
        <div>ComponentC - {countContext.countState}</div>
        <button onClick={() => countContext.countDispatch("Increment")}>Increment</button>
        <button onClick={() => countContext.countDispatch("Decrement")}>Decrement</button>
        <button onClick={() => countContext.countDispatch("Reset")}>Reset</button>
    </div>
  )
}

export default ComponentC