import React, { Component } from 'react'

export class UpdatingLCB extends Component {
    static getDerivedStateFromProps(props,state){
        console.log("Updating LCB getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(){
        console.log("Updating LCB shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Updating LCB getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("Updating LCB componentDidUpdate");
    }
  render() {
    console.log("Updating LCB render");
    return (
        <div>
            <div>UpdatingLCB</div>
            
        </div>
    )
  }
}

export default UpdatingLCB