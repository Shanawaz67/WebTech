import React from 'react'

function UseCBTitle() {
    console.log("Rendering Title");
  return (
    <div>
        <h1>Title UseCallBack Function</h1>
    </div>
  )
}

export default React.memo(UseCBTitle)