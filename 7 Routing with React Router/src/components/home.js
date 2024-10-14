import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const goToContact = () => {
        navigate('/contact');
      };
      const goToAbout = () => {
        navigate('/about');
      };
  return (
    <div className='home'>
      <h1 >Home Page</h1>
      <p >Welcome to the home page!</p>
      <button  onClick={goToContact}>Go to Contact</button>
      <button  onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;
