import React, { useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';

// Images
import logo_color from '../img/logo_color.png'

const Header = () => {

    const location = useLocation();
    const menu = useRef();
    const toggler = useRef();
    useEffect(() => {
        if (menu.current.classList.contains('show')) {
            menu.current.classList.remove('show')
        }

        if (!toggler.current.classList.contains('collapsed')) {
            toggler.current.classList.add('collapsed')
        } 
    },[location])

    return (
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo_color} alt="logo" />
                    </Link>
                    <button className="navbar-toggler collapsed" ref={toggler} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" ref={menu} id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto me-lg-auto ms-lg-0">
                            <li className="nav-item"><NavLink exact className="nav-link" activeClassName="active" to="/">Home</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/destinations">Destinations</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" activeClassName="active" to="/our-contacts">Contact us</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header