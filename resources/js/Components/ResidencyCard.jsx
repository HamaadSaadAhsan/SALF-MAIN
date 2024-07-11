import React from "react";
import { Card, CardTitle } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function ResidencyCard({ logo, classNames, title, description, buttonText }) {
    return (
        <Card className={classNames}>
            <div style={{
                marginTop: '-2.3rem',
                marginBottom: '1rem',
                marginLeft: '25px',
                width: 'auto'
            }}
            >
            <a href="#">
                <img className="img-fluid transparent__background __card_logo" width={60} src={logo} alt="logo"/>
            </a>
            </div> 
            <Card.Body className="__card_body_padding">
                <Card.Title className="fw-semibold text-gray">
                    {title}
                </Card.Title>
                <Card.Text className="residency_card_description text-gray">
                    {description}
                </Card.Text>
                <Button variant="light" className="border-gray text-gray rounded rounded-5">{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}

export default ResidencyCard;
