import React, { use } from 'react';
import { AuthContext } from '../../FirebaseAuthContext/AuthContext';

const Profile = () => {
    const {user} = use(AuthContext); 
    console.log(user)
    return (
        <div>
            <h1>{user?.email}</h1>
            <div>
                <img src={`${user.photoURL}`} alt="" />
                <h1>{user?.displayName}</h1>
            </div>
        </div>
    );
};

export default Profile;