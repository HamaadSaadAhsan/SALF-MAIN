import React from "react";
import why_saad_ahsan from "../../assets/why_saad_ahsan.png";
import experience from "../../assets/badge.png";
import excellence from "../../assets/user_circle.png";
import ethics from "../../assets/globe.png";
import expertise from "../../assets/trust.png";

const WhyChooseSaadAhsan = () => {
    return (
        <div className="d-flex bg-white pb-5">
            <div className="container __mt-10 mb-10">
                <div className="row justify-content-between flex-wrap">
                    <div className="col-lg-5">
                        <div className="container p-3 justify-content-center bg-gray" style={{ height: '200px' }}></div>
                        <div className="row align-items-center gap-2 justify-content-center p-3" style={{ marginTop: '-11.5rem' }}>
                                <div className="col-lg-5 d-flex flex-column bg-black rounded">
                                    <div className="align-items-center py-3">
                                        <p className="fs-4 text-white text-center fw-bold mt-auto mb-0">20+</p>
                                        <p className="text-primary text-center mb-0">Years in the industry</p>
                                    </div>
                                </div>   
                                <div className="col-lg-5 d-flex flex-column bg-black rounded">
                                    <div className="align-items-center py-3">
                                        <p className="fs-4 text-white text-center fw-bold mt-auto mb-0">10+</p>
                                        <p className="text-primary text-center mb-0">Offices worldwide</p>
                                    </div>
                                </div>
                                   
                                <div className="col-lg-5 d-flex flex-column bg-black rounded">
                                    <div className="align-items-center py-3">
                                        <p className="fs-4 text-white text-center fw-bold mt-auto mb-0">15+</p>
                                        <p className="text-primary text-center mb-0">Immigration options</p>
                                    </div>
                                </div>     
                                <div className="col-lg-5 d-flex flex-column bg-black rounded">
                                    <div className="align-items-center py-3">
                                        <p className="fs-4 text-white text-center fw-bold mt-auto mb-0">20,000+</p>
                                        <p className="text-primary text-center mb-0">Satisfied clients</p>
                                    </div>
                                </div>     
                        </div>
                    </div>
                    <div className="col-lg-6 mt-lg-0 mt-3">
                        <h1 className="fs-2 fw-bold text-black">
                            Why Saad Ahsan
                        </h1>

                        <div className="mt-3">
                            <p>
                                At Saad Ahsan Law Immigration Firm, we inspire
                                you in every possible way. We understand that
                                everybody dreams of having a luxurious life.
                            </p>
                        </div>

                        <div className="row mt-4 ps-0 pe-0 ms-0 me-0">
                            <div className="col-lg-3 ps-0 pe-0 ms-0 me-0">
                                <div className="ms-auto me-auto text-center">
                                    <img src={experience} alt="experience" />
                                </div>
                                <div className="mt-1">
                                    <p className="fw-bold text-center">
                                        Experience
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3  ps-0 pe-0 ms-0 me-0">
                                <div className="ms-auto me-auto text-center">
                                    <img
                                        src={excellence}
                                        width={85}
                                        alt="excellence"
                                    />
                                </div>
                                <div className="mt-1">
                                    <p className="fw-bold text-center">
                                        Excellence
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3  ps-0 pe-0 ms-0 me-0">
                                <div className="ms-auto me-auto text-center">
                                    <img
                                        src={ethics}
                                        width={83}
                                        alt="excellence"
                                    />
                                </div>
                                <div className="mt-1">
                                    <p className="fw-bold text-center">
                                        Ethics
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-3  ps-0 pe-0 ms-0 me-0">
                                <div className="ms-auto me-auto  text-center">
                                    <img src={expertise} alt="expertise" />
                                </div>
                                <div className="mt-1">
                                    <p className="fw-bold text-center">
                                        Expertise
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
