import React, { useState, useContext } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase'; 
import { myContext } from '../common/Context';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import the CSS file for login styling

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { fnLogged } = useContext(myContext); // Access context to update user login state
  const navigate = useNavigate(); // Initialize useNavigate hook

  function login() {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        fnLogged({
          user: userCredential.user.email,
          isLogged: true,
        });
        // Navigate to home page after login
        navigate('/home');
      })
      .catch((error) => {
        console.log(error);
        alert('Login failed: ' + error.message);
      });
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <h2 className="login-title">Login</h2>
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
        <button className="login-button" onClick={login}>Login</button>
      </div>
    </div>
  );
}
