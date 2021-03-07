import React from 'react';
import { useHistory } from 'react-router-dom';

const Product = (props) => {

    const History = useHistory();

    const clickfxn = () => {
        History.push({
            pathname: '/productdetail',
            search: `/${props.name}`,
            state: { 
                img: props.img,
                name: props.name,
                subtitle: props.subtitle,
                description: props.description,
                shopDaraz: props.shopDaraz,
                shopShopkey: props.shopShopkey
             }
        })
    }

    return (
        <div className="sp-wrap">
            <img src={props.img} alt=""/>
            <h6><a onClick={ clickfxn } > {props.name} </a></h6>


        </div>
    )
}

export default Product;
