import React from 'react'
import './Section2.scss'
import man from '../../../assets/man-laptop-v1.svg'

const Section2 = () => {
    return (
        <div className = 'section2'>
            <h1 className = 'section2__title'>Let's get acquainted</h1>
            <img className = 'section2__img' src={man} alt='man-with-laptop' ></img>
            <h2 className = 'section2__topic'>I am cool frontend developer</h2>
            <p className = 'section2__paragraph'>We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction.</p>
            <p className = 'section2__paragraph'>If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P​SD mockup​ into HTML5/CSS3.</p>
            <a className = 'section2__signup' href='#form'>Sign up now</a>
        </div>
    )
}
export default Section2