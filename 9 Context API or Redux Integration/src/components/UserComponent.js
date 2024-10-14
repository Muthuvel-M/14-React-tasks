// src/components/UserComponent.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../actions/userActions';

const UserComponent = () => {
  const [userName, setUserName] = useState('');
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const newUser = { id: Date.now(), name: userName };
    dispatch(addUser(newUser));
    setUserName('');
  };

  const handleRemoveUser = (userId) => {
    dispatch(removeUser(userId));
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter user name"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleRemoveUser(user.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserComponent;
