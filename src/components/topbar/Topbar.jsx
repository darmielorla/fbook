import React from 'react'
import './topbar.css'
import {BsFillPersonFill} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {AiOutlineMessage} from 'react-icons/ai'

const Topbar = () => {
  return (
    <div className='topbarContainer'>
        <div className='topbarLeft'>
            <h1>Facebook</h1>
        </div>
        <div className='topbarCenter'>
        <AiOutlineSearch className='search'/>
            <input type="text" placeholder='Entername' />
        </div>


        <div className='topbarRight'>
            <div className='timeline'>
                <p>Timeline</p>
                <p>Homepage</p>
            </div>
          <div className='linksIcon'>
          <div className='links'>
           < BsFillPersonFill className='notify'/>
            <span>1</span>
            </div>
            <div className='links'>
           < IoMdNotificationsOutline className='notify'/>
           <span>1</span>

            </div>
            <div className='links'>
           < AiOutlineMessage className='notify'/>
           <span>1</span>

            </div>
          </div>
          <div className='profile'>
            <img src="/assets/download.jpg" alt="profile" />

          </div>
        </div>
    </div>
  )
}

export default Topbar