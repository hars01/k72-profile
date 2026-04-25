import React from 'react';

function Video() {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      src="/video.mp4"
    />
  );
}

export default Video;
