import React, { useEffect, useRef, useState } from 'react'

function UseRefTimer() {

    const [timer,setTimer] = useState(0)
    const intervalTimer = useRef()

    useEffect(() => {
        intervalTimer.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
            clearInterval(intervalTimer.current)
        }
    },[])
  return (
    <div>
        Hook Timer - {timer}
        <button onClick={() => clearInterval(intervalTimer.current)}>Clear Hook Timer</button>
    </div>
  )
}

export default UseRefTimer