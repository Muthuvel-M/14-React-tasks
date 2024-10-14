import React from 'react';

// A simple component that will display data
const DataDisplay = ({ data }) => {
  return (
    <div>
      <h1>Data Loaded</h1>
      <p>{data}</p>
    </div>
  );
};

export default DataDisplay;
