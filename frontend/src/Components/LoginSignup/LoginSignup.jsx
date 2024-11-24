import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/user.svg';
import password_icon from '../Assets/password.svg';
import email_icon from '../Assets/email.svg';

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = () => {
        fetch('http://localhost:8081/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Signup successful:', data);
        })
        .catch(error => {
            console.error('Error during signup:', error);
        });
    };

    const handleLogin = () => {
        // Implement login functionality here
        // You would typically send a request to your login endpoint
        console.log('Login attempted with:', { email, password });
        // Example of a fetch request for login
        // fetch('http://localhost:8081/login', { ... })
    };

    const handleSubmit = () => {
        if (action === "Sign Up") {
            handleSignup();
        } else {
            handleLogin();
        }
    };

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> : 
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input 
                        type="text" 
                        placeholder='Name' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>}
                <div className="input">
                    <img src={email_icon} alt="" />
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input 
                        type="password" 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>
            {action === "Sign Up" ? <div></div> : 
            <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={handleSubmit}>
                    {action === "Sign Up" ? "Sign Up" : "Login"}
                </div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction(action === "Sign Up" ? "Login" : "Sign Up")}>
                    {action === "Sign Up" ? "Login" : "Sign Up"}
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;