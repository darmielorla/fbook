import React from 'react'
import './leftbar.css'
import {FaUserFriends} from 'react-icons/fa'
import {MdGroups} from 'react-icons/md'
import {MdOutlineEmojiFlags} from 'react-icons/md'
import { users } from '../../../Dummydata'
import CloseFriends from '../../../closefriends/CloseFriends'

const leftbar = ({user}) => {
  return (
    <div className='leftbarContainer'>
       
        <div className='friends'>
        <FaUserFriends />
        <h3>Friends</h3>

        </div>
        <div className='friends'>
        <MdGroups />
        <h3>Groups</h3>

        </div>
        <div className='friends'>
        <MdOutlineEmojiFlags />
        <h3>Pages</h3>

        </div>
        <div className='friends'>
        <FaUserFriends />
        <h3>Friends</h3>

        </div>
        <div className='friends'>
        <FaUserFriends />
        <h3>Friends</h3>

        </div>
        <div className='friends'>
        <FaUserFriends />
        <h3>Friends</h3>

        </div>
        <div className='button'>
            <button>See more</button>
            <hr />

        </div>
        <div className='online'>
            {users.map((p)=>{
                <CloseFriends key={p.id} user={p} />
            })}

        </div>
    
        
    </div>
  )
}

export default leftbar