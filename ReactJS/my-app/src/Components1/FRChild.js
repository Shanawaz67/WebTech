import React from 'react'

// function FRChild() {
//   return (
//     <div>
//         <input type='text'/>
//     </div>
//   )
// }

const FRChild = React.forwardRef((props,ref) => {
    return (
        <div>
            <input type='text' ref={ref}/>
        </div>
      )
})

export default FRChild