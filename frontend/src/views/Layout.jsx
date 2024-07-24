import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='adminPage'>
      <div className='sidebar_admin' id='sidebarFront'>
        
      </div>
      <div className='contentPageAdmin'>
        <div className='navbar_admin'>
          
        </div>
        <div className='borderContenuAdmin'>
            <div className='contenuAdmin'>
                <Outlet/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Layout