//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  const [homeScore, setHomeScore] = useState(7);
  const [awayScore, setAwayScore] = useState(3);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.

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
          <button className="homeButtons__touchdown"
          // because this is JSX and not straight up JS, we have to put
          // the JS logic inside of the curly braces
          // and we have to have a JSX attribute called 'onClick'
          // in order to access the '.onClick()' method.
          // (I think this has to do with the fact that react
          // interacts with the 'true' DOM of the browser via a 
          // 'virtual DOM.' The react library gives each JSX object an
          // onClick attribute that somehow equates to the 
          // true JS .onCLick() method)
          onClick={() => setHomeScore(homeScore + 7)}>Home Touchdown</button>

          <button className="homeButtons__fieldGoal"
          // same as above except a fieldgoal is worth 3 points, not 7
          onClick={() => setHomeScore(homeScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown"
          onClick={() => setAwayScore(awayScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal"
          onClick={() => setAwayScore(awayScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
