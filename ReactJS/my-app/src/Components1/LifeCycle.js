import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';

class LifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "Shannu"
        }
        console.log("LifeCycleA constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA static getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LifeCycleA componentDidMount");
    }
  render() {
    console.log("LifeCycleA render")
    return (
        
      <div>
        <h1>LifeCycle</h1>
        <LifeCycleB />
      </div>
      
    )
  }
}

export default LifeCycle