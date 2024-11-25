import React from 'react'

function InlineCss() {
    const heading ={
        fontSize : '100px',
        color : 'red',
        textAlign: 'center'
        
    }
  return (
    <div><h1 style={heading}>InlineCss</h1></div>
  )
}

export default InlineCss