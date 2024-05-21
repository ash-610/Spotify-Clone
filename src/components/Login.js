import React from 'react'
import "./Login.css"
import {loginUrl} from "./spotify"

const Login = () => {
  return (
    <div className='wrapper'>
        <div className='login'>
        {/*Spotify Logo*/}
        <img src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt='spotify'/>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        </div>
    </div>
  )
}

export default Login
