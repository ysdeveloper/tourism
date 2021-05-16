import React from 'react'
import { NavLink } from 'react-router-dom'

// Images
import FooterLogo from '../img/logo_dark.png'
import Footer_img from '../img/footer_bg.png'


class Footer extends React.Component {
    render() {
        return (
            <footer>
                <img className="footer-bg" src={Footer_img} alt="Footer-bg" />
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-12 text-center d-flex justify-content-center">
                            <form action="post">
                                <input type="email" placeholder="Email" />
                                <input className="btn text-uppercase" type="submit" value="subscribe" />
                            </form>
                        </div>
                        <div className="col-lg-3 col-md-5 col-12 mb-4 mb-lg-0 text-center text-md-start">
                            <img className="footer-logo" src={FooterLogo} alt="Logo" />
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</p>
                            <p className="mb-0">© 2021 copyright all rights reserved</p>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 mb-4 mb-lg-0 text-center text-md-start">
                            <h4>Useful Links</h4>
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink exact className="nav-link" to="/destinations">Destinations</NavLink></li>
                                <li className="nav-item"><a className="nav-link" href="#">Hot tours</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-3 col-12 mb-4 mb-lg-0 text-center text-md-start">
                            <h4>Get in Touch</h4>
                            <ul className="navbar-nav">
                                <li className="nav-item"><NavLink exact className="nav-link" to='/our-contacts'>Our Contacts</NavLink></li>
                                <li className="nav-item"><NavLink exact className="nav-link" to="/">Get supports</NavLink></li>
                                <li className="nav-item"><NavLink exact className="nav-link" to="/">Privacy policy</NavLink></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-12 mb-4 mb-lg-0 text-center text-lg-start">
                            <h4>Follow us on</h4>
                            <ul className="d-flex justify-content-center justify-content-lg-start">
                                <li className="me-4"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                <li className="me-4"><a href="#"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-12 address text-center text-lg-start">
                            <h4>Our address</h4>
                            <p>79, west road pan. <br /> 759 New york, USA.</p>
                            <a href="tel:789-123-456"><i className="fas fa-phone-alt me-3"></i>789-123-456</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer