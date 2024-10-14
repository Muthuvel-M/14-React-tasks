import React, { useState, useEffect } from 'react';

// Higher-Order Component to handle loading state
const withLoading = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate a data fetch with a timeout
      const fetchData = async () => {
        setIsLoading(true);
        // Simulating an API call delay
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsLoading(false);
      };

      fetchData();
    }, []);

    if (isLoading) {
      return <div>Loading...</div>; // Display a loading message or spinner
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoading;
