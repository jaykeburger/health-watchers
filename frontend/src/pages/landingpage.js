import React from "react";
import Leaderboard_Sidebar from "../components/Leaderboard";
import Profile_Sidebar from "../components/Profile_Sidebar";

const Home = () => {
    return (
    <div>
        <Profile_Sidebar/>
        <Leaderboard_Sidebar/>
    </div>
    );
}
  
export default Home;