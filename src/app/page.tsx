"use client"

import React, { useRef, useEffect } from 'react';

export default function Home() {
  const videoRef = useRef<any>(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play().catch((error: any) => {
          console.log('Autoplay was prevented:', error);
        });
      }
    };
    playVideo();

    // Play video on user interaction as a fallback
    document.addEventListener('click', playVideo);

    return () => {
      document.removeEventListener('click', playVideo);
    };
  }, []);

  return (
    <video id="video" className="block w-[100dvw] h-[100dvh]" ref={videoRef} loop playsInline>
        <source src="/videos.mp4" type="video/mp4" />
    </video>
  );
}
