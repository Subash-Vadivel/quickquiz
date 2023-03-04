import React from 'react'
import { useAuth } from '../../Authentication'

export default function Home() {
const auth=useAuth();
  return (
    <div>Home <button onClick={auth.logout}> Logout</button></div>
  )
}
