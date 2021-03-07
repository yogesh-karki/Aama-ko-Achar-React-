import React, {useState, useEffect} from 'react';
import {  Link } from 'react-router-dom';


export const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 280 ) {
            setNavbar(true);
        }

        else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground)

    return (
        <header className={ navbar ? 'active' : '' } >
            <div className="container">
                <nav className="navbar navbar-expand-lg ">
                    <Link className="navbar-brand"  to='/'> <img  className="logo" src="/images/logo.svg" alt=""/> </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link  className="nav-link" to='/' > Home </Link>
                               
                            </li>
                            <li className="nav-item">
                                <Link  className="nav-link" to='/about-us' > About Us</Link>
                                
                            </li>

                            <li className="nav-item">
                            <Link  className="nav-link" to='/our-products' > Our Products </Link>
                            </li>

                            <li className="nav-item">
                                <Link  className="nav-link" to='/contacts' > Contact Us </Link>
                            </li>

                            <li className="nav-item">
                                <Link  className="nav-link" to='/shop' > Shop </Link>
                            </li>

                        
                        </ul>
                    
                    </div>
                </nav>
            </div>
        </header>

       
    );
}
