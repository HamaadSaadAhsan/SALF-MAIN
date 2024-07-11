import React from 'react';
import catalyst_image from "../../assets/Why Choose Photo.png"
import why_saad_ahsan from "../../assets/why_saad_ahsan.png"
import experience from "../../assets/experience.png"
import excellence from "../../assets/excellence.png"
import ethics from "../../assets/ethics.png"
import expertise from "../../assets/expertise.png"

const WhyChooseSaadAhsan = () => {
    return (
        <div className="d-flex bg-white pb-5">
            <div className="container __mt-10 mb-10">
                <div className="row flex-wrap">
                    <div className="col-lg-6">
                        <img src={why_saad_ahsan} className="img-fluid" alt=""/>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3">
                        <h1 className="text-[20px] fw-bold text-black text-lg-end text-center">
                            Why Saad Ahsan
                        </h1>

                        <div className="mt-2 text-lg-end text-center">
                            <p>
                                At Saad Ahsan Law Immigration Firm, we inspire you in every possible way.
                                We understand that everybody dreams of having a luxurious life.
                            </p>
                        </div>

                        <div
                            className="d-flex align-items-center justify-content-lg-end justify-content-center flex-wrap gap-5 mt-4">
                            <div className="d-flex flex-column justify-content-center">
                                <div className="ms-auto me-auto">
                                    <img src={experience} alt="experience"/>
                                </div>
                                <div className="mt-1">
                                    <p className="fw-medium text-center">Experience</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="ms-auto me-auto">
                                    <img src={excellence} width={85} alt="excellence"/>
                                </div>
                                <div className="mt-1">
                                    <p className="fw-medium text-center">Excellence</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="ms-auto me-auto">
                                    <img src={ethics} width={83} alt="excellence"/>
                                </div>
                                <div className="mt-1">
                                    <p className="fw-medium text-center">Ethics</p>
                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-center">
                                <div className="ms-auto me-auto">
                                    <img src={expertise} alt="expertise"/>
                                </div>
                                <div className="mt-1">
                                    <p className="fw-medium text-center">Expertise</p>
                                </div>
                            </div>
                        </div>

                        <div className="row flex-wrap">
                            <div className="col-lg-3  col-4 offset-lg-3 mt-3">
                                <div className="d-flex flex-column fw-medium">
                                    <p className="text-primary text-end mb-0">
                                        Offices worldwide
                                    </p>
                                    <p className="fw-bold text-end" style={{
                                        fontSize: '20px'
                                    }}>
                                        10+
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3  col-4 offset-lg-3 mt-3">
                                <div className="d-flex flex-column fw-medium">
                                    <p className="text-primary text-end mb-0">
                                        Years in the industry
                                    </p>
                                    <p className="fw-bold text-end" style={{
                                        fontSize: '20px'
                                    }}>
                                        20+
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3  col-4 offset-lg-3 mt-3">
                                <div className="d-flex flex-column fw-medium">
                                    <p className="text-primary text-end mb-0">
                                        Immigration options
                                    </p>
                                    <p className="fw-bold text-end" style={{
                                        fontSize: '20px'
                                    }}>
                                        15+
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3 align-items-lg-end offset-md-0 offset-4 col-4 offset-lg-3 mt-3">
                                <div className="d-flex flex-column fw-medium">
                                    <p className="text-primary text-end mb-0">
                                        Years in the industry
                                    </p>
                                    <p className="fw-bold text-end" style={{
                                        fontSize: '20px'
                                    }}>
                                        20,000+
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseSaadAhsan;
