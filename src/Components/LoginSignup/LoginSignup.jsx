import React from 'react'
import './LoginSignup.css'

import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
export const LoginSignup = () => {
    return (
        <div className='container'>
            <div className='header'>
                <div className="text">Sign Up</div>
            </div>
            <div className='inputs'>
                <div className="input">
                    <img src={user_icon} alt=""/>
                    <input type="text" />
                </div>
                <div className="input">
                    <img src={email_icon} alt=""/>
                    <input type="email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt=""/>
                    <input type="password" />
                </div>
            </div>
            <div className="forget-password">Lost Password?<span>Click Hear!</span></div>
            <div className="submit-container">
                <div className="submit">Sign UP</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}
