import React from "react";
import Portugal from "../../assets/portugal.png";
import Greece from "../../assets/greece.png";
import Malta from "../../assets/malta.png";
import Hungary from "../../assets/hungary.png";
import Uae from "../../assets/uae.png";
import Latvia from "../../assets/latvia.png";
import Usa from "../../assets/usa.png";
import CitizenshipCard from "@/Components/CitizenshipCard.jsx";
import Antigua from "../../assets/Antigua-Barbuda 1.png"
import Dominica from "../../assets/dominica.png"
import Grenada from "../../assets/grenada.png"
import StKittsNevis from "../../assets/Antigua-Barbuda 4.png"
import StLucia from "../../assets/Antigua-Barbuda 5.png"
import Turkey from "../../assets/Antigua-Barbuda 6.png"

function CitizenshipInvestmentPrograms({ title, subtitle, classNames }) {
    return (
        <div className={classNames}>
            <div className="container mt-10">
                <div className="row flex-wrap">
                    <div className="col-lg-3">
                        <div className="d-flex flex-column">
                            <h1 className="fw-bold fs-3 text-black">{title}</h1>
                            <p className="fw-medium text-primary">{subtitle}</p>
                        </div>
                    </div>

                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Antigua}
                                    title="Antigua & Barbuda"
                                    description="Minimum Investment – $230,000
                                    Processing Time – 3 to 4 Months Visa-free Travel to 150+ Countries
                                    Real Estate, Donation Option & Uni Fund"
                                    buttonText="Antigua and Barbuda Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Dominica}
                                    title="Dominica"
                                    description="Minimum Investment – $200,000Processing Time – 3 MonthsVisa-free Travel to 155+ CountriesReal Estate Investment & Donation Option"
                                    buttonText="Dominica Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6 mb-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Grenada}
                                    title="Grenada"
                                    description="Minimum Investment – $200,000Processing Time – 3 MonthsVisa-free Travel to 155+ CountriesReal Estate Investment & Donation Option"
                                    buttonText="Grenada Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                        <CitizenshipCard
                            classNames={
                                "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                            }
                            logo={StKittsNevis}
                            title="St. Kitts and Nevis"
                            description="Minimum Investment – $200,000Processing Time – 3 MonthsVisa-free Travel to 155+ CountriesReal Estate Investment & Donation Option"
                            buttonText="St. Kitts & Nevis Citizenship"
                        />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={StLucia}
                                    title="St. Lucia"
                                    description="Minimum Investment – $200,000Processing Time – 3 MonthsVisa-free Travel to 155+ CountriesReal Estate Investment & Donation Option"
                                    buttonText="St. Lucia Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6 mb-6">
                                <CitizenshipCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-white text-black card__white"
                                    }
                                    logo={Turkey}
                                    title="Turkey"
                                    description="Minimum Investment – $200,000Processing Time – 3 MonthsVisa-free Travel to 155+ CountriesReal Estate Investment & Donation Option"
                                    buttonText="Turkey Citizenship"
                                />
                            </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

export default CitizenshipInvestmentPrograms;
