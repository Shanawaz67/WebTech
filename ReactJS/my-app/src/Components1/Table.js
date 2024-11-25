import React, { Component } from 'react'
import Column from './Column'

export class Table extends Component {
  render() {
    return (
      <React.Fragment>
        <table>
           <tbody>
                <tr>
                    <Column />  
                </tr>
           </tbody>
        </table>
      </React.Fragment>
    )
  }
}

export default Table