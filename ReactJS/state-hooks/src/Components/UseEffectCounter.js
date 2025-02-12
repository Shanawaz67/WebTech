import React, { useEffect, useState } from 'react'

function UseEffectCounter() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('')
    useEffect(() => {
        console.log("Upadated Name");
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>Click {count} Times</button>
    </div>
  )
}

export default UseEffectCounter