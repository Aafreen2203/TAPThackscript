import React from "react";
import Navbar from "../Navbar/Navbar";
import Bg1 from "../assets/Bg1.jpg";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <div className="overlay"></div>
        {/* <div className="hero-content"> */}
        <div className="hero-text">
          <h1>DocuSentry</h1>
          <h2>
            Protect your documents with cutting-edge forgery detection. Scan,
            analyze, and verify authenticity in seconds. Trust starts here.
          </h2>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default LandingPage;
