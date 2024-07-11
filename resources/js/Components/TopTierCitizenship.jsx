import React from "react";
import ResidencyCard from "@/Components/ResidencyCard";
import AntiguaBarbudaLogo from "../../assets/Antigua-Barbuda 1.png";
import DominicaLogo from "../../assets/Antigua-Barbuda 2.png";
import GrenadaLogo from "../../assets/Antigua-Barbuda 3.png";
import StKittsLogo from "../../assets/Antigua-Barbuda 4.png";
import StLucia from "../../assets/Antigua-Barbuda 5.png";
import TurkeyLogo from "../../assets/Antigua-Barbuda 6.png";

function TopTierCitizenship() {
    return (
        <div className="d-flex bg-black pt-5">
            <div className="container mt-10">
                <div className="row flex-wrap">
                    <div className="col-lg-2">
                        <div className="d-flex flex-column">
                            <h1 className="fw-bold fs-3 text-white">
                                Our Top-Tier Citizenship Programs
                            </h1>
                            <p className="fw-medium text-primary">
                                Citizenship by Investment Programs
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-10">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={AntiguaBarbudaLogo}
                                    title="Antigua & Barbuda"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Antigua & Barbuda Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={DominicaLogo}
                                    title="Dominica"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Dominica Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6 mb-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={GrenadaLogo}
                                    title="Grenada"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="Grenada Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={StKittsLogo}
                                    title="St. Kitts and Nevis"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="St. Kitts & Nevis Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={StLucia}
                                    title="Antigua & Barbuda"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
                                    buttonText="St. Lucia Citizenship"
                                />
                            </div>
                            <div className="col-lg-4 col-md-4 col-6 mb-6">
                                <ResidencyCard
                                    classNames={
                                        "border-gray shadow shadow-lg rounded rounded-4 bg-black text-gray"
                                    }
                                    logo={TurkeyLogo}
                                    title="Antigua & Barbuda"
                                    description="It started in 2013 and is the most affordable option in the Caribbean, with the possibility of donating a minimum of $100,000."
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

export default TopTierCitizenship;
