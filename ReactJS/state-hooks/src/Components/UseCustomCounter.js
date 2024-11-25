import React, { useState } from 'react'
import useCounter from './useCounter'

function UseCustomCounter() {

    const [count,incrementCount,decrementCount,resetCount] =useCounter(10,10)

  return (
    <div>
        <h1>Counter - {count}</h1><br/>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={resetCount}>Reset</button>
    </div>
  )
}

export default UseCustomCounter