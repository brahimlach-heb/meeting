import React, { useEffect, useRef, useState } from 'react';
import '../VideoCall.css'; // Import your CSS file

const VideoCallPage = () => {
  const localVideoRef = useRef(null);
  const remoteVideoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const videoCallContainerRef = useRef(null);

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      // Exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    } else {
      // Enter fullscreen
      if (videoCallContainerRef.current && videoCallContainerRef.current.requestFullscreen) {
        videoCallContainerRef.current.requestFullscreen();
      }
    }
  };

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: isCameraOn, audio: true })
      .then((stream) => {
        localVideoRef.current.srcObject = stream;
        // Implement peer-to-peer communication using WebRTC
      })
      .catch((error) => {
        console.error('Error accessing user media:', error);
      });
  }, [isCameraOn]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    localVideoRef.current.srcObject.getAudioTracks().forEach(track => {
      track.enabled = !isMuted;
    });
  };

  const endCall = () => {
    // Implement logic to end the call
  };

  const toggleCamera = () => {
    setIsCameraOn(!isCameraOn);
  };

  return (
    <div className="video-call-container">
      <div className="video-grid">
        <video ref={localVideoRef} autoPlay muted={isMuted} className="local-video" />
        {/*<video ref={remoteVideoRef} autoPlay className="remote-video" />*/}
      </div>
      <div className="controls">
        <button className={`control-button ${isMuted ? 'muted' : ''}`} onClick={toggleMute}>
          {isMuted ? 'Unmute' : 'Mute'}
        </button>
        <button className={`control-button ${isCameraOn ? 'camera-on' : 'camera-off'}`} onClick={toggleCamera}>
          {isCameraOn ? 'Turn Camera Off' : 'Turn Camera On'}
        </button>
        <button className="control-button fullscreen" >
          Toggle Fullscreen
        </button>
        <button className="control-button end-call" onClick={endCall}>
           End Call
        </button>
      </div>
    </div>
  );
};

export default VideoCallPage;
