import React from "react";

const Profile = () => {
    return (
        <div>
            <h1>Profile</h1>
              <form style={{ marginLeft: '20px' }}>
                <label htmlFor="fname">First name:</label><br/>
                <input type="text" id="fname" name="fname" defaultValue="Alberto" /><br/>
                <label htmlFor="lname">Last name:</label><br/>
                <input type="text" id="lname" name="lname" defaultValue="Rodriguez" /><br/>
              </form>
        </div>
    );
};
  
  export default Profile;


  {/* <p> </p>
        <p>Pulse</p>
        <p>Body temperature </p>
        <p>Blood pressure </p>
        <p>Sleep </p>
        <p>Fatigue level </p>
        <p>Calories burnt </p>
        <p>Activity </p>
        <p>Smoking </p>
        <p>Oxygen level </p>
        <p>Other vitals </p>*/}