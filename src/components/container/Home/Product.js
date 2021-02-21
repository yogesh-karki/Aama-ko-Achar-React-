import React from 'react'

const Product = (props) => {
    return (
        <div className="sp-wrap">
            <img src={props.img} alt=""/>
            <h6><a href="">{props.name}</a></h6>


        </div>
    )
}

export default Product
