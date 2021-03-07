import React from 'react';
import InnerBanner from '../../Layout/InnerBanner';
import Product from '../Home/Product';
import Pdata from '../Home/Pdata';


const Products = () => {
    return (
        <React.Fragment>
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
                        Pdata.map( (val,index) => {
                            return(
                                <div className="col-md-4">
                                    <Product key={index}
                                        img={val.img}
                                        name={val.title}
                                        subtitle={val.subtitle}
                                        description={val.description}
                                        shopDaraz={val.shop.daraz}
                                        shopShopkey={val.shop.shopkey}
                                    />
                                </div>
                            );
                        } )
                    }


                    </div>
                </div>
            </section>
        
            

        </React.Fragment>
    )
}

export default Products;
