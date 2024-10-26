
import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, width, height }) => {
  return (
    <div className='container-vid'>
        <div className="video-player">
        <div className='react-vid'>
          <ReactPlayer
            url={url}
            width={width}
            height={height}
            controls={true} 
          />
        </div>
        </div>
    </div>
    
  );
};

export default VideoPlayer;
