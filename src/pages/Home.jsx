import React from 'react'
import Video from '../comonents/home/Video'
import HomeBottomText from '../comonents/home/HomeBottomText'
import HomeHeroText from '../comonents/home/HomeHeroText'

function home() {
  return (
    <div className='text-white'>
       <div className='h-screen w-screen fixed'>
        <Video />       
       </div>

       <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
            <HomeHeroText />
            <HomeBottomText />
       </div>
      
    </div>
  )
}

export default home