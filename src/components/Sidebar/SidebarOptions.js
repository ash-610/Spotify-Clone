import React from 'react'
import './SidebarOptions.css'
import { useDataLayerValue } from '../../DataLayer'

const SidebarOptions = ({spotify, Icon, title, img, playlistId}) => {
  const [{ playlists }, dispatch] = useDataLayerValue()
  

  const setPlaylistId = (playlistId) => {
    const id = playlists?.items[playlistId]?.id
    dispatch({
      type: 'SET_PLAYLIST_ID',
      selectedPlaylistId: id
    })

    spotify.getPlaylist(id).then((response)=>{
      dispatch({
        type: 'SET_CURRENT_PLAYLIST',
        currentPlaylist: response
      })
    })

  }

  return (
    <div className='options' 
      onClick={()=>{ 
        !Icon && setPlaylistId(playlistId);

      }} 
    >
      { Icon && <Icon/> }
      { img && <img src={img} alt='playlist image'/> }
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarOptions
