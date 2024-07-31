import React from 'react';
import heroImage from '../../assets/header.png'
const Hero = () => {
    return (
        <div className="hp-banner">
            <div className="banner">
                <div className="image-wrapper">
                    <picture>
                        <img src={heroImage} className="img-fluid hero_image" alt="hero image"/>
                    </picture>
                </div>
                <div className="container home-hero">
                    <div className="row row-hero">
                        <div className="col-md-10 hero-text-col ">
                            <h1 className="text-[35px] text-start fw-bold pt-1_5">
                                <span className="text-primary">Your Journey to <br/></span>
                                <span className="text-white">
                                    Residence And Citizenship
                                </span>
                                <br/>
                                <span className="text-primary">Starts Here</span>
                            </h1>
                            <p className="mt-5 text-white">
                                Expand your global reach, enjoy travel freedom, and long-term residency or citizenship in your chosen destination. 
                                Expand your global reach, enjoy travel freedom, and long-term residency or citizenship in your chosen destination.
                            </p>

                            <div className="mt-10">
                                <a href="" className="border border-white text-white _become_a_client">
                                    Become a Client Now!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
