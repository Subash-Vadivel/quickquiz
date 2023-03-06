import React from 'react'

import { useAuth } from '../../Authentication';
import { Navigate } from 'react-router-dom';
export default function UserLoginRequired(props) {
    const auth=useAuth();
    if(!auth.user)
    {
        console.log("Not Logged : "+auth.user);
        return <Navigate to='/login' ></Navigate>
    }
  return props.children;
}
