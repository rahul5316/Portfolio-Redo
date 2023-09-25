import '../../loader.css';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      navigate('/homepage');
    }, 3500)
  }, [navigate])

  return (
    <div id="loader-wrapper">
      <div id="loader">
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>
     </div>
  );

}