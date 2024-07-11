import React from 'react';
import ceo from "../../assets/ceo.png"
import styled from 'styled-components';

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

const Image = styled.img`

`;

const CeoMessage = () => {
    return (
        <div className="map_background bg-white">
            <div className="container h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-lg-3">
                        <Container>
                            <Shape/>
                            <Image src={ceo} className="img-fluid" alt="ceo"/>
                        </Container>
                    </div>
                    <div className="col-lg-9 align-items-center">
                        <div className="d-flex flex-column">
                            <h3 className="fw-bold text-black">Welcome message from CEO to New Client</h3>
                            <div className="mt-4">
                                <p className="text-primary fw-bold">Welcome Message</p>
                                <p className="fw-medium">Welcome to Saad Ahsan Law Firm, the pioneer of Second
                                    Passport
                                    Solutions. For over two decades, we've dedicated ourselves to unparalleled legal
                                    excellence, specializing in Immigration Law and Citizenship/Residency by
                                    Investment
                                    programs. Our expert consultants go beyond legal counsel, serving as trusted
                                    partners to help you achieve diverse goals, from maximizing ROIs to facilitating
                                    business relocation and formation. </p>
                            </div>

                            <div className="mt-4">
                                <p className="text-primary fw-bold mb-1">Ahsan Khaliq</p>
                                <p className="mb-0">CEO & Founder</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CeoMessage;
