// components/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';  // Firebase config
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/reduser/authSlice'; // Action to set user in Redux
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(setUser(user));  // Store user data in Redux
        alert('Signup successful!');
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        alert('Signup failed: ' + error.message);
      });
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="signup-title">Sign Up</h2>
        <input
          type="email"
          className="input-field"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="input-field"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signup-button" onClick={signup}>Sign Up</button>
      </div>
    </div>
  );
}
