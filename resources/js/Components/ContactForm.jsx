import React from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


const ContactForm = () => {
    return (
        <Form id="consultation_form">
            <div className="row">
                <div className="col-lg-6">
                    <Form.Control
                        type="text"
                        id="name"
                        aria-describedby="clientName"
                        placeholder="Name"
                        className="bg-transparent border border-0 border-bottom border-white rounded-0"
                    />
                </div>

                <div className="col-lg-6">
                    <Form.Control
                        type="text"
                        id="phone"
                        aria-describedby="clientPhone"
                        placeholder="Phone"
                        className="bg-transparent border border-0 border-bottom border-white rounded-0"
                    />
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-6">
                    <Form.Control
                        type="email"
                        id="email"
                        aria-describedby="clientEmail"
                        placeholder="Email"
                        className="bg-transparent border border-0 border-bottom border-white rounded-0"
                    />
                </div>

                <div className="col-lg-6">
                    <input 
                        type="text" 
                        className="form-control bg-transparent text-white border-0 border-bottom border-white rounded-0" 
                        list="data"
                        placeholder="Business Consultancy" 
                    />

                    <datalist id="data">
                        <option key={0} value="Skilled Immigration" />
                        <option key={1} value="Business Immigration" />
                    </datalist>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-lg-12">
                    <Form.Control
                        as="textarea"
                        id="notes"
                        aria-describedby="clientNotes"
                        placeholder="Notes"
                        className="bg-transparent border border-0 border-bottom border-white rounded-0"
                    />
                </div>
            </div>

            <div className="mt-4">
                <a class="btn rounded-0 border text-white border-white">Send Message</a>
            </div>
        </Form>
    );
};

export default ContactForm;
