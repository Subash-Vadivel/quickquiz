import React from 'react'
import {  Outlet} from 'react-router-dom'
import Sidebar from '../Admin_components/Sidebar'

export default function Admin() {
  
  return (
    <>
    <Sidebar/>
    <Outlet/>
    </>
  )
}
