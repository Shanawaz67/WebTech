import React from 'react'

function UseCBButton({handleClick,children}) {
  return (
    <div>
        <button onClick={handleClick}>{children}</button>
    </div>
  )
}

export default React.memo(UseCBButton)