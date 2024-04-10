import React from "react";
import burger from './burger-cheese-burger.gif';
const Jake = () => {
    return (
        <div>
            <h1>Jake Burger</h1>
            <img src={burger} alt="blah" width={200} height={200}/>
            <br/>
            <a href="https://j4ke.dev/">Link to personal website</a>
        </div>
    )
};
  
export default Jake;