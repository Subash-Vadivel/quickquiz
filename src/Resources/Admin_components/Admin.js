import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Authentication'

export default function Admin() {
  const auth=useAuth();
  if(auth.user)
  {
        <Link to='dashboard'></Link>
  }
  return (
    <>
    <Outlet/>
    </>
  )
}
