import { Divider } from '@material-ui/core'
import React from 'react'
import Logo from '../Logo/Logo'
import './Sidebar.scss'
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
    return (
        <div className='burgerwrapp'>
        <Menu left >
            <Logo></Logo>
            <Divider></Divider>
            <a className='menu-item' href='#form'>About me</a>
            <a className='menu-item' href='#form'>Relationships</a>
            <a className='menu-item' href='#form'>Users</a>
            <a className='menu-item' href='#form'>Sign Up</a>
            <a className='menu-item' href='#form'>Terms and Conditions</a>
            <Divider></Divider>
            <a className='menu-item' href='#form'>How it works</a>
            <a className='menu-item' href='#form'>Partnership</a>
            <a className='menu-item' href='#form'>Help</a>
            <a className='menu-item' href='#form'>Leave testimonial</a>
            <a className='menu-item' href='#form'>Contact us</a>
            <Divider></Divider>
            <a className='menu-item' href='#form'>Articles</a>
            <a className='menu-item' href='#form'>Our news</a>
            <a className='menu-item' href='#form'>Testimonials</a>
            <a className='menu-item' href='#form'>Licenses</a>
            <a className='menu-item' href='#form'>Privacy Policy</a>
           
        </Menu>
        </div>

    )
}
export default Sidebar