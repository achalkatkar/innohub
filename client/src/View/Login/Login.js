import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(response) {
        const data = response?.data;
        if (data) {
            console.log('Login successful:', data);
        } else {
            console.error("Data is missing from the response");
        }
    }
    


    return (
        <>
        <div className='login-container'>
       
        <div className='wlc-container'>
            <h1 className='wlc-heading'>Welcome!</h1>
            <p className='wlc-text'>lorem nnels playing a pivotal role to foster the value of your brand and building a fast effective way to reach out to new potential</p>
            <button className='learn-more-btn'>Learn more</button>

        </div>

        <div>
        <form onSubmit={handleLogin} className='login-div'>
            <h3 className='login-title'>Signup</h3>

            <label className='login-input-label'>email</label>
            <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            required 
            className='input-field'
            />
            <br/>


            <label className='login-input-label'>Password</label>
            <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Password" 
            required 
            className='input-field'
            />
             <br/>

            <button type="submit" className='login-btn'>Login</button>

        </form>
        </div>
        </div>

        </>

    );
}

export default Login;
