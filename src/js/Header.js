import React from 'react'
import '../css/Header.css'
import Logo from '../image/logo.png'
function Header() {
    return (
        <nav className='header__container'>
            <img className='header__logo' src={Logo} alt=""/>
            <h3 className="header__centerText">Analysis Your Daily Food</h3>
            <div>
            <button>Signup</button>             
            <button>Login</button>            
            </div>
        </nav>
    )
}
 
export default Header
