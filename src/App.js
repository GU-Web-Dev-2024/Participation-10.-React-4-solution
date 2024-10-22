import React, { useState } from 'react';
import './App.css';

function App() {

  // An array of messages that will be randomly chosen and displayed when a button is clicked.
  const messages = [
    "Hello",
    "Hiya",
    "Hey",
    "BOO",
    "👻"
  ];

  // Declare a state variable "count" initialized to 0.
  // "count" will track the current count, and "setCount" will be used to update it.
  const [count, setCount] = useState(0);

  // Declare a second state variable "message" initialized to "Yo".
  // "message" holds the current displayed message, and "updateHello" will be used to update it.
  const [message, updateHello] = useState("Yo");

  // Return the JSX that defines the structure of the component.
  return (
    // The <></> fragment allows us to return multiple sibling elements since React components
    // must return only one parent element. Fragments don’t add extra nodes to the DOM.
    <>
      <div style={{ textAlign: "center", padding: "50px" }}>
        {/* Display the current value of the counter (count) */}
        <h1>
          Counter: {count}
        </h1>

        {/* Button to increment the count. When clicked, setCount is called with the current count + 1 */}
        <button
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        {/* Button to decrement the count. When clicked, setCount is called with the current count - 1 */}
        <button
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        {/* Reset button to set the count back to 0 */}
        <button
          onClick={() => setCount(0)}
          style={{ marginLeft: '10px' }}
        >
          Reset
        </button>

        {/* Button to update the message displayed below.
            When clicked, the updateMessage function is called to choose a random message */}
        <button
          onClick={updateMessage}
        >
          Update Message
        </button>

      </div>

      {/* Second section displaying the current "message" */}
      <div>
        <h1 id="hello-header" style={{ textAlign: "center" }}>
          {/* Dynamically render the "message" state value followed by "from App.js!" */}
          {message}, from App.js!
        </h1>
      </div>
    </>
  );

  // Function to update the "message" state.
  // This function picks a random message from the "messages" array.
  function updateMessage() {
    // Choose a random index from the messages array and set the new message using updateHello.
    updateHello(messages[Math.floor(Math.random() * messages.length)]);
  }

}

export default App;
