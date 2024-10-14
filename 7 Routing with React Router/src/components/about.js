import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Outlet, Link } from 'react-router-dom';


const About = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/');
    };
    const goToContact = () => {
        navigate('/contact');
      };
      const goToTeam = () => {
        navigate('/team');
      };
  return (
    <div className='home'>
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
      <button onClick={goToHome}>Go to Home</button>
      <button  onClick={goToContact}>Go to Contact</button>
      <nav className='navabt'>
        <Link to="team" onClick={goToTeam}>Our Team</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default About;
