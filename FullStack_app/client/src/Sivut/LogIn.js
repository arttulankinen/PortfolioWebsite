
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function LogIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const BaseURL = process.env.BaseURL;
  
  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch(`${BaseURL}/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem('token', data.token);
      window.dispatchEvent(new Event('loginStateChange'));
      navigate('/');
      console.log('successfull log in')
    } else {
      alert(data.msg);
    }
  };

  return (
    <div id='loginsivu'>
      <form id='loginData' onSubmit={handleLogin}>
        <div className='loginBG'>
          <label>Käyttäjänimi:</label>
          <input 
            type='text' 
            placeholder='MaijaMeikälainen' 
            className='login' 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className='loginBG'>
          <label>Salasana:</label>
          <input 
            type='password' 
            placeholder='********' 
            className='login' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div>
          <button id='sendL' type='submit'>Kirjaudu</button>
        </div>
      </form>
    </div>
  );
}

export { LogIn };
