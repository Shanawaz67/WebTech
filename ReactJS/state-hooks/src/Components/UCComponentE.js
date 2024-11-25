import React from 'react'
import {UserContext,UserChannel} from '../App'

function UCComponentE() {
  return (
    <div>
        <UserContext.Consumer>
            {
                user => {
                    return(
                        <div>
                            <UserChannel.Consumer>
                                {
                                    channel => {
                                        return <div>UserContext {user},UserChannel {channel}</div>
                                    }
                                }
                            </UserChannel.Consumer>
                        </div>
                    )
                }
            }
        </UserContext.Consumer>
    </div>
  )
}

export default UCComponentE