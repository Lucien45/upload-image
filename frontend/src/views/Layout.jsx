import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='adminPage'>
        <div className='contenuAdmin'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Layout