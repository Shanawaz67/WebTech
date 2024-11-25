import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ContextComponentE extends Component {
  render() {
    return (
      <UserConsumer>
        {userName => {
            return <div>Hello {userName}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ContextComponentE