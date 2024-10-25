import React from 'react'
import { VideoContainer } from './VideoContainer'


const VideoContainerParent = React.memo(({movie}) => {
    
    if (!movie) return;
  return (
    <VideoContainer movie={movie[Math.floor(Math.random()*20)]}/>
  )
})

export default VideoContainerParent