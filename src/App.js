import './App.css';
import React, { useState, useEffect } from 'react';
import data from './data.json';
import Blogs from './Components/Blogs';

function App() {
  let images = [
    'https://cdn.britannica.com/32/93932-050-B213E0FB/ocean-water-beach-The-Bahamas-Grand-Bahama.jpg',
    'https://wallpapers.com/images/featured/beautiful-mountain-pictures-wfvd4x42htesrnyp.jpg',
    'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?cs=srgb&dl=pexels-bri-schneiter-28802-346529.jpg&fm=jpg',
    'https://cdn.pixabay.com/photo/2024/05/22/16/37/seagull-8781110_1280.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [blogData, setBlogData] = useState(null);

  const rotateImages = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(rotateImages, 5000);
    return () => clearInterval(interval);
  }, []);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setBlogData(data);
  }, []);

  return (
    <>
      <div className="landing-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
      </div>

      <div className="landing-page">

        <div className="landing-content" style={{ transform: `translateY(${-scrollPosition / 1.5}px) translateX(-50%)` }}>
          <div className="line">
            <div></div>
            <h5>A hiking guide</h5>
          </div>
          <h2>Be prepared for the<br /> mountains and beyond</h2>
          <h6 onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: 'smooth' }) }}>scroll down &#8595;</h6>
        </div>
      </div>

      {blogData && blogData.map((e) => <Blogs key={e.id} data={e} />)}

    </>
  );
}

export default App;
