import React from 'react'
import { useAuth } from '../../Authentication'
export default function AdminPanel() {
  const auth=useAuth();
  return (
    <div>
      AdminPanel Hello <button onClick={auth.logout}>Log out</button></div>
  )
}
