import React from 'react';
import InnerBanner from '../../Layout/InnerBanner';
import Avdata from "../Home/Avdata";
import Available from '../Home/Available';

const Products = () => {
    return (
        <React.Fragment>
            <InnerBanner bannerText='Shop' />

            <section className="aval-at av-mainpage">
                <div className="container">
                    <div className="avl-list">
                        <div className="row">

                            {
                                Avdata.map( (val) => {
                                    return(
                                        <Available
                                            location={val.location}
                                            src={val.img}
                                        />
                                    );
                                } )
                            }
                        </div>
                    </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Products;
