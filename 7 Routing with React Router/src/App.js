import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Team from './components/team';

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
        <li style={{ float: 'right' }}><Link to="/contact">Contact</Link></li>
        <li style={{ float: 'right' }}> <Link to="/about">About</Link></li>
        <li className='a' style={{ float: 'right' }}><Link to="/">Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
        <Route path="team" element={<Team />}/>
        </Route>
        <Route path="/contact" element={<Contact />} />
       
      </Routes>
    </Router>
  );
}

export default App;
