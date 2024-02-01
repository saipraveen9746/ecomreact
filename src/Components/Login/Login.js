import axios from 'axios';
import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Logging in with email:", email, 'and password:', password);
        try {
            const { data } = await axios.post('http://127.0.0.1:8000/api/token/', {
                email,
                password
            });
            console.log(data);
            
        } catch (error) {
            console.log(error);
            
        }
    };

    return (
        <div className='login-container'>
            <h2>Login</h2>
            <form onSubmit={handleLogin} className='login-form'>
                <div>
                    <label>Email</label>
                    <input
                        className='login-input'
                        type='text'
                        name='email'
                        placeholder='Email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        className='login-input'
                        type='password' 
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}

                        
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
