import React, {useState, useEffect, useRef} from 'react'
import './Footer.css'
import { useDataLayerValue } from '../../DataLayer'
import { PlayCircleOutline } from '@mui/icons-material'
import { PauseCircleOutlined } from '@mui/icons-material'
import { SkipPrevious } from '@mui/icons-material'
import { SkipNext } from '@mui/icons-material'
import { Shuffle } from '@mui/icons-material'
import { Repeat } from '@mui/icons-material'
import { PlaylistPlay } from '@mui/icons-material'
import { VolumeDown } from '@mui/icons-material'
import { Grid, Slider } from '@mui/material'
import { type } from '@testing-library/user-event/dist/type'

const Footer = () => {
  const[{selectedTrack, isPlaying, currentPlaylist, initialPlaylist, selectedTrackIndex} , dispatch] = useDataLayerValue()
  const audioRef = useRef()

  var Playlist = null;
  if(currentPlaylist){ Playlist = currentPlaylist }
  else { Playlist = initialPlaylist }

  const artists = []
  console.log(selectedTrack)

  if(selectedTrack){ 
    selectedTrack?.artists.map((artist, index)=>{ artists[index] = artist.name });
  }

  let trackImage = selectedTrack?.album?.images[2]?.url
  if(!trackImage) { trackImage = "https://www.savisingingactor.com/wp-content/uploads/2014/08/musicnotes-thumb-400x400-335656.jpg" }


  const updatePlaybar = () => {
    const duration = audioRef.current.duration;
    const ct = audioRef.current.currentTime;

    const progress = (ct / duration)*100;
    dispatch({
      type: 'SET_SELECTED_TRACK',
      selectedTrack: {...selectedTrack, progress: progress, duration: duration }
    })
  }

  const playPause = () => {
    dispatch({
      type: 'SET_ISPLAYING',
      isPlaying: !isPlaying
    });
  }

  const playPrevious = () => {
    const playlistLength = Playlist?.tracks?.items.length;

    if(selectedTrackIndex === 0){
      dispatch({
        type: 'SET_SELECTED_TRACK',
        selectedTrack: Playlist?.tracks?.items[ playlistLength - 1]?.track
      })
      dispatch({
        type: 'SET_SELECTED_TRACK_INDEX',
        selectedTrackIndex: playlistLength - 1
      })
    }
    else{
      dispatch({
        type: 'SET_SELECTED_TRACK',
        selectedTrack: Playlist?.tracks?.items[ selectedTrackIndex - 1]?.track
      })
      dispatch({
        type: 'SET_SELECTED_TRACK_INDEX',
        selectedTrackIndex: selectedTrackIndex - 1
      })
    }
  }

  const playNext = () => {
    const playlistLength = Playlist?.tracks?.items.length;

    if(selectedTrackIndex === playlistLength - 1){
      dispatch({
        type: 'SET_SELECTED_TRACK',
        selectedTrack: Playlist?.tracks?.items[0]?.track
      })
      dispatch({
        type: 'SET_SELECTED_TRACK_INDEX',
        selectedTrackIndex: 0
      })
    }
    else{
      dispatch({
        type: 'SET_SELECTED_TRACK',
        selectedTrack: Playlist?.tracks?.items[ selectedTrackIndex + 1]?.track
      })
      dispatch({
        type: 'SET_SELECTED_TRACK_INDEX',
        selectedTrackIndex: selectedTrackIndex + 1
      })
    }
  }


  useEffect(() => {
    if(selectedTrack && isPlaying){
      audioRef.current.play();
      console.log("playing song")
    }
    else{
      audioRef.current.pause();
    }
  }, [isPlaying, selectedTrack])
  

  return (
    <div className='footer'>
      <div className='footer-left'>
        <img src={trackImage} alt='' />

        <div className='footer__songInfo'>
          <p className='song-name'>{selectedTrack?.name}</p>
          <p className='artists'>{artists.join(', ')}</p>
        </div>

      </div>

      <audio ref={audioRef} src={selectedTrack?.preview_url} onTimeUpdate={updatePlaybar} />
      <div className='footer-center'>
        <div className='playbar-box'>
          <div className='playbar' style={{width:`${selectedTrack?.progress}%`}}></div>
        </div><br/>

        <div className='footer-control'>
          <div className='footer__icon'><Shuffle /></div>
          <div className='footer__icon' onClick={playPrevious} ><SkipPrevious /></div>
          <div className='footer__icon' onClick={playPause} >{isPlaying? (<PauseCircleOutlined fontSize='large'/>) : (<PlayCircleOutline fontSize='large'/>)}</div>
          <div className='footer__icon' onClick={playNext} ><SkipNext/></div>
          <div className='footer__icon'><Repeat/></div>
        </div>
      </div>

      <div className='footer-right'>
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlay/>
          </Grid>
          <Grid item>
            <VolumeDown/>
          </Grid>
          <Grid item xs>
            <Slider/>
          </Grid>
        </Grid>
      </div>

    </div>
  )
}

export default Footer
