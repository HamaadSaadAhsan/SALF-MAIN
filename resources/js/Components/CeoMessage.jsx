import React from "react";
import ceo from "../../assets/ceo.png";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 250px;
    height: 316px;
    top: 0;
`;

const Shape = styled.div`
    position: absolute;
    bottom: 18px;
    left: 8px;
    width: 220px;
    height: 220px;
    background-color: #969696;
    border-radius: 10px;
    z-index: -1;
`;

const Image = styled.img``;

const CeoMessage = () => {
    return (
        <div className="d-flex bg-gray py-5 ceo__message">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="d-flex flex-column">
                            <p className="text-primary fw-bold mb-1 __heading">Meet The</p>
                            <h3 className="fw-bold text-black">
                                CEO & Founder
                            </h3>
                            <div className="mt-4">
                                <p className="fw-medium text-black">
                                    Welcome to Saad Ahsan Law Firm, the pioneer of Second Passport Solutions. For over two decades, we've dedicated ourselves to unparalleled legal excellence, specializing in Immigration Law and Citizenship/Residency by Investment programs. Our expert consultants go beyond legal counsel, serving as trusted partners to help you achieve diverse goals, from maximizing ROIs to facilitating business relocation and formation. With a track record of assisting over 1300 families in property and tax planning, our commitment reflects unwavering support for your success. Beyond legal realms, we guide you through travel, real estate, business formation, and wealth planning, making the entire process seamless and comprehensible. Saad Ahsan Law Firm is your steadfast companion on this transformative journey.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3">
                        <Image src={ceo} className="img-fluid" alt="ceo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoMessage;
