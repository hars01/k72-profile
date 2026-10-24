const videoUrl =
  'https://res.cloudinary.com/dupnbyhjc/video/upload/v1792868531/WhatsApp_Video_2026-10-25_at_12.29.12_AM_aaf7lg.mp4';
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
