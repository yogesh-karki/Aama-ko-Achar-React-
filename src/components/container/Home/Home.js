import React, { useState, useEffect } from 'react';
import Button from '../../Layout/Button';
import Available from './Available';
import VideoModal from './VideoModal';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from './Product';
import Testimonial from './Testimonial';
import Avdata from './Avdata';
import Pdata from './Pdata';




const Home = () => {

        var settings = {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            speed: 5000,
            autoplaySpeed: 200,
        
            responsive: [
                {
                    breakpoint:1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    }
                },

                {
                    breakpoint:600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        infinite: true,
                    }
                },

                {
                    breakpoint:480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },

            ]


        };

        var settingsSlides = {
            infinite: true,
            slidesToShow: 2,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 8000,
        
            responsive: [
                

                {
                    breakpoint:600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },

                {
                    breakpoint:480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },

            ]


        };
   



    return (
        <>

            <section className="banner">
                <div className="overlay banner-overlay" style={{background:'url(/images/grid.png)'}}></div>
                <video autoPlay muted loop id="myVideo" >
                    <source src="images/video/new.mp4" type="video/mp4" />
                </video>

                <div className="banner-text">
                    <h1>Aama ko achar</h1>
                    <p>A home made product filled with the finest fresh ingredients</p>
                </div>
            </section>

            <section className="intro">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-5">
                            <div className="intro-text">
                                <h4>A Taste of Mom's Love</h4>

                                <p>Under the brand of AAMA KO ACHAR registered under NEPAL ACHAR UDHYOG Sangita develops her love for 
                                pickle making and produces varieties of purely homemade pickles. Her pickles come with one goal, to bring to the marketplace a 
                                home made product filled with the finest fresh ingredients.</p>

                                <Button buttonText='Our Story'  buttonLink='/about-us' />
                            </div>
                        </div>

                        <div className="col-md-6 offset-md-1">
                            <div className='intro-img'>
                                <img src="/images/ab4.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        

            <section className="video">
                <div className="container-fluid">
                   <VideoModal /> 
                </div>
            </section>

            <section className="products">
                <div className="sec-head">
                    <h5>Our Products</h5>
                </div>

                <div className="prd-slide">
                    <div className="container-fluid">
                        <Slider {...settings}>

                            {
                                Pdata.map( (val,index) => {
                                    return(
                                        
                                        <Product key={index}
                                            img={val.img}
                                        name={val.title}
                                        subtitle={val.subtitle}
                                        description={val.description}
                                        shopDaraz={val.shop.daraz}
                                        shopShopkey={val.shop.shopkey}
                                        />
                                
                                    );
                                } )
                            }

                        </Slider>

                        <div className="prdts-more">
                            <Button buttonText='Discover More' buttonLink='/our-products' />
                        </div>

                    </div>
                </div>
            </section>

            <section className="aval-at">
                <div className="container">
                    <div className="sec-head">
                        <h5>we are available at</h5>
                    </div>

                    <div className="avl-list">
                        <div className="row">
                            

                      

                            {
                                Avdata.slice(0,9).map( (val, index) => {
                                    return(
                                        <Available 
                                        key={index}
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

            <section className="testimonial">
                <div className="container">
                    <div className="sec-head">
                        <h5>Words from our customers</h5>
                    </div>

                    <div className="te-slides">
                        <div className="te-sliderwrap">
                            <Slider {...settingsSlides}>
                            <Testimonial 
                                img="./images/t1.jpg"
                                name="Malvika Subba"
                                bio="Tv Host, Trainer and Emcee"
                                sayings="One day I was automatically drawn to these achaars on a shelve during my grocery shopping.
                                    I loved the name and for some reason was drawn to it. I bought the Tama dalle paste and loved it.
                                    It was fresh and delicious. Made with love and full of flavour."
                            />
                            <Testimonial 
                                img="./images/t2.jpg"
                                name="Dr Bishal Gautam"
                                bio="Health at Home"
                                sayings="Amako Achar name itself is close to heart. When I first saw Amako Achar in racks of Bhat Bhateni Store
                                 I without hesitation picked 4 flavors and was never disappointed after. 
                                 My best is Timur Chop and I am fan of its spicy and tangy Sichuan nature of taste."
                            />

                            <Testimonial 
                                img="./images/t3.jpg"
                                name="Nepali Bazaar - London"
                                bio="Specialty Grocery Store"
                                sayings="Ama Ko Achar is the most loved and best selling pickle currently in the market. 
                                Its taste originates from the recipe  that is used by Ama(Mother) and is passed down through generation."
                            />


                        </Slider>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sperate">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sep-sing">
                                <img src="./images/home-made.svg" alt=""/>
                                <h5>Home made <span>pickles</span> </h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="sep-sing">
                                <img src="./images/motherly-loved.svg" alt=""/>
                                <h5>Motherly cooked <span>feeling</span> </h5>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="sep-sing">
                                <img src="./images/no-color.svg" alt=""/>
                                <h5>No artificial <span>color used</span> </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;


