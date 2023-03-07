import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css';


function LoginForm(props) {
    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const setShowLoginModal = props.setShowLoginModal; 
    const setShowSignUpModal = props.setShowSignUpModal; 
    // const showLoginModal = props.showLoginModal;

    const switchForm = () => {
        setShowLoginModal(false);
        setShowSignUpModal(true); 
    }

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
        dispatch(login({fullname: 'Demo-Lotion', email: 'demo@user.io', password: 'password'}))
    }

    return (
        <>
            <div className='wrapper'>
                <div className='form-container'>
                    <h2 className='login-form-message'>Welcome back.</h2>
                    <div className='login-form-box'>
                        <form onSubmit={handleSubmit}>
                            <div className='input-heading'>Your email</div>
                            <div className='input-box input-email'>
                                    <input
                                        className='input-content'
                                        type="text"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        // placeholder='email' 
                                        required
                                    />
                            </div>
                            <div className='input-heading'>Your password</div>
                            <div className='input-box input-password'>
                                    <input 
                                        className='input-content'
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        // placeholder='password'
                                        required
                                    />
                            </div>
                            <div className='error-messages'>
                                {errors.map(error => <p key={error}>{error}</p>)}
                            </div>
                            <div className='input-box lf-buttons'>
                                <div className='lf-button'>
                                    <button className='button' type="submit">Log In</button>
                                </div>
                                <div className='lf-demo-button'>
                                    <button className='button'onClick={demoLogin}>Demo</button>
                                </div>
                            </div>
                        </form>    
                        <p className='create-one-msg'>No account? <span className='create-one' onClick={switchForm}>Create one</span></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginForm;