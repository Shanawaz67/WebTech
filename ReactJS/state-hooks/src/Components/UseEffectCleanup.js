import React, { useState } from 'react'
import UseEffectsMouse from './UseEffectsMouse'

function UseEffectCleanup() {
    const [display,setDisplay] = useState(true)
  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggel Dispaly</button>
        {display && <UseEffectsMouse />}
    </div>
  )
}

export default UseEffectCleanup