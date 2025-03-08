import React from 'react';
import './Model.css';
import forg from "../assets/forg.jpg"

const Model = () => {
  return (
    <div className="model-container">
      <div className="model-content">
        <h2 className="model-title">Our Model Approach</h2>
        <p className="model-description">
          Our innovative model combines cutting-edge technology with proven methodologies to deliver exceptional results. We focus on three key principles:
        </p>
        
        <div className="model-features">
          <div className="feature">
            <h3>Text Forgery Detection</h3>
            <p>Utilizing transformer-based models, we analyze textual inconsistencies, detect paraphrasing, and identify AI-generated or manipulated content with high accuracy.</p>
          </div>
          
          <div className="feature">
            <h3>Photo Forgery Detection</h3>
            <p>With CNNs and deep feature extraction techniques like HOG and LBP, our model detects image tampering, deepfakes, and altered visual elements.</p>
          </div>
          
          <div className="feature">
            <h3>Signature Forgery Detection</h3>
            <p>Using Siamese networks, our system compares signatures, identifying minute discrepancies to detect forged or manipulated signatures effectively.</p>
          </div>
        </div>
        
        {/* <button className="learn-more-btn">Learn More</button> */}
      </div>
      
      <div className="model-image">
        <img 
          src={forg}
          alt="Visual representation of our model approach" 
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default Model;
