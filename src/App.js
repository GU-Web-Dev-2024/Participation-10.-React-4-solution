import React, { useState } from 'react';
import './App.css';

function App() {

  //declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);

  let message = "Hello from App.js!";

  return (
    <>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>
          Counter: {count}
        </h1>
        <button
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

      </div>

      <div>
        <h1 id="hello-header" style={{ textAlign: "center" }}>
          {message}
        </h1>
      </div>
    </>
  );
}

export default App;
