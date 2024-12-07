import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const BaseURL = 'https://artunportfolio.onrender.com/'

  const handleRegister = async (e) => {
    e.preventDefault();

    const response = await fetch(`${BaseURL}/api/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();

    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.dispatchEvent(new Event('loginStateChange'));
      navigate('/');
      console.log("registration successfull")
    } else {
      console.error('Registration failed');
    }
  };

  return (
    <div id='registerpage'>
      <form  onSubmit={handleRegister}>
        <div className='formgroup'>
          <label>Email:</label>
          <input type="email" className='registerinput' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='formgroup'>
          <label>Username:</label>
          <input type="text" className='registerinput' value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='formgroup'>
          <label>Password:</label>
          <input type="password" className='registerinput' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button id='sendR' type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export {Register}
