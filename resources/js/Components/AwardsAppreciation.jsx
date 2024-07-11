import React from 'react';
import {Card, CardBody} from "react-bootstrap";
import Award1 from "../../assets/award_1.png"

const AwardsAppreciation = () => {
    return (
        <div className="custom-light-bg">
                <div className="container __mt-10">
                <div className="row mb-5">
                    <div className="col-lg-3">
                        <div className="">
                            <h4 className="fw-bold">Awards of Appreciation</h4>
                        </div>
                        <div className="">
                            <p className="fw-medium">Saad Ahsan Law Firm takes immense pride in international recognition by showcasing our prestigious international awards across diverse countries.</p>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="row justify-content-end">
                            <div className="col-lg-3">
                                <Card style={{ width: '234px' }} border="white" className="rounded-0 shadow-sm">
                                    <CardBody>
                                        <Card.Img variant="bottom" src={Award1}/>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-lg-3">
                                <Card style={{ width: '234px' }} border="white" className="rounded-0 shadow-sm">
                                    <CardBody>
                                        <Card.Img variant="bottom" src={Award1}/>
                                    </CardBody>
                                </Card>
                            </div>
                            <div className="col-lg-3">
                                <Card style={{ width: '234px' }} border="white" className="rounded-0 shadow-sm">
                                    <CardBody>
                                        <Card.Img variant="bottom" src={Award1}/>
                                    </CardBody>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AwardsAppreciation;
