import axios from 'axios'
import React,{useEffect, useState} from 'react'

function DataFetching3() {

    const [post,setPost] = useState({})
    const [id,setId] = useState(1)
    const [idButtonClick,setIDButtonClick] = useState(1)

    useEffect(() => {
        axios
         .get(`https://jsonplaceholder.typicode.com/posts/${idButtonClick}`)
         .then(res => {
            console.log(res);
            setPost(res.data)
         })
         .catch(err => {
            console.log(err);
         })
    },[idButtonClick])
    const clickHandler = () => {
        setIDButtonClick(id)
    }
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/><br/>
        <button type='button' onClick={clickHandler}>Fetch Data</button><br/>
        {post.title}
    </div>
  )
}

export default DataFetching3