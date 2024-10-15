import React, { useState } from "react";
import "./App.css";  // Import the CSS file
import GreetingMemo from "./components/GreetingMemo";
import SumComponent from "./components/SumComponent";
import ParentCallback from "./components/ParentCallback";
import LargeList from "./components/LargeList";
import LazyImageLoaded from "./components/LazyImageLoaded";

const App = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  const addNumber = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNumbers([...numbers, randomNum]);
  };

  return (
    <div className="app-container">
      <h1>Performance Optimization with React</h1>

      <section>
        <h2>1. Memoized Component with React.memo()</h2>
        <div className="greeting-memo">
          <GreetingMemo name="Muthuvel" />
        </div>
      </section>

      <section>
      <h2>2. Memoized Calculation with useMemo()</h2>
        <div className="sum-section">
          <div className="sum-component">
            <SumComponent numbers={numbers} />
          </div>
          <button onClick={addNumber}>Add Random Number</button>
        </div>>
      </section>

      <section>
        <h2>3. Memoized Callback with useCallback()</h2>
        <div className="parent-component">
          <ParentCallback />
        </div>
      </section>

      <section>
        <h2>4. List Virtualization with React Virtualized</h2>
        <div className="large-list">
          <LargeList />
        </div>
      </section>

      <section>
        <h2>5. Lazy Loading Images</h2>
        <div className="lazy-image-loaded">
          <LazyImageLoaded />
        </div>
      </section>
    </div>
  );
};

export default App;
