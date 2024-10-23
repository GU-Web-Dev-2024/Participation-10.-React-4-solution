// Mole.js

// How did we get state from App.js?
// In React, props allow us to pass data from a parent component to a child component.
// The state `moleMode` and the function `updateMoleMode` are passed from the parent component (App.js) to this Mole component via props.
// This enables the Mole component to access and update the state defined in App.js.
// For more information, see: https://react.dev/learn/sharing-state-between-components

function Mole(props) {
    // The Mole component receives props, which include "moleMode" and "updateMoleMode" from the parent (App.js).
    // These props are used to control whether the app is in Mole Mode and to switch between Mole Mode and Counter Mode.

    // Check if moleMode is true
    if (props.moleMode) {
        // If moleMode is true, render the Mole Mode UI
        return (
            <>
                <div>
                    <h1>
                        Mole Mode!
                    </h1>
                </div>
                <div>
                    {/* Display the current mode (either Mole Mode or Counter App Mode) */}
                    <span>
                        Current Mode: {props.moleMode ? "Mole Mode" : "Counter App Mode"}
                    </span>

                    {/* Button to disable Mole Mode.
                        When clicked, this button calls props.updateMoleMode to set moleMode to false,
                        thereby switching back to Counter Mode. */}
                    <button
                        onClick={() => props.updateMoleMode(!props.moleMode)}
                    >
                        Disable Mole Mode
                    </button>
                </div>
            </>
        );
    } else {
        // If moleMode is false, nothing is returned.
        // This effectively prevents Mole Mode from being displayed when moleMode is false.

        // The "return;" statement exits the function without rendering anything when moleMode is false.
        return;

        // Alternatively, if you wanted to return to the App component when moleMode is false, 
        // you could use the following code to render the App component again:
        // return (
        //     <App />
        // );
    }
}

export default Mole;
