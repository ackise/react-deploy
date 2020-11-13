import React from 'react'
import Logo from '../Logo/Logo'
import Sidebar from '../Menu/Sidebar'
import Menu from '../Menu/Menu'
import './Header.scss'

const Header = ()=> {
    return (
        <div className="header">
           <Logo/> 
           <Menu/>
           <Sidebar/>
        </div>
    )
}
export default Header