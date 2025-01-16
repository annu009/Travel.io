import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // POST request for login
  const handleLogin = async (event) => {
    event.preventDefault();

    const userData = {
      email: username, // Adjust based on your Django login API requirements
      password,
    };

    try {
      const response = await fetch('http://localhost:8081/api/login/', { // Adjust API endpoint as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('accessToken', data.token); // Assuming 'token' is the key in response
        localStorage.setItem('username', username); // Store the username
        alert('Login successful');
        navigate('/');
        window.location.reload();
      }else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || 'Something went wrong'}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error logging in');
    }
  };

  // GET request to fetch user details (optional)
  const fetchUserData = async () => {
    try {
      const response = await fetch('http://localhost:8081/api/user/', { // Adjust API endpoint as necessary
        method: 'GET',
        headers: {
          'Authorization': `Token ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log('User data:', userData);
        // You can navigate or display the user data on the screen
      } else {
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Email </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      {/* Button to trigger GET request for fetching user data (optional) */}
      <button onClick={fetchUserData} className="get-user-button">
        Fetch User Data
      </button>
    </div>
  );
}

export default Login;
