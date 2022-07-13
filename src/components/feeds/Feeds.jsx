import React from 'react'
import './feeds.css'
import Leftbar from './leftbar/Leftbar'
import Main from './main/Main'
import Rightbar from './rightbar/Rightbar'

const Feeds = () => {
  return (
    <div className='feedsContainer'>
        <Leftbar />
        <Main/>
        <Rightbar />
    </div>
  )
}

export default Feeds