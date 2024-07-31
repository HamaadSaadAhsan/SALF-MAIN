import React from "react";

import passport from "../../assets/passport.png";
import clock from "../../assets/clock-months.png";
import donation from "../../assets/donation.png";
import investment from "../../assets/investment.png";
import { IconDownload } from "@tabler/icons-react";

const StKittsInfo = () => {
    return (
        <div className="st_kitts_info_header d-flex flex-column col-lg-12 p-5 position-relative">
            <div className="container">
            <h1 className="text-white fw-bold">St Kitts and Nevis</h1>
            <p className="text-white">
                St Kitts and Nevis Citizenship by Investment program dates back
                to 1984 and is the oldest citizenship option. The country offers
                citizenship by donation and investment options. With a minimum
                of $250,000 contribution, you can become St Kitts and Nevis
                citizen and travel visa-free to 150+ countries.
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

            <div className="d-flex gap-2 flex-wrap mt-5">
                <a className="btn border border-white rounded-0 text-white">
                    Book Appointment
                </a>
                <a className="btn border border-white rounded-0 text-white pe-4">
                    <div className="d-flex align-items-center">
                        <IconDownload size={22} className="me-2" />
                        <div>E-Brochure</div>
                    </div>
                </a>
            </div>

            <div className="position-absolute" style={{ backgroundColor: 'rgba(205, 162, 64, 1)', bottom: 15, width: '800px', zIndex: 100 }}>
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

export default StKittsInfo;
