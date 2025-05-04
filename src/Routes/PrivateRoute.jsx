import React, { use } from 'react';
import { AuthContext } from '../FirebaseAuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = use(AuthContext); 
    if(loading) {
        return <span className="loading loading-infinity loading-xl"></span>
    }
    if(!user) {
        return <Navigate to={'/Login'}></Navigate>
    }
    return children
};

export default PrivateRoute;