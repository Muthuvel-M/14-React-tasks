import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToAbout = () => {
    navigate('/about');
  };

  return (
    <div className='home'>
      <h1 >Contact Page</h1>
      <button onClick={goToHome}>Go to Home</button>
      <button  onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Contact;
