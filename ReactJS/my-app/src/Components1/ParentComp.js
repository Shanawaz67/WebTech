import React, { Component,PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

export class ParentComp extends PureComponent {
    constructor (props){
        super(props)
        this.state={
            name: "Shannu"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name:"Shannu"
            })
        },2000)
    }
  render() {
    console.log("*******Parent Component********");
    return (
      <div>
        <h1>Parent Component</h1>
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
        <MemoComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp