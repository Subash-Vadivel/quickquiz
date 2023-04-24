import React from 'react'
import { useAuth } from '../../Authentication';
import { Navigate, useLocation } from 'react-router-dom';
export default function AuthLoginRequired(props) {
    const auth=useAuth();
    const location=useLocation();
    if(!auth.user)
    {
        console.log("Not Logged : "+auth.user);
        return <Navigate to='login' state={{path:location.pathname}}></Navigate>
    }
    console.log()
    if(!JSON.parse(auth.details).isAdmin && !JSON.parse(auth.details).isStaff)
    {
      auth.logout();
      return <Navigate to='login' state={{path:location.pathname}}></Navigate>

    }
  return props.children;
}
