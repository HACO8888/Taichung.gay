"use client"

import React, { useRef, useState } from 'react';

export default function Home() {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);

  return isPlay ?
    <video className="block w-[100dvw] h-[100dvh]"
      playsInline
      autoPlay
      loop
      ref={videoRef}
    >
      <source src="/videos.webm" type="video/mp4" />
    </video>
    :
    <div className='w-[100dvw] h-[100dvh] flex'>
      <button className='mx-auto my-auto bg-white py-3.5 px-7 rounded-full text-black font-extrabold text-3xl' onClick={() => setIsPlay(true)}>點擊查看內容</button>
    </div>
}