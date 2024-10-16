import React, { useState } from 'react';
import './App.css';

function App() {

  //array to randomly choose a message from
  const messages = [
    "Hello",
    "Hiya",
    "Hey",
    "BOO",
    "👻"
  ];

  //declare a state variable "count" with an initial value of 0
  const [count, setCount] = useState(0);
  const [message, updateHello] = useState("Yo");

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

        {/* Added button to update new header text on click */}
        <button
          onClick={updateMessage}
        >
          Update Message
        </button>

      </div>

      <div>
        <h1 id="hello-header" style={{ textAlign: "center" }}>
          {message}, from App.js!
        </h1>
      </div>
    </>
  );

  //callback for updateHello hook
  function updateMessage() {
    updateHello(messages[Math.floor(Math.random() * messages.length)]);
  }

}

export default App;
