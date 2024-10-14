/* eslint-disable no-unreachable */

import React from 'react';

function ChildComponent() {
  // Simulate an error
  throw new Error("Oops! Something went wrong.");

  return <h1>This is a Child Component!</h1>;
}

export default ChildComponent;

/*import React from 'react';

function ChildComponent() {
  return <h1>This is a Child Component!</h1>;
}

export default ChildComponent;*/

