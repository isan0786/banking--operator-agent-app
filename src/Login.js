import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import rbcLogo from './assets/rbc-logo.png'; // Import the RBC logo

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const dummyUsername = '123456';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
      navigate('/hub');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={rbcLogo} alt="RBC Logo" className="rbc-logo" /> {/* Add the logo */}
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Employee ID:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;