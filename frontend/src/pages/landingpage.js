import React from "react";
import Leaderboard_Sidebar from "../components/Leaderboard";
import Dashboard from "../components/DashBoard";



const Home = () => {
    return (
    <div className="app">
        <Dashboard className="dashboard"/>
        <Leaderboard_Sidebar/>

    </div>
    );
}
  
export default Home;