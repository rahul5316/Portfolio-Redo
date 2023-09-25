import '../loader.css';
import $ from 'jquery';
import React, { useEffect, useState } from 'react';

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3500)
  }, [])

  return (
    <>
      {isLoading ? (
        <div id="loader-wrapper">
          <div id="loader">
            <div className="loader-section section-left"></div>
            <div className="loader-section section-right"></div>
          </div>
        </div>
      ) : (
        <div id="content">
          <h1>Hi! I am Rahul!</h1>
        </div>
      )}
    </>

  );

}