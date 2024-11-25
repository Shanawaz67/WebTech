import React, { useState } from 'react'

function UseStateArray11() {
    const[items,setItems] = useState([])
    console.log(items);
    const addItem = () => {
        setItems([...items,{
            id : items.length,
            value : Math.floor(Math.random() * 10) + 1
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
                items.map(item => (
                    <li key={item.id}>{item.value}</li>
                        )
                    )
            }
        </ul>
    </div>
  )
}

export default UseStateArray11