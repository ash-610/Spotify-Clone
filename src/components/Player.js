import React from 'react'
import './Player.css'
import Sidebar from './Sidebar/Sidebar'
import Body from './Body/Body'
import Footer from './Footer/Footer'

const Player = ({spotify}) => {
  return (
    <>
        <div className='player-page'>
            <div className='player-body'>
                <Sidebar spotify={spotify}/>
                <Body spotify={spotify}/>
            </div>
            
            <div className='footer-body'>
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default Player
