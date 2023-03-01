import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage(props) {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const setShowSignUpModal = props.setShowSignUpModal;
    const setShowLoginModal = props.setShowLoginModal;

    const switchForm = () => {
        setShowSignUpModal(false); 
        setShowLoginModal(true);
    }

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ email, password }))
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
    return setErrors(['Confirm Password field must be the same as the Password field']);
};

    return (
        <div className='wrapper'>
            <div className='form-container'>
                <h2 className='signup-form-message'>Join Readium.</h2>
                <div className='signup-form-box'>
                    <form onSubmit={handleSubmit}>
                        <div className='input-heading'>Your email</div>
                        <div className='input-box input-email'>
                            <input
                                className='input-content'
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-heading'>Your password</div>
                        <div className='input box input-password'>
                            <input
                                className='input-content'
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='input-heading'>Confirm password</div>
                        <div className='input box input-confirm-password'>
                            <input
                                className='input-content'
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className='error-messages'>
                            {errors.map(error => <p key={error}>{error}</p>)}
                        </div>
                        <div className='input box su-buttons'>
                            <div className='su-button'>
                                <button className='button' type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                    <p className='sign-in-msg'>Already have an account? <span className='sign-in' onClick={switchForm}>Sign in</span></p>
                </div>
            </div>
        </div>
);
}

export default SignupFormPage;