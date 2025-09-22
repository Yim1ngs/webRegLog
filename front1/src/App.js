import logo from './logo.svg';
import React,{use, useState} from 'react';
import { Routes, Route, Navigate, useNavigate, Link } from 'react-router-dom';
import './App.css';
import Login from './comments/login';
import Register from './comments/register';
import Home from './comments/home';

function App() {
  const [currentUser , setcurrentUser] = useState(null);
  const navigate = useNavigate();

  function handleLogSuc(username){
    setcurrentUser(username);
    navigate('/');
  }

  function handleLogOut(){
    setcurrentUser(null);
    navigate('/login');
  }

  let page;
  if (currentUser){
    page = (
      <Route>
        <Route path="/" element={<Home username={currentUser} onLogOut={handleLogOut} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    )
  }else{
    page = (
      <Routes>
        <Route path="/login" element={<Login onLoginSuc={handleLogSuc} />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    )
    return (
    <div className="App">
      <div className="container">
        {page}
      </div>
    </div>
  );
  }





}

export default App;
