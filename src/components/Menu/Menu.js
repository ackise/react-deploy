import React from 'react'
import './Menu.scss'

const Menu = () => {
    return (
        <div className='menu'>
           <a className='menu__item' href='#form'>About me</a>
            <a className='menu__item' href='#form'>Relationships</a>
            <a className='menu__item' href='#form'>Requirments</a>
            <a className='menu__item' href='#form'>Users</a>
            <a className='menu__item' href='#form'>Sign up</a>
        </div>
    )
}
export default Menu
