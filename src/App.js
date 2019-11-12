import React, { useEffect, useRef } from 'react';
import './App.scss';

const cameraParams = {
  audio: false,
  video: {
    width: { ideal: 1920 },
    height: { ideal: 1080 },
    advanced: [{ facingMode: 'environment' }]
  }
};

const App = () => {
  const vidRef = useRef(null);
  useEffect(() => {
    const vidEl = vidRef.current;
    if (vidEl && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia(cameraParams).then(stream => {
          vidEl.setAttribute('autoplay', '');
          vidEl.setAttribute('muted', '');
          vidEl.setAttribute('playsinline', '');
          vidEl.srcObject = stream;
          vidEl.play();
      }).catch(err => alert(err.message));
    } else {
      alert('cant access camera');
    }
  }, []);
  return (
    <>
    <h3 className='main--title'>iOS getUserMedia test</h3>
    <div className='main--cnt'>
      <video ref={vidRef} className='main--video'/>
    </div>
    </>
  );
}

export default App;
