import axios from 'axios';
import React, { useContext, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Context } from '../../context/Context';
import './login.css';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
            const res = await axios.post("/auth/login", {
                username: userRef.current.value,
                password : passwordRef.current.value
            })
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
            navigate('/');
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE" });
            setError(true);
            toast.error("Something went wrong");
        }
    }
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text" placeholder="Enter your username..." ref={userRef} />
                <label>Password</label>
                <input className="loginInput" type="password" placeholder="Enter your password..." ref={passwordRef} />
                <button className="loginButton" type='submit' disabled = {isFetching}>Login</button>
            </form>
            <button className="loginRegisterButton"> <Link to="/register" className='link'>Register</Link></button>
            {/* {error && <span style={{ color: "red", marginTop: "10px" }}>Something went wrong!</span>} */}
        </div>
    );
};

export default Login;