import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

import '../../css/model/videoCarousel.css'

export default function VideoCarousel({videos}) 
{
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef = useRef(null);

  // Array of video URLs
  // const videos = [
  //   "https://tesla-cdn.thron.com/delivery/public/video/tesla/53e53703-7693-4439-9236-32e28883964d/bvlatuR/WEBHD/model-s-interior-carousel-1-cinematic-display-mobile-global",
  //   "https://tesla-cdn.thron.com/delivery/public/video/tesla/cfd71d9a-37af-413b-acaa-6a9412b94fb3/bvlatuR/WEBHD/MS-Interior-Carousel-2-Yoke-Mobile",
  //   "https://tesla-cdn.thron.com/delivery/public/video/tesla/9405690c-7318-4d8e-bc33-86f39ea8e4ed/bvlatuR/WEBHD/Model-S-Interior-Carousel-3-Perfect-Environment-Mobile",
  //   "https://tesla-cdn.thron.com/delivery/public/video/tesla/3a278efb-2f36-4ded-ac4f-bcb2636fd9eb/bvlatuR/WEBHD/Model-S-Interior-Carousel-4-Second-Row-Mobile",
  //   "https://tesla-cdn.thron.com/delivery/public/video/tesla/a45a269f-1acf-4022-aa69-0d25518350e2/bvlatuR/WEBHD/MS-Interior-Carousel-5-Gaming-Desktop"
  // ];

  console.log(videos)

  const videoContent = [
    {
        title: "Cinematic Experience", 
        para: "A 17\" touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more"
    },
    {title: "Yoke Steering", para: "A bold new approach gives you a true connection to Model S, offering better steering feel and unobstructed views of your dash and the road ahead. Tap the brake and Model S automatically selects the correct direction to start your trip"},
    {title: "Perfect Environment", para: "Air vents are hidden throughout the cabin, while tri-zone temperature controls, ventilated seats and HEPA filtration deliver the perfect environment"},
    {title: "Redesigned Second Row", para: "Seating for three adults, with extra legroom, headroom and a stowable armrest with integrated storage and wireless charging"},
    {title: "Console-Grade Gaming", para: "Up to 10 teraflops of processing power unlock in-car gaming on-par with today's newest consoles. Play from any seat with wireless controller and headset compatibility"}
  ]

  const handleVideoEnd = () => {
    // Play the next video when the current video ends
    setCurrentVideo((prevVideo) => (prevVideo === videos.length - 1 ? 0 : prevVideo + 1));
  };

  const handlePillClick = (index) => {
    setCurrentVideo(index)
  }

  return (
    <div id="videoCarousel">
      {/* Render the current video */}
      <ReactPlayer
        url={videos[currentVideo]}
        playing={true}
        muted={true}
        onEnded={handleVideoEnd}
        ref={videoRef}
         // Hide the video element
        id="myVideos"
      />
      {/* Render the pills */}
      <div id="pillsVideo">
        {videos.map((video, index) => (
          <div
            key={index}
            style={{
              backgroundColor: index === currentVideo ? "#FFF" : "#5c5e62",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              margin: "0 10px 0 0",
              cursor: "pointer",
              transition: "all 300ms ease-in-out"
            }}
            onClick={() => handlePillClick(index)}
          />
        ))}
      </div>
      {/* Render some text */}
      <div id="videoContent">
        <h3>{videoContent[currentVideo].title}</h3>
        <p>
            {videoContent[currentVideo].para}
        </p>
      </div>
    </div>
  );
};


