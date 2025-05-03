import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault(); 
        const email = e.target.email.value; 
        const password = e.target.password.value; 
        console.log(email, password)
    }
    return (
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Login now!</h3>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p>New to this website? Please <Link to={'/SignUp'} className='text-blue-400 underline'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;