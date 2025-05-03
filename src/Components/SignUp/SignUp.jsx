// import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../FirebaseAuthContext/AuthContext';
// import { auth } from '../../firebase.init';

const SignUp = () => {
    const { createUser } = use(AuthContext)

    const handleSignUp = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password)

        // create User
        // createUserWithEmailAndPassword(auth, email, password)
        // .then(userCredential => {
        //     console.log(userCredential)
        // })
        // .catch(error => {
        //     console.log(error)
        // })

        createUser(email,password)
        .then(userCredential => {
            console.log(userCredential)
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div className="card bg-base-100 mx-auto mt-10 w-full max-w-sm shrink-0 shadow-2xl">
            <h3 className="text-3xl text-center font-bold">Sign Up now!</h3>
            <div className="card-body">
                <form onSubmit={handleSignUp} className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" name='name' className="input" placeholder="Name" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <button className="btn btn-neutral mt-4">Sign Up</button>
                </form>
                <p>Already Have an account? Please <Link to={'/Login'} className='text-blue-400 underline'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;