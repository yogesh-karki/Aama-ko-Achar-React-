import React from 'react';
import InnerBanner from '../../Layout/InnerBanner';
import Product from '../Home/Product';
import Pdata from '../Home/Pdata';

const Products = () => {
    return (
        <div>
            <InnerBanner bannerText="Our Products" />

            <section className="about-sec">
                <div className="container">
                    <div className="in-title">
                        <h6>initiatiation</h6>
                        <h2>AAMA KO ACHAR | Purely homemade pickles</h2>
                    </div>
                </div>
            </section>

            <section className="products-list">
                <div className="container">
                    <div className="row">
                    {
                        Pdata.map( (val) => {
                            return(
                                <div className="col-md-4">
                                    <Product
                                        img={val.img}
                                        name={val.title}
                                    />
                                </div>
                            );
                        } )
                    }


                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products;
