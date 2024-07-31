import React from "react";
import ContactForm from "@/Components/ContactForm";

const ConsulationForm = () => {
    return (
        <div className="d-flex flex-column gap-3 border border-white px-5 py-4">
            <div>
                <h3 className="fw-bold text-white">
                    Request Free Consultation
                </h3>
            </div>
            
            <ContactForm className="my-3" />

        </div>
    );
};

export default ConsulationForm;
