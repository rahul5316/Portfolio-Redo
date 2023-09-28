import '../../styles/loader.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loader({ onLoaded }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    setTimeout(() => {
      navigate('/hello');
      onLoaded(); // Call the onLoaded function once the loading has finished
    }, 3500);
  }, [navigate, onLoaded]);

  return (
    <div className="animate">
      <div className="pacman"></div>
      <div className="dot"></div>
      <div className="dots"></div>
    </div>
  );
}
