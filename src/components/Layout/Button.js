import React from 'react';

const Button = (props) => {
    return (
        <div className="line-btn">
            <a href="">
                { props.buttonText }
            </a>
        </div>
    )
}

export default Button;
