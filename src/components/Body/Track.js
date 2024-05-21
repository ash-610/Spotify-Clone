import React from 'react'
import './Track.css'
import { useDataLayerValue } from '../../DataLayer'

const Track = ({track , index}) => {
  const[{isPlaying} , dispatch] = useDataLayerValue()
  
  const artists = []
  track?.artists.map((artist, index)=>{ artists[index] = artist.name })

  let trackImage = track?.album?.images[2]?.url
  if(!trackImage) { trackImage = "https://www.savisingingactor.com/wp-content/uploads/2014/08/musicnotes-thumb-400x400-335656.jpg" }

  const selectTrack = () => {
    dispatch({
      type: 'SET_SELECTED_TRACK',
      selectedTrack: track
    })
    dispatch({
      type: 'SET_SELECTED_TRACK_INDEX',
      selectedTrackIndex: index
    })

    dispatch({
      type: 'SET_ISPLAYING',
      isPlaying: true
    })

  }

  return (
    <div className='track' onClick={selectTrack}>
      <div className='name-img'>
        <p className='index' >{index + 1}</p>
        <img src={trackImage} alt='' />
        
        <div>
          <p className='track-name'>{track?.name}</p>
          <p className='artists-name'>{artists.join(', ')}</p>
        </div>
      </div>
      
      <div className='album'>
        <p>{track?.album?.name}</p>
      </div>
    </div>
  )
}

export default Track
