import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mesg, setMesg] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch('http://101.136.159.233:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "username":username, "password":password }),
      });
      const data = await response.text();
      setMesg(data);
    } catch (error) {
      setMesg('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {mesg && <p className="message">{mesg}</p>}
    </div>
  );
}