import React, { Component } from 'react'

export class HoverCountTwo extends Component {

    constructor(props){
        super(props)
        this.state={
            count : 0
        }
    }
    incrementCount= () => {
        this.setState((prevState) => {
            return{count : prevState.count+1}
        })
    }
    
  render() {
    const {count} = this.state
    return (
      <div onMouseOver={this.incrementCount}>HoverCountTwo {count} times</div>
    )
  }
}

export default HoverCountTwo