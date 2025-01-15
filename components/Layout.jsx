import React from 'react'
import Navbar from './shared/Navbar'    
import Footer from './shared/Footer'    

export default function Layout({ children }) {
  return (
    <>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </>
  )
}
