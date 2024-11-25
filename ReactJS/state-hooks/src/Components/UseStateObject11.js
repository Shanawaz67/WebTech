import React, { useState } from 'react'

function UseStateObject11() {
    const [name,setName] = useState({firstName :"" ,  lastName :""})
  return (
    <div>
       <form>
       <input type='text' value={name.firstName} onChange={e => setName({...name,firstName:e.target.value}) }/>
        <input type='text' value={name.lastName} onChange={e => setName({...name,lastName:e.target.value})}/><br/>
        <h1>User First Name:{name.firstName}</h1>
        <h1>User Last Name:{name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
       </form>
    </div>
  )
}

export default UseStateObject11