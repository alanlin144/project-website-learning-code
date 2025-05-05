import React from 'react'
import { useState, useRef } from 'react';

const Home = () => {

  const [sound, setSound] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = sound;
      videoRef.current.volume = sound ? 0 : 1;
    }
    setSound(!sound);
  };

  return (
    <main className='w-screen h-fit min-h-screen bg-black'>

      {/* Button */}
      <button onClick={handleClick} className='flex items-center justify-center absolute top-30 right-15 w-12 h-12 rounded-full bg-white cursor-pointer font-bold z-1'>
        <img 
          src={
            sound
              ? '/src/assets/icons/sound-on.png'
              : '/src/assets/icons/sound-off.png'
          }
          alt={sound ? 'icon-sound-on' : 'icon-sound-off'}
          className='w-8 h-8 rounded-full'
        />
      </button>

      {/* Video */}
      <section aria-labelledby="video-black-hole">
        <figure className='block w-full h-screen'>
          <video
            ref={videoRef}
            className='w-full h-full object-cover'
            autoPlay    
            muted        
            loop
          >
            <source src="/src/assets/videos/black-hole.mp4" type="video/mp4" />
            <span>Browser do not support the file.mp4</span>
          </video>
        </figure>
      </section>
    </main>
  )
}

export default Home