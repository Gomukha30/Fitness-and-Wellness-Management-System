import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './footer';

function FitnessVideos() {
  // Dummy list of fitness videos
  const videos = [
    { id: 1, title: 'Cardio Workout', url: 'https://www.youtube.com/embed/a-V4Or5xyis?si=ISu7qeDs8TrXFZsd' },
    { id: 2, title: 'Yoga for Beginners', url: 'https://www.youtube.com/embed/1tHZ-hUH2P8?si=W2SZkr3iMbRfHvFV' },
    { id: 3, title: 'Yoga for Beginners', url: 'https://www.youtube.com/embed/a-V4Or5xyis?si=ISu7qeDs8TrXFZsd' },
    { id: 4, title: 'Cardio Workout', url: 'https://www.youtube.com/embed/onLTHQ1KE50?si=AUebm9Ls37qEkDlj' },
    { id: 5, title: 'Yoga for Beginners', url: 'https://www.youtube.com/embed/0zhvUV1bAVQ?si=Tg_5y5V6P-WKhJup' },
    { id: 6, title: 'Cardio Workout', url: 'https://www.youtube.com/embed/c0VxUFHdYzs?si=3uE5_b4h49s0DCHM' },
    { id: 7, title: 'Yoga for Beginners', url: 'https://www.youtube.com/embed/1tHZ-hUH2P8?si=W2SZkr3iMbRfHvFV' },
    { id: 8, title: 'Cardio Workout', url: 'https://www.youtube.com/embed/0zhvUV1bAVQ?si=Tg_5y5V6P-WKhJup' },
    { id: 9, title: 'Yoga for Beginners', url: 'https://www.youtube.com/embed/a-V4Or5xyis?si=ISu7qeDs8TrXFZsd' },
    // Add more videos here
  ];
  return (
    <>
      <Navbar />
      
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">Fitness Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-gray-100 p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold mb-2 m-2">{video.title}</h3>
              <div className="aspect-w-16 aspect-h-9">
              <iframe width="400" height="200" src="https://www.youtube.com/embed/a-V4Or5xyis?si=ISu7qeDs8TrXFZsd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              <iframe width="400" height="200" src="https://www.youtube.com/embed/1tHZ-hUH2P8?si=W2SZkr3iMbRfHvFV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              <iframe width="400" height="200" src="https://www.youtube.com/embed/c0VxUFHdYzs?si=3uE5_b4h49s0DCHM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FitnessVideos;
