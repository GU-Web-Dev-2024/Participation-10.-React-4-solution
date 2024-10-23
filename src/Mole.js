// Mole.js

// How did we get state from App.js?
// In React, props allow us to pass data from a parent component to a child component.
// The state `moleMode` and the function `updateMoleMode` are passed from the parent component (App.js) to this Mole component via props.
// This enables the Mole component to access and update the state defined in App.js.
// For more information, see: https://react.dev/learn/sharing-state-between-components

import "./css/mole.css";
import MoleGame from "./MoleGame";
import { Link } from "react-router-dom"

function Mole(props) {
    // The Mole component receives props, which include "moleMode" and "updateMoleMode" from the parent (App.js).
    // These props are used to control whether the app is in Mole Mode and to switch between Mole Mode and Counter Mode.

    //one option to run mole game script
    //MoleGame();

    return (
        <>
            {/* another option to run mole game script */}
            <MoleGame />
            <div>
                <h1>
                    Mole Mode!
                </h1>
            </div>
            <div>
                <h1>Whack-a-Mole Game</h1>
                {/* <!-- Display for the score --> */}
                <div id="scoreBoard">Score: 0</div>
                {/* <!-- Display for the timer --> */}
                <div id="timer">Time Left: 0s</div>
                {/* <!-- Button to start the game --> */}
                <button id="startButton">Start Game</button>
                {/* <!-- Game grid containing holes and moles --> */}
                <div className="grid">
                    <div className="hole" id="hole1">
                        <div className="mole"></div>
                    </div>
                    <div className="hole" id="hole2">
                        <div className="mole"></div>
                    </div>
                    <div className="hole" id="hole3">
                        <div className="mole"></div>
                    </div>
                    <div className="hole" id="hole4">
                        <div className="mole"></div>
                    </div>
                    <div className="hole" id="hole5">
                        <div className="mole"></div>
                    </div>
                    <div className="hole" id="hole6">
                        <div className="mole"></div>
                    </div>
                </div>
            </div>

            <div>
                <Link to="/" className="button-link"> Back to Counter App</Link>
            </div>
        </>
    );

}

export default Mole;
