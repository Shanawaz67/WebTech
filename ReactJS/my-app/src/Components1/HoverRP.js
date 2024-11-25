import React, { Component } from 'react'

export class HoverRP extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <h1 onMouseOver={incrementCount}>Hover {count} Times</h1>
    )
  }
}

export default HoverRP