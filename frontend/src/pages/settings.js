import React from "react";

const Settings = () => {
    return (
    <div>
      <h1>Settings</h1>
      <form>
        <fieldset>
          <h3>Account</h3>
          <label for="pfp">Change Profile Photo?</label><br></br>
            <input id="pfp" type="file" accept=".png, .jpg, .jpeg"></input><br></br>
          <label for="bio">Bio</label><br></br>
            <textarea id="bio" rows="5" cols="30"></textarea><br></br>
          <label for="username">Username </label>
            <input id="username" type="text" ></input><br></br>
          <label for="password">Password </label>
            <input id="password" type="password"  minLength="8" maxLength="14"></input>
        </fieldset>
        <fieldset>
          <h3>Contacts</h3>
          <label for="phone">Phone Number </label>
            <input id="phone" type="telephone" placeholder="###-###-####"></input><br></br>
          <label for="email">Email </label>
            <input id="email" type="email"></input>
        </fieldset>
        <fieldset>
          <h3>Medical Information</h3>
          </fieldset>
        <fieldset>
          <h3>Notifications</h3>
          <h6>Receive monthly emails?</h6>
          <label for="yarr">Yes </label>
            <input id="yarr" type="radio"  name="emails" checked></input><br></br>
          <label for="naurr">No </label>
            <input id="naurr" type="radio" name="emails"></input>
          <h6>Receive weekly  messages?</h6>
          <label for="yess">Yes </label>
            <input id="yess" type="radio"  name="texts" checked></input><br></br>
          <label for="noo">No </label>
            <input id="noo" type="radio" name="texts"></input>
        </fieldset>
        <fieldset>
          <h3>FAQ</h3>
          <h4>Call ###-###-#### or email us as 4357479@central.gov</h4>
        </fieldset>
      </form>
    </div>
  );
  };
  
  export default Settings;