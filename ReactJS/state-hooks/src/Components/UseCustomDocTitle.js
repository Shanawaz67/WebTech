import React, { useEffect, useState } from 'react'
import useDocTitle from './useDocTitle'

function UseCustomDocTitle() {

    const [count,setCount] = useState(0)
    
   useDocTitle(count)
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>ClickCount-{count}</button>
    </div>
  )
}

export default UseCustomDocTitle