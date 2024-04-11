import React from "react";
import Board from './leaderboardcomponents/board.js';
import './leaderboardcomponents/boardstyle.css';

/*const Leaderboard = () => {
    return (
    <div>
      <board className = "App"></board>
    </div>);
  };*/
  
function Leaderboard(){
  return(
    <div className="leaderboard">
      <Board/>
    </div>
  )
}

  export default Leaderboard;