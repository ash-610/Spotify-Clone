// client-id = d088cdb71f5b4b698819e06024af1648
import React, { useState, useEffect } from 'react';
import Login from "./components/Login";
import Player from "./components/Player";
import {getTokenFromUrl} from "./components/spotify";
import spotifyWebApi from 'spotify-web-api-js'
import { useDataLayerValue } from './DataLayer';
import './App.css';
import { type } from '@testing-library/user-event/dist/type';


export default function App() {
  const [{ user, token , selectedPlaylistId }, dispatch] = useDataLayerValue();

  const spotify = new spotifyWebApi();

  
  useEffect(() => {
    const hashVal = getTokenFromUrl();
    window.location.hash = "";
    const _token = hashVal.access_token;
      
    if(_token){

      dispatch({
        type : 'SET_TOKEN',
        token : _token
      })

      const user = spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {

        dispatch({
          type : 'SET_USER',
          user : user
        })
      })

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : 'SET_PLAYLISTS',
          playlists : playlists
        })

        const id = playlists?.items[0]?.id
        dispatch({
          type: 'SET_PLAYLIST_ID',
          selectedPlaylistId: id
        })

        if(id){
          spotify.getPlaylist(id).then((response)=>{
            dispatch({
              type: 'SET_INITIAL_PLAYLIST',
              initialPlaylist: response
            })
          })
        }
        
      })


    }

  },[]);

  


  return (
    <div>
      { token ? <Player spotify={spotify} />  :  <Login/> }
    </div>
  )
};
