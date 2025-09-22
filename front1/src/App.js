import logo from './logo.svg';
import React,{use, useState} from 'react';
import './App.css';
import Login from './comments/login';
import Register from './comments/register';

function App() {
  const [showlogin , setShowlogin] = useState('');

  return (
    <div className="App">
      <div className='container'>
        {showlogin ? <Login / >:<Register />}
        <button className='toggle-button' onClick={() => setShowlogin(!showlogin)}>
          {showlogin ? 'to register' : 'already have an account'}
        </button>

      </div>
    </div>
  );
}

export default App;
