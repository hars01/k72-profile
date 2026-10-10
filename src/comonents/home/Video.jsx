const videoUrl =
  'https://res.cloudinary.com/dupnbyhjc/video/upload/q_auto:eco,f_auto,w_1920,c_limit/v1791662043/video_wlykvj.mp4';
const posterUrl =
  'https://res.cloudinary.com/dupnbyhjc/image/upload/v1780090459/myLogo2_snzvjh.png';

function Video() {
  return (
    <video
      className="h-full w-full object-cover"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster={posterUrl}
      src={videoUrl}
    />
  );
}

export default Video;
