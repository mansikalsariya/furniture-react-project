import React from "react";
import { Link } from "react-router-dom";
import "./Success.css";

const Success = () => {
  return (
    <div className="success-container">
      <h2 className="success-title">Payment Successful!</h2>
      <p className="success-message">
        Thank you for your purchase! Your order is being processed.
      </p>
      <div className="mt-4">
        <Link to="/" className="success-link">
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default Success;
