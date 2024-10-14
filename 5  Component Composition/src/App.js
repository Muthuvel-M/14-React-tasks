import React from 'react';
import withLoading from './withLoading'; // Import the HOC
import DataDisplay from './Component/DataDisplay'; // Import the Display Component

// Wrapping DataDisplay with the HOC
const EnhancedDataDisplay = withLoading(DataDisplay);

// Main App Component
const App = () => {
  return (
    <div className='data'>
      <EnhancedDataDisplay  data="Here is some sample data!" />
    </div>
  );
};

export default App;
