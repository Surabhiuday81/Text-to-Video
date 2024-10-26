// src/components/VideoBackground.js
import React from 'react';

const VideoBackground = ({ videoUrl }) => {
  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1, 
  };

  return (
    <video style={backgroundStyle} autoPlay loop muted>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoBackground;
