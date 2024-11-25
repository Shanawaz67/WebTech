import React,{useState} from 'react'

function HookCounterTwo() {
    const installvalue=0
    const [count,setCount] = useState(installvalue)
    const incrementFive=() => {
        for(let i=0; i<5; i++){
            setCount(prevNum => prevNum + 1)
        }
    }

  return (
    <div>
        Count {count} <br />
        <button onClick={() => {setCount(installvalue)}}>Reset</button> <br/>
        <button onClick={() => {setCount(prevCount => prevCount+1)}}>Increment</button> <br/>
        <button onClick={ () => {setCount(prevCount =>  prevCount-1)}}>Decrement</button> <br/>
        <button onClick={incrementFive}>Increment 5</button>
    </div>
  )
}

export default HookCounterTwo