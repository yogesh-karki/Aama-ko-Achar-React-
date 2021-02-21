import React from 'react'

const Testimonial = props => {
    return (
        <div className='test-wrap'>
            <img src={props.img} alt=""/>
            <h5>{props.name}</h5>
            <h6>{props.bio}</h6>

            <p>{props.sayings} </p>
        </div>
    )
}

export default Testimonial
