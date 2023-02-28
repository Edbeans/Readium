import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
// import './LoginForm.css';

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ email, password }))
        .catch(async (res) => {
            let data;
            try {
            // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
                data = await res.text(); // Will hit this case if the server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    // demo login
    const demoLogin = (e) => {
        e.preventDefault(); 
        dispatch(login({email: 'demo@user.io', password: 'password'}))
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <ul>
                    {/* {errors.map(error => <li key={error}>{error}</li>)} */}
                </ul>
                <label>Email
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Log In</button>
                <button onClick={demoLogin}>Demo</button>
            </form>
        </>
    );
}

export default LoginForm;