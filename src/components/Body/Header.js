import React, { useRef } from 'react'
import './Header.css'
import Search from '@mui/icons-material/Search'
import { Avatar } from '@mui/material'
import { useDataLayerValue } from '../../DataLayer'

const Header = (spotify) => {
    const[{user, setFocus} , dispatch] = useDataLayerValue();


  return (
    <div className='header'>
      <div className='header-left'>
        <input ref={setFocus} className='search-input' type='text' placeholder='Search Songs or Artists'></input>
        <Search className='search-icon'/>
      </div>

      <div className='header-right'>
        <Avatar sx={{ width: 30, height: 30 }} className='user-pic' src={user?.images[0]?.url} alt='user'/>
        <p>{user?.display_name}</p>
      </div>
    </div>
  )
}

export default Header
