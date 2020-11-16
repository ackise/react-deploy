import React from 'react'
import './Section1.scss'

const Section1 = () => {
    return (
        <div className='firstsection' >
            <div className='wrap'>
                <p className='firstsection__title'>Test assigment for frontend developer position</p>
                <p className='firstsection__description'>We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.</p>
            </div>
            <a className='firstsection__button' href='#form'>Sign up now</a>

        </div>
    )
}
export default Section1