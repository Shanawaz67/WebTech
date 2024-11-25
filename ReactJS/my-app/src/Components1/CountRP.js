import React, { Component } from 'react'

export class CountRP extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <button onClick={incrementCount}>Clicked {count} Times</button>
    )
  }
}

export default CountRP