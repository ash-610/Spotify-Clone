import React, { useEffect } from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from '../../DataLayer'
import Track from './Track'

const Body = ({spotify}) => {
  const[{ selectedPlaylistId,  initialPlaylist, currentPlaylist }, dispatch] = useDataLayerValue()
  var Playlist = null;

  if(currentPlaylist){ Playlist = currentPlaylist }
  else { Playlist = initialPlaylist }

  return (
    <div className='body'>
      <Header spotify={spotify}/>

      <div className='main-body'>
        <div className='playlist-header'>
          <img src={Playlist?.images[1]?.url} alt='playlist Image'/>
          <div>
            <p>Playlist</p>
            <h1>{Playlist?.name}</h1>
            <div className='owner'>
              <h4>{Playlist?.owner?.display_name}</h4> |
              <p>{Playlist?.tracks?.items?.length + " songs"}</p>
            </div>
          </div>
        </div>

        <div className='title'>
          <p>Title</p>
          <p>Album</p>
        </div>

        <div className='songs-box'>
         { Playlist?.tracks?.items.map((item , index)=>( <Track key={index} track={item.track} index={index} /> ))}
        </div>
      
      </div>

    </div>
  )
}

export default Body
