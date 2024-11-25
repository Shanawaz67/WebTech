import React from 'react'


function CSSStyleSheet(props) {
  const style=props.p1 ? "p1" : ""
  return (
    <div>
        <h1 className={`${style} font`}>Styling Sheet</h1>
    </div>
  )
}

export default CSSStyleSheet