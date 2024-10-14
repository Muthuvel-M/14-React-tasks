import React, { useState } from 'react';

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  return (
    <div>
      {/* Cr using if statement */}
      <Greeting isLoggedIn={isLoggedIn} />

      {/* Cr using ternary operator */}
      <button className='btn1' onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log out' : 'Log in'}
      </button>

      {/* Cr using && operator */}
      <Notification hasNewMessage={hasNewMessage} />
      <button className='btn2' onClick={() => setHasNewMessage(!hasNewMessage)}>
        Click to see..
      </button>
    </div>
  );
}

function Greeting(props) {
  if (props.isLoggedIn) {
    return <h1 className='wb'>Welcome back!</h1>;
  } else {
    return <h1 className='wb'>Please sign in.</h1>;
  }
}

function Notification(props) {
  return (
    <div className='msg'>
      {props.hasNewMessage && <h2>You have new messages!</h2>}
      {!props.hasNewMessage && <h2>No new messages.</h2>}
    </div>
  );
}

export default Dashboard;
