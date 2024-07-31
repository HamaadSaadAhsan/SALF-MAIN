import React from "react";
import Portugal from "../../assets/portugal.png";
import Greece from "../../assets/greece.png";
import Malta from "../../assets/malta.png";
import Hungary from "../../assets/hungary.png";
import Uae from "../../assets/uae.png";
import Latvia from "../../assets/latvia.png";
import Usa from "../../assets/usa.png";
import CitizenshipCard from "@/Components/CitizenshipCard.jsx";

function TopTierResidence({ title, subtitle, classNames }) {
    return (
        <div className={classNames}>
            <div className="container mt-10">
                <div className="row flex-wrap">
                    <div className="col-lg-2">
                        <div className="d-flex flex-column">
                            <h1 className="fw-bold fs-3 text-black">{title}</h1>
                            <p className="fw-medium text-primary">{subtitle}</p>
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Portugal}
                                    title="Portugal"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Portugal Golden Visa"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Greece}
                                    title="Greece"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Greece Golden Visa"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6 mb-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Malta}
                                    title="Malta"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Malta Residency"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-lg-4 col-md-4 col-6">
                        <CitizenshipCard
                            classNames={
                                "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                            }
                            logo={Hungary}
                            title="Hungary"
                            description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                            buttonText="Hungary Residency"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-6">
                        <CitizenshipCard
                            classNames={
                                "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                            }
                            logo={Uae}
                            title="UAE"
                            description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                            buttonText="UAE Golden Visa"
                        />
                    </div>
                    <div className="col-lg-4 col-md-4 col-6 mb-6">
                        <CitizenshipCard
                            classNames={
                                "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                            }
                            logo={Latvia}
                            title="Latvia"
                            description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                            buttonText="Latvia Residency"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopTierResidence;
