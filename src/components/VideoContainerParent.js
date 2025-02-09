import React from 'react'
import { VideoContainer } from './VideoContainer'
import { ShimmerForHomeCard } from './Shimmer';


const VideoContainerParent = React.memo(({movie}) => {
    
    if (!movie) return <div className='sm:h-screen h-[50vh] w-full shimmer'></div>;
  return (
    <VideoContainer movie={movie[Math.floor(Math.random()*20)]}/>
  )
})

export default VideoContainerParent