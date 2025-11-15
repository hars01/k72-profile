import React from 'react'

function Video() {
  return (
    <div className='h-full w-full'>
        {/* <video className='h-full w-full object-cover' autoPlay loop muted src="https://download-video-ak.vimeocdn.com/v3-1/playback/36bc59b8-6671-4358-abc2-15555fc6ae59/69496b2d?__token__=st=1763219061~exp=1763222661~acl=%2Fv3-1%2Fplayback%2F36bc59b8-6671-4358-abc2-15555fc6ae59%2F69496b2d%2A~hmac=18ff0ea9be91189af9af1d4f9a51e3b950c3cc19ca6ee0c8a37aa9890c6207b0&r=dXMtZWFzdDE%3D"></video> */}
        <video className='h-full w-full object-cover' autoPlay loop muted src="../../../public/video.mp4"></video>

    </div>
  )
}

export default Video