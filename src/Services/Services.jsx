import React from "react";
import "./Services.css";

const services = [
  { id: 1, title: "API for Forged Document Detection", description: "We provide an AI-powered API to detect forged documents with high accuracy." },
  { id: 2, title: "Chrome Extension", description: "Verify document authenticity directly in your browser using our easy-to-use Chrome extension." },
  { id: 3, title: "Secure Document Storage", description: "Store your important documents securely with built-in verification before upload." },
  { id: 4, title: "AI-Powered Signature Analysis", description: "Detect inconsistencies in signatures and handwritten text to prevent fraud." },
];

function Services() {
  return (
    <div className="services-container">
      <h2 className="serviceTitle">Our Features</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={service.id} className="service-item">
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {index < services.length - 1 && <div className="vertical-line"></div>} 
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
