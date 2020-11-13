import React from 'react'
import Logotype from '../../assets/logo.svg'
import './Logo.scss'

const Logo = ()=> {
    return (
        <div className='logo'>
            <img src={Logotype} alt='testlogo' className='logo__testtask'/>
        </div>
    )
}
export default Logo