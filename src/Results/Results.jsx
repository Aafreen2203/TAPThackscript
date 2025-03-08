import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Results.css";

function Results() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [forgeryPercentage, setForgeryPercentage] = useState(null);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    if (uploadedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(uploadedFile);
    }

    // Simulate a scan result (Replace this with actual API response later)
    setTimeout(() => {
      setForgeryPercentage(Math.floor(Math.random() * 100)); // Random % result
    }, 2000);
  };

  return (
    <div className="results-container">
      <h2>Upload Your Document for Forgery Detection</h2>
      
      <input type="file" onChange={handleFileUpload} accept=".pdf,.jpg,.png" />

      {file && (
        <div className="results-content">
          {/* Left Side: Display Uploaded Image */}
          <div className="image-preview">
            <h3>Uploaded Document</h3>
            <img src={previewUrl} alt="Uploaded Preview" className="uploaded-image" />
          </div>

          {/* Right Side: Forgery Detection */}
          <div className="scan-results">
            <h3>Forgery Analysis</h3>

            {/* Placeholder for forged detection (Replace with API result later) */}
            <div className="forged-document">
              <p>[Forged Areas will be highlighted here]</p>
            </div>

            {/* Display Forgery Percentage */}
            {forgeryPercentage !== null ? (
              <p><strong>Forgery Detection:</strong> {forgeryPercentage}% Likely Forged</p>
            ) : (
              <p>Scanning...</p>
            )}
          </div>
        </div>
      )}

      <button className="back-button" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
}

export default Results;
