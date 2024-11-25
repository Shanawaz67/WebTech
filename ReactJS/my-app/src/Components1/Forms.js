import React, { Component } from 'react'

export class Forms extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
            <label>UserName:</label>
            <input type='text' value={this.state.UserName} onChange={this.handleUserNameChange}></input>
        </div>
        <div>
            <label>Comments:</label>
            <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        <div>
            <label>Topics</label>
            <select value={this.state.topics} onChange={this.handleTopicChange}>
                <option value="React">React</option>
                <option value="Angular">Angular</option>
                <option value="Vue">Vue</option>
                
            </select>
        </div>
        <button type='submit'>Submit</button>
      </form>
    )
  }
  constructor(props){
    super(props)
    this.state ={
        UserName : "",
        comments : "",
        topics : "react"
    }
  }
  handleUserNameChange= (event) => {
    this.setState({
        UserName : event.target.value
    })
  }
  handleCommentsChange = (event) => {
    this.setState({
        comments : event.target.value
    })
  }
  handleTopicChange = (event) => {
    this.setState({
        topics : event.target.value
    })
  }
  handleSubmit = (event) => {
        alert(` ${this.state.UserName} ${this.state.comments} ${this.state.topics}`)
        event.preventDefault()
  }
}

export default Forms