import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../ContextProviders/AuthContext';
import Button from '../Common/Button';
import ForgotPassword from '../Common/ForgotPassword';
import Input from '../Common/Input';
import './Login.scss';

const Login = () => {

    let auth = useAuth();
    let navigate = useNavigate();
    const [userId, setUserId] = useState({ email: '', emailError: '' });
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const onLogin = async () => {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: userId.email, password: password })
        };
        setError(false);
        fetch("https://apptesting.docsumo.com/api/v1/eevee/login/", requestOptions)
            .then(response => response.json())
            .then(data => {
                if(data.status === 'success') {
                    auth.signIn(data, () => navigate('/dashboard', { replace: true }));
                } else {
                    setError(true);
                }
            }).catch(error => {
                setError(true);
            })
       
    }

    const emailValidator = (value) => {
        // eslint-disable-next-line
        let reg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        console.log('........... test', reg.test(value));
        if (reg.test(value) === false) {
            setUserId({ emailError: "Please enter a valid email address" });
            return false;
        } else {
            setUserId({ email: value, emailError: "" });
        }
    }
    
    return (
        <div className='docsumo-login'>
            <h1>Login to your Docsumo account</h1>
            <Input
                placeholder='janedoe@abc.com'
                type="textbox"
                label="Work Email"
                value={userId.email}
                error={userId.emailError}
                onChange={(value) => emailValidator(value)}
            />
            <Input
                placeholder='Enter your password here...'
                type="password"
                label="Password"
                value={password}
                onChange={(value) => setPassword(value)}
            />
            <ForgotPassword />
            <Button onClick={onLogin} title="Login" />
            { error && <span className='login-failed'>Login Failed.... Please try again !</span>}
        </div>
    )
}

export default Login;
