import React, { Component } from 'react'
import ContextComponentE from './ContextComponentE'
import UseContext from './UserContext'

class ContextComponentD extends Component {

    
  render() {
    
    return (
      <div>
        ComponetD context {this.context}
        <ContextComponentE />
      </div>
    )
  }
}

ContextComponentD.contextType= UseContext
export default ContextComponentD