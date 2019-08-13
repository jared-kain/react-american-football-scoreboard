//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [awayCount, setawayCount] = useState(0); // Declaring count
  let _awayFG = () => {
    setawayCount(awayCount + 3)
      // console.log(awayCount)
  }

  let _awayTD = () => {
    setawayCount(awayCount + 7)
  }

  const [homeCount, sethomeCount] = useState(0);
  let _homeFG = () => {
    sethomeCount(homeCount + 3)
  }

  let _homeTD = () => {
    sethomeCount(homeCount + 7)
  }


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">BUCS</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">RAIDERS</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => _homeTD()}className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => _homeFG()} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => _awayTD()}className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => _awayFG()} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
