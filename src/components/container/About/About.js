import React from 'react';
import InnerBanner from '../../Layout/InnerBanner';

const About = () => {
    return (
        <React.Fragment>
            <InnerBanner bannerText='About Us' />

            <section className="about-sec">
                <div className="container">
        
                        <div className="in-title">
                            <h6>initiatiation</h6>
                            <h2>AAMA KO ACHAR | Purely homemade pickles</h2>


                            <div className="text-half">
                               
                                <div className="hal-text">
                                    <p>For very long time, community enjoyed her home made pickle but Sangita 
                                        always had a plan to take her skill to a next level and start a small pickle
                                        making venture. Hardworking and passionate, Sangita always believes in her words.
                                        </p>
                                </div>
                        

                                <div className="hal-text">
                                    <p> Upon financial approval from loving and encouraging husband, TULSHI RAM PANDEY, who 
                                        is a retired government official, in 2011, she finally registered her company.
                                        </p>
                                </div>
                              
                            </div>
                        </div>


                </div>
            </section>

            <section className="about">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-md-6">
                            <div className="abt-text">
                                <h4>Our main purpose in life is to know what our gift and give it back.</h4>

                                <p>
                                    Now under the brand of AAMA KO ACHAR registered under NEPAL ACHAR UDHYOG Sangita develops her
                                    love for pickle making and produces varieties of purely homemade pickles. Her special favorite 
                                    Red Hot Cherry Pepper comes into five different presentations. Her pickles come with 
                                    one goal, to bring to the marketplace a home made product filled with the finest fresh 
                                    ingredients. As the name suggests, it purely gives you a motherly cooked feeling.
                                </p>
                                
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="abt-img">
                                <img src="./images/ab1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>

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
            </section>

            <section className="about">
                <div className="container">
                    <div className="row align-items-end">
                        

                        <div className="col-md-6">
                            <div className="abt-img">
                                <img src="./images/ab5.jpg" alt=""/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="abt-text pad-right">
                                <h4>It’s so nice to go pick your dinner and make it. It's relaxing and very fulfilling,</h4>

                                <p>
                                Besides work, Sangita loves gardening and finds growing her own food at home relaxing and 
                                very fulfilling. Her interest in terrace gardening has brought in a healthy environment towards 
                                her family. By using simple techniques, Sangita has created wonders in her 400-square feet terrace
                                 garden which now gives her varieties of vegetables including spinach, beans, tomato, ginger, 
                                 coriander, chilies, pumpkin among others.According to Sangita, they have almost stopped buying
                                  vegetables from the market for the past one & half years.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            

        </React.Fragment>
    )
}

export default About;
