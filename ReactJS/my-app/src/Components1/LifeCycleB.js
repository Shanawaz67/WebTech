import React, { Component } from 'react'

class LifeCycleB extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Shannu"
        }
        console.log("LifeCycleB constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB static getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleB componentDidMount");
    }
  render() {
    console.log("LifeCycleB render")
    return (
        
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB