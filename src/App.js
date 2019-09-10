//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32);
  const [awayScore, setAwayScore] = useState(32);

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button
            onClick={event => {
              const touchdownHome = homeScore + 7;
              setHomeScore(touchdownHome);
            }}
            className="homeButtons__touchdown"
          >
            Home Touchdown
          </button>
          <button
            onClick={event => {
              const fieldGoalHome = homeScore + 3;
              setHomeScore(fieldGoalHome);
            }}
            className="homeButtons__fieldGoal"
          >
            Home Field Goal
          </button>
        </div>
        <div className="awayButtons">
          <button
            onClick={event => {
              const touchdownAway = awayScore + 7;
              setAwayScore(touchdownAway);
            }}
            className="awayButtons__touchdown"
          >
            Away Touchdown
          </button>
          <button
            onClick={event => {
              const fieldGoalAway = awayScore + 3;
              setAwayScore(fieldGoalAway);
            }}
            className="awayButtons__fieldGoal"
          >
            Away Field Goal
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;

function NOT(b) {
  if (b === true) {
    return false;
  } else {
    return true;
  }
}

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
