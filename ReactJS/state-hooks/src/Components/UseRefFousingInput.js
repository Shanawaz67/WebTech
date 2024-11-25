import React, { useEffect, useRef } from 'react'

function UseRefFousingInput() {

    const inputRef=useRef(null)

    useEffect(() => {
        //Focusing the input
        inputRef.current.focus()
    },[])
  return (
    <div>
        <input ref={inputRef} type='text'/>
    </div>
  )
}

export default UseRefFousingInput