import React from 'react';
import InnerBanner from '../../Layout/InnerBanner';
import { useForm } from "react-hook-form";



 

const Contact = () => {

    const { register, handleSubmit, errors } = useForm({

    });
    const onSubmit = data => console.log(data);


    return (
        <div>
            <InnerBanner bannerText='Contact Us' />

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="co-wrap">
                                <h5>Visit us</h5>
                                <p>Lamingtan Marg,</p>
                                <p>Baluwatar, Nepal </p>
                                <p>Nepal</p>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="co-wrap">
                                <h5>Get in touch</h5>
                                <a href="" className="mail-underline">info@aamakoachar.com.np</a>
                                <a href="" > 01-4424136</a>
                                <a href="" > 9851182371</a>
                                
                            </div>
                        </div>
                    </div>

                    <div className="formap">
                        <a href="https://www.google.com/maps/place/Aama+Ko+Achar/@27.7315069,85.3280941,17z/data=!3m1!4b1!4m5!3m4!1s0x39eb193e67ae6315:0xcf50ff93d72f3bd0!8m2!3d27.7315022!4d85.3302828" target="_blank">Get Direction <i className="fas fa-location-arrow"></i></a>
                    </div>


                    <div className="co-form">
                        <div className="in-title">
                            <h6>LEAVE A MESSAGE</h6>
                            <h2>Need additional information? Have a question or comment?</h2>

                        </div>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input
                                 
                                type="text" 
                                placeholder="Full Name" 
                                name="name" 
                                ref={register({ required: true })} 
                                required

                            />
                          
                            <input 
                                type="email" 
                                placeholder="Email Address" 
                                name="email" 
                                ref={register({ required: true })} 

                            />

                            <input 
                                type="number" 
                                placeholder="Phone Number" 
                                name="phone" 
                                ref={register({ required: true })} 
                                required
                            />

                            <textarea 
                                placeholder="Type your message here" 
                                name="message" 
                                ref={register({ required: true })} >
                                required
                            </textarea>

                            <div className="line-btn">
                                <button type="submit" >Leave a Message</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact;
