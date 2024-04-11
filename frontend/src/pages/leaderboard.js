import React from "react";
import board from './leaderboardcomponents/board.js';
import './leaderboardcomponents/boardstyle.css';

/*const Leaderboard = () => {
    return (
    <div>
      <board className = "App"></board>
    </div>);
  };*/
  
function leaderboard(){
  return(
    <div className="leaderboard">
      <board/>
    </div>
  )
}

  export default leaderboard;