import React, { Component } from 'react'
import RefsCCChild from './RefsCCChild'

class RefsCCParent extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef()
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <RefsCCChild ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    )
  }
}

export default RefsCCParent