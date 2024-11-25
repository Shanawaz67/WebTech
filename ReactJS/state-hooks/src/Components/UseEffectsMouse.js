import React, { useEffect, useState } from 'react'

function UseEffectsMouse() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)

    const logMousePosition = e => {
        console.log("Mouse Overed");
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() => {
        console.log("Used Effect");
        window.addEventListener('mousemove',logMousePosition)
//clean up function in useEffect()
        return () => {
          console.log("Component Unmount");
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
  return (
    <div>
        <h1>X:{x},Y:{y}</h1>
    </div>
  )
}

export default UseEffectsMouse