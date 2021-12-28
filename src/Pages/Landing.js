import Header from '../Components/Header.js';
import '../App.css';
import Footer from '../Components/Footer.js';
import Quote from '../Components/Quote.js';
import LandingLogin from '../Components/LandingLogin.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

function landing() {
  return (
   <div className="landing-container">
       <Header/>
       <div className="landingBody">
           <Quote/>
           <LandingLogin/>
       </div>
       <Footer/>
   </div>
  )
}

export default landing;