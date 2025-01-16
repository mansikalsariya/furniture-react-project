import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { RESET } from "../redux/cartSlice"; 
import { useNavigate } from "react-router-dom";
import './Checkout.css'; // Import the custom CSS file

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    cardHolder: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    
  
    setTimeout(() => {
      setPaymentSuccess(true); 
      dispatch(RESET()); 
      navigate("/success"); 
    }, 2000); 
  };

  return (
    <div className="checkout-container">
      {!paymentSuccess ? (
        <div>
          <h2>Payment Information</h2>
          <form onSubmit={handlePaymentSubmit}>
            <div className="mb-4">
              <label>Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={paymentDetails.cardNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label>Cardholder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={paymentDetails.cardHolder}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4 flex space-x-4">
              <div className="w-1/2">
                <label>Expiry Date</label>
                <input
                  type="text"
                  name="expiryDate"
                  value={paymentDetails.expiryDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
                <label>CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={paymentDetails.cvv}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-950 text-white rounded-lg"
            >
              Pay Now
            </button>
          </form>
        </div>
      ) : (
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Your payment has been successfully processed. Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
};

export default Checkout;
