import React from 'react'
import { NavLink, Link } from 'react-router-dom';

// Images
import logo_color from '../img/logo_color.png'

class Header extends React.Component {

    render() {
       return(
        <header className='header'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img src={logo_color} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
}

export default Header