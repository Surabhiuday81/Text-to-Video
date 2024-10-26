// Home.js
import VideoBackground from './VideoBackground';
import Search from './searchbox';
import video from './vid.mp4'
import './Home.css'
import VideoPlayer from './VideoPlayer';
import React from 'react';

const Home = () => {
  const videoUrl = 'https://www.youtube.com/watch?v=HZS5a3cm7zU';
  return (
    <div className='Home'>
      <VideoBackground videoUrl={video} />
        
        <br>
        </br>
        <Search />
        <br>
        </br>
        <VideoPlayer url={videoUrl} width="640px" height="360px" />
    </div>
  );
};

export default Home;
