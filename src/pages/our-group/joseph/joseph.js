import React from "react";
import image1 from "./Pictures/geneirc man 3.jpg";
import image2 from "./Pictures/general guy.jpg";
import image3 from "./Pictures/generic man 2.jpg";
import image4 from "./Pictures/man-doing-laundry.jpg";
import "./style.css"

const Joseph = () => {
    return (
        <html>
        <body>
        <h1 id= {"My_Name"}> My name </h1>
        <h2 id = {"AboutMe"}>About Me</h2>
        <p id = {"paragraph1"}> My name is my name. I like to do things. I enjoy things that are enjoyable. I only eat things that are enjoyable. 
            I sometimes do the right thing. People say I am a person of many things. 
            I have been told I am a person of all time. I major in general.</p>
        
        <ul id = {"paragraph2"}>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
            <li>uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</li>
        </ul>
        <h3>Favorite Things</h3>
        <div id= {"list"}>
        <ol>
            <li>Enjoyable Things</li>
            <li>Fun events</li>
            <li>merriment mirthful immovables</li>
        </ol>
        </div>
        <table>
            <tr>
                <th>Name</th>
                <th>Major</th>
                <th>Social Security Number</th>
            </tr>
            <tr>
                <td>Guy</td>
                <td>General</td>
                <td>123-45-6789</td>
            </tr>
        </table>
        <br>
        </br>
        <div id = {"piccy"}>
            <img src={image1}  height={200} width = {200} alt =""/>
            <img src={image2}  height={200} width = {200} alt =""/>
            <img src={image3}  height={200} width = {200} alt =""/>
            <img src={image4}  height={200} width = {200} alt =""/>
        </div>
        <h3 id = {"Links"}>Links</h3>
        <a href={"https://www.youtube.com/channel/UC-jeoS2osqf6bo0GzhaFemw"}>Epic channel</a>
        </body>
        </html>)
  };
  
  export default Joseph;