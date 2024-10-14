import React from 'react';
import { useNavigate } from 'react-router-dom';

const Team = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
      };
  return (
    <div className='home'>
      <h1 className='teams'>Our Team</h1>
      <p>Meet our awesome team!</p>
      <button onClick={goToHome}>Go to Home</button>
    </div>
  );
}

export default Team;
