import React from 'react';
import { CountProvider } from '../context/CountContext';
import ChildA from './ChildA';
import ChildB from './ChildB';

function Parent() {
  return (
    <CountProvider>
      <div>
        <ChildA />
        <ChildB />
      </div>
    </CountProvider>
  );
}

export default Parent;
