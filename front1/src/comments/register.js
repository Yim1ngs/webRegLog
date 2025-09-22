import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Register(){
    const [username ,setUsername] = useState('');
    const [password , setPassword] = useState('');
    const [mesg , setmesg] = useState('');

    async function handleReg(e){
        e.preventDefault();
        try{
            const response = await fetch("/api/register",{
                method :'POST',
                headers :{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({"username":username, "password":password}),
            });
            const resData = await response.text();
            setmesg(resData);
        }catch(error){
            console.error("Registration failed:", error);
            setmesg('something wrong');
        }
    };
    return(
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleReg}>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder = "username"/>
                    
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder = "password"/>
                </div>
                <button type="submit">Register</button>
            </form>
            {mesg &&<p className="message">{mesg}</p>}
            <div className="toggle-link">
                <Link to='login'>already have a account?</Link>
            </div>
        </div>
    )

}