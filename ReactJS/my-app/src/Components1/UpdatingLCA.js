import React, { Component } from 'react'
import UpdatingLCB from './UpdatingLCB';

export class UpdatingLCA extends Component {
    static getDerivedStateFromProps(props,state){
        console.log("Updating LCA getDerivedStateFromProps");
        return null;
    }
    shouldComponentUpdate(){
        console.log("Updating LCA shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Updating LCA getSnapshotBeforeUpdate");
        return null;
    }
    componentDidUpdate(){
        console.log("Updating LCA componentDidUpdate");
    }
    changeState = () => {
        this.setState({
            name : "Code Evolution"
        })
    }
  render() {
    console.log("Updating LCA render");
    return (
        <div>
            <div>UpdatingLCA</div>
            <button onClick={this.changeState}>Change State</button>
            <UpdatingLCB />
        </div>
    )
  }
}

export default UpdatingLCA