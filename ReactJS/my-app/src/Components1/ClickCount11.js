import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCount11 extends Component {
  render() {
    const {count,incrementCount} = this.props
    return (
      <button onClick={incrementCount}>{this.props.name} ClickCount11 {count} Times</button>
    )
  }
}

export default withCounter(ClickCount11,10)