import React, { useCallback, useState } from 'react'
import UseCBCount from './UseCBCount'
import UseCBTitle from './UseCBTitle'
import UseCBButton from './UseCBButton'

function UseCBParent() {

    const [age,setAge] = useState(23)
    const [sal,setSal] = useState(15000)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    },[age])
    const incrementSal = useCallback(() => {
        setSal(sal + 1000)
    },[sal])
  return (
    <div>
        <UseCBTitle />
        <UseCBCount text="Age" count={age}/>
        <UseCBButton handleClick={incrementAge}>Increment Age </UseCBButton>
        <UseCBCount text="Sal" count={sal}/>
        <UseCBButton handleClick={incrementSal}>Increment Sal </UseCBButton>
    </div>
  )
}

export default UseCBParent