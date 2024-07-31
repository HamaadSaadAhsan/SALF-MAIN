import React from "react";
import choose_ahsan from "../../assets/why_saad_ahsan.png";

const InfoServicesSection = () => {
    return (
        <div className="d-flex bg-white">
            <div className="container __mt-20 pb-5">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column pb-lg-3">
                        <div className="flex-grow-1">
                            <div className="">
                                <h2 className="fs-1 fw-bold">
                                    Catalysts Providing Bespoke Investment
                                    Solutions
                                </h2>
                            </div>
                            <div className="mt-3">
                                <p className="mb-0">
                                    At Saad Ahsan Law Immigration Firm, we
                                    inspire you in every possible way. We
                                    understand that everybody dreams of having a
                                    luxurious life. This is why we are here to
                                    transform your dreams into reality through
                                    our investment programs. Whether it's a
                                    Residency or Citizenship by Investment
                                    program, our immigration experts will guide
                                    you through every step.
                                </p>
                            </div>
                        </div>
                        <div className="mt-lg-auto mt-3 button_div">
                            <a
                                href=""
                                className="border border-black text-black p-2 px-3 fs-6 about_saad_ahsan"
                            >
                                About Saad Ahsan
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex flex-column align-items-lg-end mt-3 mt-lg-0">
                        <div className="flex-grow-1">
                            <img
                                src={choose_ahsan}
                                height={"367px"}
                                width={582}
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoServicesSection;
