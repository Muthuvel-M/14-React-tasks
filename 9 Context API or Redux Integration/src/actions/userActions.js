// src/actions/userActions.js

export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

// Action Creators
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});
