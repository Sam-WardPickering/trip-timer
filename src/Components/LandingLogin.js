import '../App.css';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function LandingLogin() {
  return (
  
    <div id="landinglogin-container">

      <div className="landingLoginBody">
        <div id="input-container"> 
          <input className="input"></input>
          <input className="input"></input>
          <Link to="/Dashboard"><button className="button">Sign in</button></Link>
        </div>
      </div>

    </div>

    
  )
}

export default LandingLogin;

