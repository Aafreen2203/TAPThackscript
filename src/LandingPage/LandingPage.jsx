import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Services from "../Services/Services";
import Model from "../Model/Model";
import Contact from "../Contact/Contact";
import "./LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar />
      <div className="hero-section">
        <div className="overlay"></div>
        <div className="hero-text">
          <h1>DocuSentry</h1>
          <h2>
            Protect your documents with cutting-edge forgery detection. Scan,
            analyze, and verify authenticity in seconds. Trust starts here.
          </h2>
          <button className="cta-button" onClick={() => navigate("/results")}>
            Get Started
          </button>
        </div>
      </div>

      <Services />
      <Model />
      <Contact />
    </div>
  );
}

export default LandingPage;
