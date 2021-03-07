import React from 'react';
import { useLocation } from "react-router-dom";
import InnerBanner from '../../Layout/InnerBanner';

const ProductDetail = () => {
    const location = useLocation();
    const img = location.state.img;
    const title = location.state.name;
    const subtitle = location.state.subtitle;
    const description = location.state.description;


    return (
        <>
            <InnerBanner bannerText={title} />

            <section className="product-detail">
                <div className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="prd-img">
                                <img src={img} alt=""/>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="prd-det">
                                <h4>{ title }</h4>
                                <h6> {  subtitle } </h6>

                                <p>
                                    { description }
                                 </p>

                                <div className="av-shop">
                                    <h5>Shop Now</h5>
                                    <a href="https://shopkeynep.com/" target="_blank">Shopkey</a>
                                    <a href="https://daraz.com.np/" target="_blank">Daraz</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetail
