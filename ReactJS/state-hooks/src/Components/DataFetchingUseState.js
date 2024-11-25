import axios from 'axios'
import React,{useEffect, useState} from 'react'

function DataFetchingUseState() {

    const [loading,setLoading] = useState(true)
    const [post,setPost] = useState({})
    const [error,setError] = useState([])
    
  useEffect(() => {
    axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => {
       console.log(response);
       setLoading(false)
       setPost(response.data)
       setError('')
    })
    .catch(error => {
       console.log(error);
       setLoading(false)
       setPost({})
       setError("Something went wrong")
    })
  })
  return (
    <div>
        {loading ? 'loading' : post.title}
        {error ? error : null}
    </div>
  )
}

export default DataFetchingUseState