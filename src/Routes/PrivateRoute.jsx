import React, { use } from 'react';
import { AuthContext } from '../FirebaseAuthContext/AuthContext';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user} = use(AuthContext); 
    if(!user) {
        return <Navigate to={'/Login'}></Navigate>
    }
    return children
};

export default PrivateRoute;