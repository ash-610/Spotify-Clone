import React from 'react'
import SidebarOptions from './SidebarOptions'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../../DataLayer';

const Sidebar = ({spotify}) => {
    const[{playlists} , dispatch] = useDataLayerValue()

  return (
    <div className='sidebar'>

        <div className='sidebar-links'>
            <div className='spotify-logo'>
                <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify'/>
            </div>

            <SidebarOptions Icon={HomeIcon} title="Home"/>
            <SidebarOptions Icon={SearchIcon} title="Search"/>
            <SidebarOptions Icon={LibraryMusicIcon} title="Your Library"/>

        </div>
        
        <br/>
        
        <strong className='sidebar-title'>PLAYLISTS</strong>
        <hr/>

        <div className='playlists'>

            { playlists?.items?.map((playlist, index) => 
            ( 
            <SidebarOptions key={index} spotify={spotify}  img={playlist?.images[2]?.url} title={playlist.name} playlistId={index}/>
            )
            ) }
            
            
        </div>
    </div>
  )
}

export default Sidebar
