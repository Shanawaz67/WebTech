import React,{useContext} from 'react'
import UCComponentE from './UCComponentE'
import { UserContext,UserChannel } from '../App'

function UCComponentD() {
    const user=useContext(UserContext)
    const channel=useContext(UserChannel)
  return (
    <div>
        {user}-{channel}
    </div>
  )
}

export default UCComponentD