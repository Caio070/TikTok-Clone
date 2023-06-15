import React, { useRef } from "react";
import "./video.css";

function Video() {
  const videoRef = useRef(null);

  function handdleStart() {
    videoRef.current.play();
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
      ></video>
    </div>
  );
}

export default Video;
