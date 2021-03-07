import React from 'react';
import {  Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>

            <div className="container">
             
                <div className="row">
                    <div className="col-md-7">
                        <div className="footer-link">
                            <ul className="footer-nav">
                                <li> <Link  to='/about-us' > About Us</Link> </li>
                                <li><Link  to='/our-products' > Our Products </Link></li>
                                <li><Link  to='/contacts' > Contact Us </Link></li>
                                <li><Link  to='/shop' > Shop </Link></li>
                            </ul>
                        </div>

                        <div className="cpyrt">
                            <p>© 2021 Aamakoachar. All rights reserved</p>
                            <p>Powered by <a href="http://hueshine.com" target="_blank">Hue Shine</a></p>
                        </div>
                    </div>

                    <div className="col-md-5">
                        <div className="footer-contact">
                            <h4>Get in Touch !</h4>
                            <a href="mailto:info@aamakoachar.com.np">info@aamakoachar.com.np</a>
                            <a href="tel:+01-4424136" className="num"> 01-4424136</a>

                            <div className="social">
                                <a href="https://www.facebook.com/aamakoachar" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://www.instagram.com/aamakoachar/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href="" target="_blank"><i className="fab fa-youtube"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer
