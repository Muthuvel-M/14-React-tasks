import React, { useMemo } from "react";

const SumComponent = ({ numbers }) => {
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return numbers.reduce((acc, num) => acc + num, 0);
  }, [numbers]);
  return (
    <div>
      <h2>Sum of Numbers</h2>
      <p>{sum}</p>
    </div>
  );
};
export default SumComponent;
