import React from 'react'
import {  Outlet} from 'react-router-dom'
import Sidebar from '../Admin_components/Sidebar'
import styles from '../Admin_css/sidebar.module.css'
export default function Admin() {
  
  return (
    <div className={styles.dFlex}>
    <Sidebar/>
    <Outlet/>
    </div>
  )
}
