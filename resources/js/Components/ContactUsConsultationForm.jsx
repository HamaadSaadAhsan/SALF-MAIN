import React from "react";
import ContactUsInfo from "@/Components/ContactUsInfo.jsx";
import ConsulationForm from "@/Components/ConsulationForm";

const ContactUsConsultationForm = () => {
    return (
        <div className="d-flex border background__image">
            <div className="container">
                <div className="d-flex flex-row gap-5 align-items-center">
                    <ContactUsInfo />
                    <ConsulationForm />
                </div>
            </div>
        </div>
    );
};

export default ContactUsConsultationForm;
