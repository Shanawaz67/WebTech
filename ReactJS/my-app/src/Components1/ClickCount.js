import React, { Component } from 'react'

export class ClickCount extends Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    incrementCount = () => {
        this.setState( prevState => {
            return{count : prevState.count+1}
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default ClickCount