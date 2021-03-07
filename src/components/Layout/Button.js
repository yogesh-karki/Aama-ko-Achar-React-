import React from 'react';
import {  Link } from 'react-router-dom';

const Button = (props) => {
    return (
        <div className="line-btn">
            <Link  className="nav-link" to={props.buttonLink} >  
                { props.buttonText }
            </Link>
        </div>
    )
}

export default Button;
