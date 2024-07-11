import React from 'react';
import choose_ahsan from "../../assets/Why Choose Photo.png"

const InfoServicesSection = () => {
    return (
        <div className="d-flex bg-white">
            <div className="container __mt-10">
                <div className="row ">
                    <div className="col-lg-6 ">
                        <div className="">
                            <h4>
                                Catalysts Providing Bespoke Investment Solutions
                            </h4>
                        </div>
                        <div className="">
                            <p>
                                At Saad Ahsan Law Immigration Firm, we inspire you in every possible way. We understand
                                that everybody dreams of having a luxurious life. This is why we are here to transform
                                your dreams into reality through our investment programs. Whether it's a Residency or
                                Citizenship by Investment program, our immigration experts will guide you through every
                                step.
                            </p>
                        </div>
                        <div className="mt-4">
                            <a href="" className="border border-black text-black p-2 fs-6 about_saad_ahsan">About
                                Saad Ahsan</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex flex-column align-items-lg-end">
                            <img src={choose_ahsan} className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoServicesSection;
