import React from "react";

import passport from "../../assets/passport-white.png";
import clock from "../../assets/clock-white.png";
import donation from "../../assets/donation-white.png";
import investment from "../../assets/real-estate-white.png";

const CitizenshipInfo = () => {
    return (
        <div className="citizenship_investment_info_header d-flex flex-column align-items-end col-lg-12 p-5 position-relative">
            <div className="container text-end">
                <h1 className="text-white fw-bold">Citizenship</h1>
                <p className="text-white">
                    The St Kitts and Nevis Citizenship by Investment program is one of the oldest and most trusted options. 
                    Since 1984, St Kitts & Nevis citizenship has been an ideal option for wealthy individuals across the world.
                </p>

                <div className="d-flex gap-2 flex-wrap mt-2">
                    <div className="d-flex flex-column border py-2 px-2">
                        <div className="text-center mt-auto">
                            <img src={passport} className="img-fluid" />
                        </div>
                        <div className="mt-auto">
                            <div>
                                <p className="mb-1 text-white text-center">
                                    visa-free access
                                </p>
                            </div>
                            <div>
                                <span
                                    className="fw-bold text-white fs-4"
                                    style={{ position: "relative" }}
                                >
                                    150{" "}
                                    <span
                                        className="text-white fw-medium fs-5"
                                        style={{
                                            position: "absolute",
                                            bottom: 8,
                                            left: 43,
                                        }}
                                    >
                                        +
                                    </span>{" "}
                                </span>{" "}
                                <small className="text-white ms-2">Countries</small>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column border py-2 px-4">
                        <div className="text-center mt-auto">
                            <img src={clock} className="img-fluid" />
                        </div>
                        <div className="mt-auto">
                            <div>
                                <p className="mb-1 fw-bold text-center text-white fs-4">
                                    8-12
                                </p>
                            </div>
                            <div>
                                <span className="text-white">Months</span>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-column border py-2 px-3">
                        <div className="text-center">
                            <img src={donation} className="img-fluid" />
                        </div>
                        <div className="text-center">
                            <small className="text-white">Donation</small>
                        </div>
                        <div>
                            <p className="mb-1 fw-bold text-white text-center fs-4">
                                250,000
                            </p>
                        </div>
                        <div>
                            <span className="text-white">Min Investment</span>
                        </div>
                    </div>

                    <div className="d-flex flex-column border py-2 px-2">
                        <div className="text-center">
                            <img src={investment} className="img-fluid" />
                        </div>
                        <div className="text-center">
                            <small className="text-white">Real Estate</small>
                        </div>
                        <div>
                            <p className="mb-1 fw-bold text-white text-center fs-4">
                                350,000
                            </p>
                        </div>
                        <div>
                            <span className="text-white">Min Investment</span>
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-5">
                    <a className="btn border border-white rounded-0 text-white ms-auto">
                        Book Appointment
                    </a>
                </div>

                <div className="position-absolute" style={{ backgroundColor: 'black', bottom: 15, width: '800px', zIndex: 100, right: 56 }}>
                <div className="d-flex align-items-center gap-5 px-4 text-white mt-auto fw-medium">
                        <div className="subtext__info text-center py-2">About St. Kitts & Nevis</div>
                        <div className="subtext__info text-center py-2">Investment Option</div>
                        <div className="subtext__info text-center py-2">Benefits</div>
                        <div className="subtext__info__end">
                            <p className="mb-0 text-center">Eligibility</p>
                        </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CitizenshipInfo;
