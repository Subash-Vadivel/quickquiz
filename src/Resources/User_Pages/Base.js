import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../User_components/Footer'
import Header from '../User_components/Header'

export default function Base() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}
