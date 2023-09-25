import "../../styles/helloAnimation.scss";
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Hello() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/homepage');
    }, 2000);

    // Cleanup function to clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="hello-component">
      <h1>
        <span>W</span>
        <span>E</span>
        <span>L</span>
        <span>C</span>
        <span>O</span>
        <span>M</span>
        <span>E</span>
      </h1>
    </div>
  );
}
