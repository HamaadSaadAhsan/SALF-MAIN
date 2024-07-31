import HeroStKittsNevis from "@/Components/HeroStKittsNevis";
import Layout from "@/Layouts/Layout";
import React from "react";
import Landscape from "../../../assets/landscape.png";
import { Col, Container, Row } from "react-bootstrap";
import { IconChartAreaLine, IconCoins, IconUsers } from "@tabler/icons-react";
import familyStKitts from "../../../assets/family_stkitts.png";
import ShieldCheck from "../../../assets/shield-check.svg";
import CitizenshipInvestment from "../../../assets/citizen-investment.png";
import MapContinents from "../../../assets/map__continents.png";
import BorderCard from "../../../assets/border-card-new.png";
import ContactUsConsultationForm from "@/Components/ContactUsConsultationForm";
import CustomAccordion from "@/Components/CustomAccordion";

const StKittsNevis = () => {
    const openWindow = (el, svg = false) => {
        let items = document.querySelectorAll(".item");

        items.forEach(function (el, index) {
            el.classList.remove("active");
        });

        if (svg) {
            el.target.closest(".item").classList.add("active");
        } else {
            el.target.parentNode.classList.add("active");
        }
    };

    const closeWindow = (el) => {
        el.target.parentNode.parentNode.classList.remove("active");
    };

    return (
        <Layout>
            <HeroStKittsNevis />

            <div className="d-flex mt-10 mb-6">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h4 className="text-primary fw-bold  mb-0">
                                    St Kitts and Nevis
                                </h4>
                            </div>
                            <div>
                                <h3 className="fw-bold">
                                    Citizenship by Investment
                                </h3>
                            </div>

                            <div>
                                <p>
                                    The St Kitts and Nevis Citizenship by
                                    Investment program is one of the oldest and
                                    most trusted options. Since 1984, St Kitts &
                                    Nevis citizenship has been an ideal option
                                    for wealthy individuals across the world. St
                                    Kitts passport is one of the strongest
                                    passports with visa-free access to 150+
                                    countries.
                                </p>

                                <p>
                                    Investment options start at $250,000 and
                                    take 4 months to process. In addition to the
                                    qualification investment or donation, you
                                    need to pay a due diligence fee, lawyer
                                    fees, and some processing fees.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img src={Landscape} className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Container fluid className="py-4" style={{ marginBottom: "14rem" }}>
                <Row className="position-relative mb-6">
                    <Col
                        xs={4}
                        md={4}
                        sm={12}
                        className="mb-3 mb-md-0 py-3 px-5 bg-primary"
                        style={{
                            position: "absolute",
                            left: 0,
                            top: "-60px",
                            height: "288px",
                            zIndex: 999,
                            width: "672px",
                        }}
                    >
                        <h4 className="text-black fw-bold mb-0">
                            St Kitts and Nevis
                        </h4>
                        <h3 className="text-white">Economy – An Overview</h3>
                        <p className="text-black">
                            Formerly a British colony, St Kitts and Nevis boasts
                            a mix of cultural influences, making it easy for
                            newcomers to settle. The black volcanic sand beaches
                            attract tourists year-round. English is the official
                            language, and off-shore banking is a key economic
                            factor. With fertile land, export-oriented
                            manufacturing, and a booming real estate sector, the
                            country is ideal for investors.
                        </p>
                    </Col>
                    <Col
                        xs={12}
                        md={8}
                        className="bg-black text-white"
                        style={{
                            position: "absolute",
                            right: 0,
                            height: "288px",
                            width: "1100px",
                        }}
                    >
                        <Row
                            className="align-items-center"
                            style={{ height: "100%" }}
                        >
                            <Col md={2} lg={2} sm={2}></Col>
                            <Col
                                md={2}
                                lg={2}
                                sm={2}
                                className="d-flex flex-column"
                            >
                                <div className="mb-1">
                                    <IconUsers size={34} />
                                </div>
                                <div className="d-flex flex-column">
                                    <p className="fw-bold text-primary mb-2">
                                        Population
                                    </p>
                                    <p className="text-white mb-0">55,000</p>
                                </div>
                            </Col>
                            <Col
                                md={2}
                                lg={2}
                                sm={2}
                                className=" d-flex flex-column"
                            >
                                <div className="mb-1">
                                    <svg
                                        width="33"
                                        height="34"
                                        viewBox="0 0 33 34"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 0V25.5H8.25V34H33V8.5H24.75V0H0ZM2.75 2.83333H22V9.29688L9.02344 22.6667H2.75V2.83333ZM9.625 5.66667V7.08333H5.5V9.91667H12.2891C12.1118 11.5436 11.6284 12.8275 10.8281 13.724C10.3555 13.5635 9.93115 13.3643 9.58203 13.1484C8.61523 12.5563 8.25 11.9255 8.25 11.3333H5.5C5.5 13.0212 6.50977 14.4268 7.86328 15.362C7.18652 15.5114 6.40234 15.5833 5.5 15.5833V18.4167C7.93848 18.4167 9.96875 17.8411 11.5156 16.7786C12.2354 16.9059 12.9658 17 13.75 17V14.3438C14.4966 13.0544 14.894 11.5492 15.0391 9.91667H16.5V7.08333H12.375V5.66667H9.625ZM23.9766 11.3333H30.25V31.1667H11V24.7031L23.9766 11.3333ZM22 13.9453L20.7109 17.974L17.9609 26.474L17.875 26.6953V28.3333H20.625V27.0938L20.668 26.9167H23.332L23.375 27.0938V28.3333H26.125V26.6953L26.0391 26.474L23.2891 17.974L22 13.9453ZM22 22.8438L22.3867 24.0833H21.6133L22 22.8438Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <p className="fw-bold text-primary mb-2">
                                    Languages
                                </p>
                                <p className="text-white mb-0">English</p>
                            </Col>
                            <Col
                                md={2}
                                lg={2}
                                sm={2}
                                className=" d-flex flex-column"
                            >
                                <div className="mb-1">
                                    <IconChartAreaLine size={34} />
                                </div>
                                <div className="mt-auto">
                                    <p className="fw-bold text-primary mb-2">
                                        Economy
                                    </p>
                                    <p className="text-white mb-0 mt-auto">
                                        Driven by tourism real estate, and
                                        financial market sectors
                                    </p>
                                </div>
                            </Col>
                            <Col
                                md={2}
                                lg={2}
                                sm={2}
                                className=" d-flex flex-column"
                            >
                                <div className="mb-1">
                                    <IconCoins size={34} />
                                </div>
                                <p className="fw-bold text-primary mb-2">
                                    Currency
                                </p>
                                <div className="mt-atuo">
                                    <p className="text-white mb-0">Eastern</p>
                                    <p className="text-white mb-0 ">
                                        Caribbean dollar
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-10 mb-6">
                <Row>
                    <Col>
                        <div>
                            <h4 className="text-primary fw-bold  mb-0">
                                Why to Get St Kitts and Nevis
                            </h4>
                        </div>
                        <div>
                            <h3 className="fw-bold">
                                Citizenship by Investment?
                            </h3>
                        </div>

                        <div>
                            <p className="text-black">
                                St Kitts and Nevis comprise two islands in the
                                Caribbean and are known for their scenic and
                                picturesque views, beautiful beaches, and
                                tropical conditions. With a diverse, welcoming
                                nature, the country is influenced by African,
                                French, Caribbean, and British cultures. Citizen
                                of St Kitts and Nevis can travel visa-free to
                                Schengen states, the UK, Russia, Turkey,
                                Singapore and overall 150+ countries.
                            </p>
                        </div>
                    </Col>

                    <Col xs={12} sm={6} md={4} lg={5}>
                        <img src={familyStKitts} className="img-fluid" />
                    </Col>
                </Row>
            </Container>

            <div
                className="d-flex flex-column bg-gray"
                style={{ marginTop: "-9rem" }}
            >
                <Container>
                    <Row>
                        <Col className="py-4">
                            <div className="">
                                <h4 className="text-black fw-bold mb-0">
                                    Key Benefits of St Kitts and Nevis
                                </h4>
                                <h4 className="text-black fw-bold">
                                    Citizenship by Investment
                                </h4>
                            </div>

                            <div className="fw-medium">
                                Four key benefits of St Kitts and Nevis
                                citizenship by investment include
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Row className="mt-3">
                                <Col md={6} sm={6} xs={12}>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column pe-3">
                                            <svg
                                                width="76"
                                                height="77"
                                                viewBox="0 0 76 77"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M2 26.4395C2 22.1436 3.73238 19.5109 7.31741 17.5158L22.075 9.30307C29.8079 4.99964 33.6743 2.8479 37.9131 2.8479C42.152 2.8479 46.0184 4.99964 53.7512 9.30307L68.509 17.5158C72.0938 19.5109 73.8263 22.1437 73.8263 26.4395C73.8263 27.6044 73.8263 28.1868 73.6991 28.6656C73.0308 31.1814 70.751 31.5784 68.5496 31.5784H7.27665C5.07513 31.5784 2.79555 31.1814 2.1272 28.6656C2 28.1868 2 27.6044 2 26.4395Z"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    d="M9.18262 31.5784V62.1045M23.5479 31.5784V62.1045"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    d="M34.3218 62.1045H12.7739C6.82367 62.1045 2 66.928 2 72.8784C2 73.87 2.80395 74.6741 3.79566 74.6741H34.3218"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                />
                                                <path
                                                    d="M72.0306 47.7393L46.8914 72.8785"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M49.5848 53.1262C51.0724 53.1262 52.2783 51.9203 52.2783 50.4327C52.2783 48.9452 51.0724 47.7393 49.5848 47.7393C48.0973 47.7393 46.8914 48.9452 46.8914 50.4327C46.8914 51.9203 48.0973 53.1262 49.5848 53.1262Z"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    d="M69.337 72.8785C70.8246 72.8785 72.0305 71.6726 72.0305 70.1851C72.0305 68.6975 70.8246 67.4916 69.337 67.4916C67.8495 67.4916 66.6436 68.6975 66.6436 70.1851C66.6436 71.6726 67.8495 72.8785 69.337 72.8785Z"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            className="d-flex flex-column ps-3"
                                            style={{
                                                borderLeft: "2px solid black",
                                            }}
                                        >
                                            <h5 className="text-primary">
                                                Low Taxes for St Kitts Citizens
                                            </h5>
                                            <p
                                                className="text-black mb-0"
                                                style={{ fontSize: "12px" }}
                                            >
                                                Whether you are US Citizen or
                                                from other high-tax countries,
                                                becoming a St Kitts citizen help
                                                you save taxes on your global
                                                and local income. With no
                                                personal income tax and zero tax
                                                on capital gains, St Kitts
                                                passport is the best Plan B for
                                                wealthy individuals.
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} sm={6} xs={12}>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column pe-3">
                                            <img src={ShieldCheck} />
                                        </div>

                                        <div
                                            className="d-flex flex-column ps-3"
                                            style={{
                                                borderLeft: "2px solid black",
                                            }}
                                        >
                                            <h5 className="text-primary">
                                                Protection with St Kitts Second
                                                Passport
                                            </h5>
                                            <p
                                                className="text-black mb-0"
                                                style={{ fontSize: "12px" }}
                                            >
                                                With a St Kitts second passport,
                                                you can buy property, open
                                                high-balance bank accounts, and
                                                live without being taxed by your
                                                home country. It also allows
                                                easy access to UAE residency and
                                                global business opportunities.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className="mt-5 mb-6">
                                <Col md={6} sm={6} xs={12}>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column pe-3">
                                            <svg
                                                width="73"
                                                height="74"
                                                viewBox="0 0 73 74"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M39.6772 71.1145C48.7731 71.1145 53.3214 71.1145 56.5865 68.5132C59.8519 65.912 60.8937 61.459 62.9769 52.5529L69.5713 24.3621C70.7246 19.4323 71.3014 16.9674 70.2544 15.1821C68.3531 11.9401 63.5073 12.6442 60.3444 12.6442"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M2.01172 26.4019C2.01172 15.0524 2.01172 9.37761 5.53758 5.85178C9.0634 2.32593 14.7382 2.32593 26.0877 2.32593H36.406C47.7554 2.32593 53.4301 2.32593 56.9562 5.85178C60.4819 9.37761 60.4819 15.0524 60.4819 26.4019V47.0384C60.4819 58.3878 60.4819 64.0625 56.9562 67.5886C53.4301 71.1144 47.7554 71.1144 36.406 71.1144H26.0877C14.7382 71.1144 9.0634 71.1144 5.53758 67.5886C2.01172 64.0625 2.01172 58.3878 2.01172 47.0384V26.4019Z"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    d="M31.2467 16.0836C38.8447 16.0836 45.0044 22.2431 45.0044 29.8413C45.0044 37.4393 38.8447 43.599 31.2467 43.599M31.2467 16.0836C23.6485 16.0836 17.489 22.2431 17.489 29.8413C17.489 37.4393 23.6485 43.599 31.2467 43.599M31.2467 16.0836C28.3974 16.0836 26.0876 22.2431 26.0876 29.8413C26.0876 37.4393 28.3974 43.599 31.2467 43.599M31.2467 16.0836C34.0959 16.0836 36.4058 22.2431 36.4058 29.8413C36.4058 37.4393 34.0959 43.599 31.2467 43.599"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    d="M19.2085 53.9172H43.2845"
                                                    stroke="black"
                                                    strokeWidth="4"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            className="d-flex flex-column ps-3"
                                            style={{
                                                borderLeft: "2px solid black",
                                            }}
                                        >
                                            <h5 className="text-primary">
                                                Freedom with St Kitts Passport
                                            </h5>
                                            <p
                                                className="text-black mb-0"
                                                style={{ fontSize: "12px" }}
                                            >
                                                Unlock travel freedom to 150+
                                                countries and enjoy personal and
                                                financial freedom with a St
                                                Kitts passport. You can visit
                                                any country like Russia, allow
                                                you to deal with
                                                cryptocurrencies and travel
                                                without prejudice.
                                            </p>
                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} sm={6} xs={12}>
                                    <div className="d-flex flex-row align-items-center">
                                        <div className="d-flex flex-column pe-3">
                                            <svg
                                                width="75"
                                                height="75"
                                                viewBox="0 0 75 75"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M17.0435 30.8076V23.9284C17.0435 12.5435 20.483 3.29102 37.6809 3.29102C54.8787 3.29102 58.3183 12.5435 58.3183 23.9284V30.8076"
                                                    stroke="black"
                                                    strokeWidth="5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M54.8787 72.0823H20.483C6.72472 72.0823 3.28516 68.6427 3.28516 54.8845V48.0053C3.28516 34.2471 6.72472 30.8075 20.483 30.8075H54.8787C68.6369 30.8075 72.0765 34.2471 72.0765 48.0053V54.8845C72.0765 68.6427 68.6369 72.0823 54.8787 72.0823Z"
                                                    stroke="black"
                                                    strokeWidth="5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M51.427 51.4449H51.4582"
                                                    stroke="black"
                                                    strokeWidth="7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M37.6658 51.4449H37.6973"
                                                    stroke="black"
                                                    strokeWidth="7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                                <path
                                                    d="M23.9041 51.4449H23.9355"
                                                    stroke="black"
                                                    strokeWidth="7"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </div>

                                        <div
                                            className="d-flex flex-column ps-3"
                                            style={{
                                                borderLeft: "2px solid black",
                                            }}
                                        >
                                            <h5 className="text-primary">
                                                Privacy with St Kitts
                                                Citizenship by Investment
                                            </h5>
                                            <p
                                                className="text-black  mb-0"
                                                style={{ fontSize: "12px" }}
                                            >
                                                Wealthy individuals often face
                                                privacy challenges in their home
                                                countries due to their elite
                                                status. St Kitts second
                                                citizenship helps high-net-worth
                                                individuals maintain privacy,
                                                avoid lawsuits, and protect
                                                their freedom. Invest in St
                                                Kitts citizenship for the
                                                privacy you desire.
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>

                <Row className="d-flex me-0 ">
                    <Col xs={12} md={6} lg={6}>
                        <img
                            src={CitizenshipInvestment}
                            className="img-fluid"
                        />
                    </Col>
                    <Col
                        xs={12}
                        md={6}
                        lg={6}
                        style={{ marginLeft: "-17.5rem", marginTop: "5rem" }}
                    >
                        <Row className="">
                            <div className="container bg-black pt-3 pb-4 px-5">
                                <h5 className="fw-bold text-white mb-0">
                                    St Kitts and Nevis
                                </h5>
                                <h4 className="text-primary fw-bold">
                                    Citizenship by Investment Cost
                                </h4>
                                <div>
                                    <p className="text-white">
                                        St Kitts and Nevis Citizenship by
                                        Investment Cost is $250,000 which is
                                        implemented by July 2024. Though the
                                        Caribbean citizenship by investment
                                        programs have seen price hikes, St Kitts
                                        citizenship cost has been reduced by
                                        $20,000. With $250,000 one time
                                        non-refundable donation, individual or a
                                        family of four can buy second passport.
                                    </p>
                                </div>

                                <div className="container">
                                    <Col className="mb-3">
                                        <div>
                                            <h6 className="text-primary fw-bold">
                                                Sustainable Island State
                                                Contribution
                                            </h6>
                                        </div>
                                        <div>
                                            <h6 className="text-white fw-light">
                                                St Kitts Citizenship by donation
                                                via Sustainable Island State
                                                Contribution starts with
                                                non-refundable contribution of
                                                $250,000.
                                            </h6>
                                        </div>
                                    </Col>

                                    <Col className="mb-3">
                                        <div>
                                            <h6 className="text-primary fw-bold">
                                                Public Benefit Option
                                            </h6>
                                        </div>
                                        <div>
                                            <h6 className="text-white fw-light">
                                                Public Benefit Option requires a
                                                non-refundable contribution of
                                                $250,000 to qualify for St
                                                Christopher citizenship program.
                                            </h6>
                                        </div>
                                    </Col>

                                    <Col className="mb-3">
                                        <div>
                                            <h6 className="text-primary fw-bold">
                                                Real Estate Investment
                                            </h6>
                                        </div>
                                        <div>
                                            <h6 className="text-white fw-light">
                                                By investing $400,000 or more to
                                                buy a condominium unit or a
                                                share in a real estate
                                                development project, you can get
                                                St Kitts and Nevis Citizenship.
                                            </h6>
                                        </div>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

            <div className="d-flex bg-gray">
                <Container className="__pt-10 pb-5 mb-6">
                    <Row className="align-items-center">
                        <Col xs={12} md={4} lg={4} sm={6} className="py-4">
                            <div className="">
                                <h5 className="text-black fw-bold mb-0">
                                    St Kitts and Nevis
                                </h5>
                                <h4 className="text-primary fw-bold">
                                    Passport Visa Free Countries
                                </h4>
                            </div>

                            <div className="fw-medium">
                                Latest by July 2024, St Kitts and Nevis passport
                                permits visa free travel to 150+ countries.
                                Being one of the leading CBI programs, key St
                                Kitts visa free countries include Schengen
                                states, the UK, Singapore, Malaysia and Russia.
                            </div>

                            <Row className="mt-4 gap-1 px-2">
                                <Col className="bg-black rounded align-items-center  align-items-center justify-content-center d-flex flex-column py-1">
                                    <p className="text-primary text-center mb-0 fs-18px">
                                        Visa Free Travel
                                    </p>
                                    <h4 className="fw-bold text-center text-white mb-0">
                                        101
                                    </h4>
                                </Col>
                                <Col className="bg-black rounded align-items-center justify-content-center d-flex flex-column">
                                    <p className="text-primary mb-0 text-center fs-18px">
                                        Visa on Arrival
                                    </p>
                                    <h4 className="fw-bold text-center text-white mb-0">
                                        39
                                    </h4>
                                </Col>
                                <Col
                                    md={3}
                                    lg={3}
                                    sm={3}
                                    xs={3}
                                    className="bg-black rounded align-items-center justify-content-center d-flex flex-column"
                                >
                                    <p className="text-primary mb-0 text-center fs-18px">
                                        eTA
                                    </p>
                                    <h4 className="fw-bold text-center text-white mb-0">
                                        6
                                    </h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={8} lg={8} sm={6}>
                            <div className="__map">
                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        30
                                    </p>

                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>

                                    <div className="window">
                                        <p className="block-title mb-0">
                                            North America
                                        </p>
                                        <div className="country-list">
                                            <p className="text-black mb-0">
                                                Anguilla
                                                <br />
                                                Antigua and Barbuda
                                                <br />
                                                Aruba
                                                <br />
                                                Bahamas
                                                <br />
                                                Barbados
                                                <br />
                                                Belize
                                                <br />
                                                Bermuda
                                                <br />
                                                Bonaire; St. Eustatius and Saba
                                                <br />
                                                British Virgin Islands
                                                <br />
                                                Cayman Islands
                                                <br />
                                                Costa Rica
                                                <br />
                                                Cuba
                                                <br />
                                                Curacao
                                                <br />
                                                Dominica
                                                <br />
                                                Dominican Republic
                                                <br />
                                                El Salvador
                                                <br />
                                                French West Indies
                                                <br />
                                                Grenada
                                                <br />
                                                Guatemala
                                                <br />
                                                Haiti
                                                <br />
                                                Honduras
                                                <br />
                                                Jamaica
                                                <br />
                                                Montserrat
                                                <br />
                                                Nicaragua
                                                <br />
                                                Panama
                                                <br />
                                                St. Lucia
                                                <br />
                                                St. Maarten
                                                <br />
                                                St. Vincent and the Grenadines
                                                <br />
                                                Trinidad and Tobago
                                                <br />
                                                Turks and Caicos{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        12
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <div className="window">
                                        <p className="block-title mb-0">
                                            South America
                                        </p>
                                        <div className="country-list">
                                            <p className="mb-0 text-black">
                                                Argentina
                                                <br />
                                                Bolivia <br />
                                                Brazil
                                                <br />
                                                Chile
                                                <br />
                                                Colombia
                                                <br />
                                                Ecuador
                                                <br />
                                                French Guiana
                                                <br />
                                                Guyana
                                                <br />
                                                Peru
                                                <br />
                                                Suriname
                                                <br />
                                                Uruguay
                                                <br />
                                                Venezuela{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        28
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <div className="window">
                                        <p className="block-title mb-0">
                                            Africa
                                        </p>
                                        <div className="country-list">
                                            <p className="mb-0 text-black">
                                                Armenia <br />
                                                Bangladesh
                                                <br />
                                                Cambodia <br />
                                                Hong Kong (SAR China)
                                                <br />
                                                Indonesia
                                                <br />
                                                Iran <br />
                                                Israel
                                                <br />
                                                Jordan <br />
                                                Laos <br />
                                                Lebanon <br />
                                                Macao (SAR China) <br />
                                                Malaysia
                                                <br />
                                                Maldives <br />
                                                Nepal <br />
                                                Pakistan <br />
                                                Palestinian Territor
                                                <br />
                                                Philippines
                                                <br />
                                                Singapore
                                                <br />
                                                South Korea
                                                <br />
                                                Sri Lanka <br />
                                                Taiwan (Chinese Taipei)
                                                <br />
                                                Timor-Leste <br />
                                                Uzbekistan{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        51
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <div className="window">
                                        <p className="block-title mb-0">
                                            Europe
                                        </p>
                                        <div className="country-list">
                                            <p className="text-black mb-0">
                                                Albania
                                                <br />
                                                Andorra
                                                <br />
                                                Austria
                                                <br />
                                                Belarus
                                                <br />
                                                Belgium
                                                <br />
                                                Bosnia and Herzegovina
                                                <br />
                                                Bulgaria
                                                <br />
                                                Croatia
                                                <br />
                                                Cyprus
                                                <br />
                                                Czech Republic
                                                <br />
                                                Denmark
                                                <br />
                                                Estonia
                                                <br />
                                                Faroe Islands
                                                <br />
                                                Finland
                                                <br />
                                                France
                                                <br />
                                                Georgia
                                                <br />
                                                Germany
                                                <br />
                                                Gibraltar
                                                <br />
                                                Greece
                                                <br />
                                                Greenland
                                                <br />
                                                Hungary
                                                <br />
                                                Iceland
                                                <br />
                                                Ireland
                                                <br />
                                                Italy
                                                <br />
                                                Kosovo
                                                <br />
                                                Latvia
                                                <br />
                                                Liechtenstein
                                                <br />
                                                Lithuania
                                                <br />
                                                Luxembourg
                                                <br />
                                                Malta
                                                <br />
                                                Moldova
                                                <br />
                                                Monaco
                                                <br />
                                                Montenegro
                                                <br />
                                                Netherlands
                                                <br />
                                                North Macedonia
                                                <br />
                                                Norway
                                                <br />
                                                Poland
                                                <br />
                                                Portugal
                                                <br />
                                                Romania
                                                <br />
                                                Russian Federation
                                                <br />
                                                San Marino
                                                <br />
                                                Serbia
                                                <br />
                                                Slovakia
                                                <br />
                                                Slovenia
                                                <br />
                                                Spain
                                                <br />
                                                Sweden
                                                <br />
                                                Switzerland
                                                <br />
                                                Turkey
                                                <br />
                                                Ukraine
                                                <br />
                                                United Kingdom
                                                <br />
                                                Vatican City{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        23
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <div className="window">
                                        <p className="block-title mb-0">Asia</p>
                                        <div className="country-list">
                                            <p className="text-black mb-0">
                                                Armenia <br />
                                                Bangladesh
                                                <br />
                                                Cambodia <br />
                                                Hong Kong (SAR China)
                                                <br />
                                                Indonesia
                                                <br />
                                                Iran <br />
                                                Israel
                                                <br />
                                                Jordan <br />
                                                Laos <br />
                                                Lebanon <br />
                                                Macao (SAR China) <br />
                                                Malaysia
                                                <br />
                                                Maldives <br />
                                                Nepal <br />
                                                Pakistan <br />
                                                Palestinian Territor
                                                <br />
                                                Philippines
                                                <br />
                                                Singapore
                                                <br />
                                                South Korea
                                                <br />
                                                Sri Lanka <br />
                                                Taiwan (Chinese Taipei)
                                                <br />
                                                Timor-Leste <br />
                                                Uzbekistan{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <div
                                    className="item"
                                    onClick={(el) => openWindow(el)}
                                >
                                    <p className="num text-black fw-medium mb-0">
                                        13
                                    </p>
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="8"
                                            cy="8"
                                            r="8"
                                            fill="#000000"
                                        ></circle>
                                        <path
                                            d="M3 8L13 8M8 3L8 13"
                                            stroke="white"
                                            strokeWidth="2"
                                        ></path>
                                    </svg>
                                    <div className="window">
                                        <p className="block-title mb-0">
                                            Oceania
                                        </p>
                                        <div className="country-list">
                                            <p className="text-black mb-0">
                                                Cook Islands
                                                <br />
                                                Fiji
                                                <br />
                                                French Polynesia
                                                <br />
                                                Kiribati
                                                <br />
                                                Micronesia
                                                <br />
                                                New Caledonia
                                                <br />
                                                Niue
                                                <br />
                                                Palau Islands <br />
                                                Samoa <br />
                                                Solomon Islands <br />
                                                Tonga <br />
                                                Tuvalu <br />
                                                Vanuatu{" "}
                                            </p>
                                        </div>
                                        <div
                                            className="exit-btn"
                                            onClick={(el) => closeWindow(el)}
                                        ></div>
                                    </div>
                                </div>

                                <img
                                    src={MapContinents}
                                    className="d-block img-fluid"
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex mt-10 mb-5">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <div className="">
                                <div>
                                    <h5 className="text-black fw-bold mb-0">
                                        Benefits of
                                    </h5>
                                    <h4 className="text-primary fw-bold">
                                        Buying St Kitts Passport
                                    </h4>
                                </div>
                                <div>
                                    <p className="mb-0">
                                        Buying a St Kitts Passport for $250,000
                                        is a worthy investment due to tax
                                        benefits, privacy and freedom. Many
                                        wealthy individuals around the world are
                                        getting St Kitts and Nevis second
                                        citizenship by investment, mainly from
                                        the US, Canada, China, India, Pakistan,
                                        the UK, and France. St Kitts & Nevis
                                        Citizenship is also a famous Plan B or a
                                        backup plan for a second passport.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                        <Col md={4}>
                            <Row className="gap-3">
                                <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                                    <div className="py-3">
                                        <div className="text-center">
                                            <svg width="87" height="62" viewBox="0 0 87 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.8497 23.5032C20.8497 19.7123 17.8171 17.0588 14.4053 17.0588C10.9936 17.0588 7.96094 20.0914 7.96094 23.5032C7.96094 27.2941 10.9936 29.9476 14.4053 29.9476C17.8171 29.9476 20.8497 26.9149 20.8497 23.5032ZM11.7517 23.5032C11.7517 21.9868 12.889 20.8496 14.4053 20.8496C15.9217 20.8496 17.059 21.9868 17.059 23.5032C17.059 25.0195 15.9217 26.1568 14.4053 26.1568C12.889 26.1568 11.7517 25.0195 11.7517 23.5032ZM31.4641 31.0849C28.0524 31.0849 25.0197 34.1176 25.0197 37.5293C25.0197 41.3202 28.0524 43.9737 31.4641 43.9737C34.8759 43.9737 37.9085 40.9411 37.9085 37.5293C37.9085 34.1176 34.8759 31.0849 31.4641 31.0849ZM31.4641 40.562C29.9478 40.562 28.8105 39.4247 28.8105 37.9084C28.8105 36.392 29.9478 35.2547 31.4641 35.2547C32.9805 35.2547 34.1177 36.392 34.1177 37.9084C34.1177 39.4247 32.6014 40.562 31.4641 40.562ZM32.2223 20.8497C31.4641 20.0915 30.3269 20.0915 29.5686 20.8497L11.3726 39.8038C10.6145 40.562 10.6145 41.6992 11.3726 42.4574C11.7517 42.8366 12.1307 42.8366 12.5099 42.8366C12.889 42.8366 13.6471 42.4574 14.0262 42.0784L32.2223 23.1242C32.9804 22.7451 32.9804 21.6079 32.2223 20.8497V20.8497Z" fill="black"/>
                                                <path d="M39.8038 0H5.30715C2.2745 0 0 2.2745 0 5.30715V56.4835C0 59.5161 2.2745 61.7906 5.30715 61.7906H39.8038C42.8365 61.7906 45.111 59.5161 45.111 56.4835V5.30715C45.4901 2.2745 42.8365 0 39.8038 0ZM41.6993 56.4835C41.6993 57.2416 40.9412 57.9999 40.1829 57.9999H5.30724C4.5491 57.9999 3.79087 57.2417 3.79087 56.4835V5.30715C3.79087 4.54901 4.54901 3.79078 5.30724 3.79078H39.8039C40.5621 3.79078 41.3203 4.54892 41.3203 5.30715V56.4835H41.6993ZM86.4312 20.4705V9.85624C86.4312 4.16998 78.4704 8.94769e-05 67.477 8.94769e-05C57.2417 8.94769e-05 49.6601 3.79096 48.9018 9.09811V52.6927C48.9018 53.4509 49.281 53.83 49.66 54.2091C51.9345 58.379 58.758 61.4117 67.856 61.4117C76.954 61.4117 83.7775 58.3791 86.0521 54.2091C86.4312 53.83 86.4312 53.4509 86.4312 52.6927V20.4707V20.4705ZM67.477 3.79087C75.8169 3.79087 81.8822 6.82351 82.2613 9.85624V10.6145C81.5031 13.2681 75.4378 16.3007 67.477 16.3007C58.7581 16.3007 52.3136 12.889 52.3136 10.2354C52.6927 7.20271 59.1371 3.79087 67.477 3.79087ZM52.6927 15.9215C56.1045 18.196 61.4116 19.7124 67.8561 19.7124C73.9215 19.7124 79.2286 18.196 82.6404 15.9215V20.8497C81.8822 23.5033 75.8169 26.5359 67.8561 26.5359C59.1372 26.5359 52.6927 23.1242 52.6927 20.4705V15.9215ZM52.6927 26.5359C56.1045 28.8104 61.4116 30.3268 67.8561 30.3268C73.9215 30.3268 79.2286 28.8104 82.6404 26.5359V30.7058C81.8822 33.3594 75.8169 36.3921 67.8561 36.3921C59.1372 36.3921 52.6927 32.9803 52.6927 30.3267V26.5358V26.5359ZM52.6927 36.3921C56.1045 38.6666 61.4116 40.1829 67.8561 40.1829C73.9215 40.1829 79.2286 38.6666 82.6404 36.3921V41.3202C81.8822 43.9738 75.8169 47.0065 67.8561 47.0065C59.1372 47.0065 52.6927 43.5947 52.6927 40.9411V36.3921ZM67.477 57.6208C58.7581 57.6208 52.3136 54.209 52.3136 51.5554V47.0064C55.7254 49.2809 61.0325 50.7972 67.477 50.7972C73.5424 50.7972 78.8495 49.2809 82.2613 47.0064V51.9345C81.8822 54.9671 75.8169 57.6208 67.477 57.6208Z" fill="black"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fw-bold my-1 text-center">
                                                Low Taxes
                                            </p>
                                            <p className="mb-0 text-center fs-18px">
                                                Zero Capital Gain, No Tax on
                                                Global Income and no Tax on
                                                personal income
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                                    <div className="py-3">
                                        <div className="text-center">
                                            <svg
                                                width="70"
                                                height="66"
                                                viewBox="0 0 70 66"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M29.0379 18.1819V19.0309C29.0379 26.5504 24.3079 32.7357 18.4864 32.7357C12.6648 32.7357 7.93481 26.5503 7.93481 19.0309C7.93481 18.7883 7.93481 18.5458 7.93481 18.1819"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-miterlimit="10"
                                                />
                                                <path
                                                    d="M5.86219 12.6705C6.56572 2.46889 14.3049 2.35163 18.1745 2.93791C18.5263 3.05516 19.5817 2.93791 19.9335 2.93791C26.9691 1.99987 30.4869 9.97355 30.4869 13.4913C30.4869 14.7812 30.7843 17.9302 29.0254 19.6892C29.0254 19.6892 24.741 14.7812 24.5065 11.9669C24.5065 11.9669 11.1388 17.0091 10.2007 12.6704C10.2007 12.6704 9.2627 16.1881 8.44178 17.1263C8.44178 17.1263 8.00812 19.8233 8.00812 20.6441C8.00838 20.6443 5.51043 17.1264 5.86219 12.6705Z"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M34.7632 28.8193C34.7206 25.8796 36.3086 23.3049 37.3889 20.5271C38.7961 16.7747 37.1544 14.7814 38.5615 9.85642C39.8514 5.04874 45.0108 2 50.6393 2C55.447 2 57.6749 4.69698 57.6749 4.69698C61.3101 5.04874 64.1243 8.09748 64.2416 11.7326C64.5933 18.0647 65.1796 18.0647 67.2903 22.9897C68.6912 26.3303 68.3096 30.067 66.2363 32.9257"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M41.7273 19.8234C41.7273 26.859 46.1832 32.1357 51.4599 32.1357C56.7366 32.1357 61.1925 26.859 61.1925 19.8234C61.1925 15.3675 59.4336 12.7877 55.9158 9.26999C52.3981 12.7877 41.8446 17.2437 41.8446 19.0026L41.7273 19.8234Z"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-miterlimit="10"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M48.5007 38.6913C52.0583 39.8099 55.6331 38.8777 59.2634 35.8949C63.6051 35.8949 67.9468 39.4126 67.9468 43.7513V63.5945"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M2 63.5945V43.7513C2 39.4126 6.3417 35.8949 10.6834 35.8949C14.2211 38.8676 17.7586 39.8034 21.334 38.7026"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-miterlimit="10"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M49.8115 19.4099C49.8115 20.352 49.105 21.0586 48.1628 21.0586C47.2207 21.0586 46.5142 20.352 46.5142 19.4099C46.5142 18.4678 47.2207 17.7612 48.1628 17.7612C49.105 17.7612 49.8115 18.4678 49.8115 19.4099Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M56.406 19.4099C56.406 20.352 55.6994 21.0586 54.7573 21.0586C53.8152 21.0586 53.1086 20.352 53.1086 19.4099C53.1086 18.4678 53.8152 17.7612 54.7573 17.7612C55.6994 17.7612 56.406 18.4678 56.406 19.4099Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M48.9977 26.0484C50.5221 26.8692 52.3982 26.8692 53.9226 26.0484"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M16.8379 19.4099C16.8379 20.352 16.1313 21.0586 15.1892 21.0586C14.2471 21.0586 13.5405 20.352 13.5405 19.4099C13.5405 18.4678 14.2471 17.7612 15.1892 17.7612C16.1313 17.7612 16.8379 18.4678 16.8379 19.4099Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M23.4325 19.4099C23.4325 20.352 22.7259 21.0586 21.7838 21.0586C20.8417 21.0586 20.1351 20.352 20.1351 19.4099C20.1351 18.4678 20.8417 17.7612 21.7838 17.7612C22.7259 17.7612 23.4325 18.4678 23.4325 19.4099Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M16.024 26.0484C17.5485 26.8692 19.4246 26.8692 20.949 26.0484"
                                                    stroke="black"
                                                    stroke-width="3.44812"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M22.4436 63.8583V61.5722C22.4436 58.3188 25.7433 55.6809 29.0431 55.6809C32.9671 58.9343 36.891 58.9343 40.9042 55.6809C44.2038 55.6809 47.5035 58.3188 47.5035 61.5722V63.8583"
                                                    stroke="black"
                                                    stroke-width="2.7585"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M38.4003 44.7356C38.4443 45.3896 37.9497 45.9553 37.2955 45.9992C36.6414 46.0431 36.0756 45.5485 36.0316 44.8946C35.9877 44.2406 36.4823 43.6749 37.1365 43.631C37.163 43.6292 37.1895 43.6284 37.2162 43.6284C37.8488 43.6079 38.3786 44.1033 38.4003 44.7356Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M33.2112 49.3311C34.2332 50.1785 35.7137 50.1785 36.7358 49.3311"
                                                    stroke="black"
                                                    stroke-width="2.7585"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                                <path
                                                    d="M42.2858 48.304C41.2123 52.0323 38.3287 54.1363 34.9734 54.1363C31.6182 54.1363 28.7354 52.0323 27.6619 48.304"
                                                    stroke="black"
                                                    stroke-width="2.7585"
                                                    stroke-miterlimit="10"
                                                />
                                                <path
                                                    d="M32.7313 43.6284C32.7578 43.6284 32.7844 43.6293 32.811 43.631C33.465 43.6749 33.9598 44.2406 33.9158 44.8946C33.8719 45.5485 33.3061 46.043 32.652 45.9992C31.998 45.9553 31.5032 45.3896 31.5471 44.7356C31.5689 44.1033 32.0987 43.6079 32.7313 43.6284Z"
                                                    fill="black"
                                                />
                                                <path
                                                    d="M34.9736 38.1439C40.07 39.9513 42.3161 45.8295 42.484 50.8463C44.3602 51.2525 46.286 50.3322 47.5035 48.9193C46.205 47.8197 45.2258 46.3913 44.6686 44.7836C45.6405 37.2324 41.9911 32.1491 34.9736 33.5908C27.956 32.1491 24.3066 37.2324 25.2785 44.7836C24.7213 46.3913 23.7421 47.8197 22.4436 48.9193C23.661 50.3322 25.587 51.2525 27.4631 50.8463C27.631 45.8298 29.877 39.9511 34.9736 38.1439Z"
                                                    stroke="black"
                                                    stroke-width="2.7585"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="fw-bold my-1 text-center">
                                                Family inclusion
                                            </p>
                                            <p className="mb-0 text-center fs-18px">
                                                Can Include Family in
                                                Citizenship Program
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex mb-5">
                <Container>
                    <Row className="gap-3 mt-4">
                        <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                            <div className="py-3">
                                <div className="text-center">
                                    <svg
                                        width="81"
                                        height="80"
                                        viewBox="0 0 81 80"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <mask
                                            id="mask0_3116_2600"
                                            style={{ maskType: "luminance" }}
                                            maskUnits="userSpaceOnUse"
                                            x="0"
                                            y="0"
                                            width="81"
                                            height="80"
                                        >
                                            <path
                                                d="M80.5 0H0.5V80H80.5V0Z"
                                                fill="white"
                                            />
                                        </mask>
                                        <g mask="url(#mask0_3116_2600)">
                                            <path
                                                d="M17.1665 16.6667H53.8332H63.8332V73.3333H17.1665V16.6667Z"
                                                stroke="black"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M17.1665 16.6667L53.8332 6.66667V16.6667"
                                                stroke="black"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M40.5002 46.6666C44.1822 46.6666 47.1668 43.682 47.1668 40C47.1668 36.318 44.1822 33.3333 40.5002 33.3333C36.8182 33.3333 33.8335 36.318 33.8335 40C33.8335 43.682 36.8182 46.6666 40.5002 46.6666Z"
                                                stroke="black"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M33.8335 56.6667H47.1668"
                                                stroke="black"
                                                stroke-width="3"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                    </svg>
                                </div>
                                <div>
                                    <p className="fw-bold my-1 text-center">
                                    Permanent Citizenship
                                    </p>
                                    <p className="mb-0 text-center fs-18px">
                                        Become Permanent Citizen of St Kitts and Nevis
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                            <div className="py-3">
                                <div className="text-center">
                                    <svg
                                        width="59"
                                        height="59"
                                        viewBox="0 0 59 59"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3.37166 39.2692L14.3451 44.7559L19.8318 55.7295L25.3184 50.2428V42.0126L34.9204 32.4109L43.1503 57.1011L51.3803 48.8712L44.522 22.8091L55.4956 11.8357C57.7683 9.56302 57.7683 5.8783 55.4956 3.60562C53.2229 1.33296 49.538 1.33296 47.2653 3.60562L36.292 14.5791L10.2301 7.72066L2 15.9507L26.6901 24.1807L17.0885 33.7826H8.8584L3.37166 39.2692Z"
                                            stroke="black"
                                            stroke-width="3"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="fw-bold my-1 text-center">
                                        150+ visa free countries
                                    </p>
                                    <p className="mb-0 text-center fs-18px">
                                        Travel Visa free to 150+ countries including Europe, UK, Russia, Singapore and Malaysia
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                            <div className="py-3">
                                <div className="text-center">
                                    <svg width="87" height="60" viewBox="0 0 87 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M83.4334 25.3847L74.6764 29.8107L63.3396 7.86312L72.1857 3.39181C72.8501 3.0559 73.6187 2.99722 74.3257 3.2285C75.0328 3.45977 75.6216 3.96243 75.9654 4.62829L84.6782 21.4957C84.8524 21.833 84.9582 22.202 84.9899 22.581C85.0217 22.9604 84.9782 23.342 84.8622 23.7041C84.7466 24.0659 84.5603 24.4013 84.315 24.6898C84.0698 24.9782 83.7701 25.2147 83.4334 25.3847Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M12.3236 29.423L3.56673 24.9965C3.23006 24.8265 2.93031 24.5905 2.68495 24.3016C2.43958 24.0132 2.25354 23.6782 2.13768 23.316C2.02178 22.9543 1.9784 22.5722 2.01003 22.1933C2.04166 21.8139 2.14766 21.4453 2.3219 21.108L11.0346 4.24033C11.3785 3.57447 11.9674 3.07181 12.6743 2.84054C13.3813 2.60926 14.1498 2.6679 14.8144 3.00385L23.6604 7.47513L12.3236 29.423Z" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M74.6763 29.8043L69.0079 36.5079L55.9717 49.6865C55.6255 50.0364 55.1959 50.2897 54.7239 50.4219C54.2523 50.5541 53.755 50.5602 53.2799 50.4402L32.7473 45.2509C32.3622 45.1538 32.0016 44.9758 31.6889 44.7286L12.3237 29.4203" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M69.0081 36.5087L53.42 25.0481L48.8852 28.4863C46.9232 29.9739 44.5364 30.7784 42.0831 30.7784C39.6302 30.7784 37.2434 29.9739 35.2812 28.4863L33.3607 27.03C33.0359 26.784 32.7672 26.47 32.5728 26.1094C32.3785 25.7491 32.263 25.3507 32.2342 24.9412C32.2054 24.5316 32.264 24.1206 32.406 23.7363C32.548 23.3516 32.77 23.0024 33.0572 22.7121L46.9217 8.69633C47.1847 8.43025 47.4972 8.21922 47.8411 8.07524C48.185 7.93126 48.5534 7.85715 48.9257 7.85715H63.3397" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M23.8647 7.47288L42.0462 2.11452C42.6958 1.92309 43.3915 1.97286 44.0078 2.25479L56.2546 7.85673" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M37.8317 58L27.154 55.3014C26.7207 55.1918 26.3191 54.9805 25.982 54.6841L17.9922 47.6633" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="fw-bold my-1 text-center">
                                        Business Expansion
                                    </p>
                                    <p className="mb-0 text-center fs-18px">
                                        Being a citizen of St Kitts, You can expand your business
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                            <div className="py-3">
                                <div className="text-center">
                                    <svg
                                        width="55"
                                        height="60"
                                        viewBox="0 0 55 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M28.7627 24.8309V39.0465C28.7627 39.7585 28.1905 40.3358 27.4847 40.3358C26.7789 40.3358 26.2067 39.7586 26.2067 39.0465V24.8309H25.8172C25.7067 24.8426 25.5947 
                                        24.8486 25.4813 24.8486H20.6587C11.4828 24.8486 4.04443 17.3449 4.04443 8.0882C4.04443 3.62117 7.63404 0 12.0621 0C18.9849 0 24.9186 4.27114 27.4153 10.3438C29.9119 
                                        4.27114 35.8457 0 42.7685 0C47.1965 0 50.7861 3.62117 50.7861 8.0882C50.7861 17.3449 43.3478 24.8486 34.1719 24.8486H29.3493C29.2371 24.8487 29.125 24.8427 29.0134 
                                        24.8309H28.7628H28.7627ZM25.6283 22.2524C25.9078 22.184 26.1202 21.9262 26.1202 21.6255V16.7605C26.1202 8.92792 19.8263 2.57853 12.062 2.57853C9.04563 2.57853 6.60041 
                                        5.04523 6.60041 8.0882C6.60041 15.8177 12.7299 22.1028 20.353 22.2668C20.4165 22.2572 20.4806 22.2523 20.5449 22.2523H25.6283V22.2524ZM34.1363 22.2701H34.1719C41.9361 
                                        22.2701 48.2301 15.9208 48.2301 8.0882C48.2301 5.04529 45.7849 2.57853 42.7685 2.57853C35.0042 2.57853 28.7102 8.92786 28.7102 16.7605V21.6255C28.7102 21.9262 28.9226 
                                        22.184 29.2022 22.2524H33.9239C33.9963 22.2524 34.0672 22.2585 34.1363 22.2701H34.1363ZM52.3857 44.0136C48.0144 47.8026 38.486 50.2194 27.4739 50.2194C16.4598 50.2194 
                                        6.92997 47.8017 2.55971 44.0116V48.4906C2.55971 48.5228 2.55854 48.5547 2.55626 48.5862C2.56135 48.6331 2.56398 48.6807 2.56398 48.729C2.56398 53.0712 13.6768 57.2233 
                                        27.4707 57.2233C41.2645 57.2233 52.3773 53.0712 52.3773 48.729C52.3773 48.679 52.3801 48.6297 52.3856 48.5812L52.3857 44.0136ZM54.9296 39.0293C54.9376 39.0877 54.9417 
                                        39.1473 54.9417 39.2078V48.7483C54.9417 48.809 54.9376 48.8686 54.9296 48.9271C54.6804 55.2874 42.4446 59.8018 27.4707 59.8018C12.3418 59.8018 0.0079976 55.1934 0.0079976 
                                        48.7289C0.0079976 48.6967 0.00916862 48.6648 0.0114519 48.6332C0.00630045 48.5858 0.00372067 48.5381 0.00372388 48.4904V39.4009C-0.00124129 39.2719 -0.00124129 39.1427 0.00372388 
                                        39.0137V38.8209C0.00372388 38.6929 0.0222242 38.5692 0.0567076 38.4524C0.785894 33.6282 8.48248 29.969 19.2144 28.704C19.319 28.6916 19.4248 28.6923 19.5293 28.706C20.8337 28.5571 22.1802 28.4439 23.5615 28.3687C24.2663 28.3304 24.8685 28.8757 24.9065 29.5866C24.9446 30.2976 24.404 30.9051 23.6992 30.9435C11.5808 31.6031 2.56984 35.4321 2.56984 39.2411C2.56984 39.6558 2.67387 40.0689 2.87428 40.4768C4.76788 44.2629 14.889 47.5881 27.158 47.5881C40.7832 47.5881 51.7599 43.4869 51.7599 39.2079C51.7599 35.8916 44.8316 32.4302 34.7074 31.2537C34.6211 31.2438 34.5362 31.225 
                                        34.4538 31.1978C33.391 31.0867 32.3257 31.0021 31.2588 30.9441C30.554 30.9057 30.0136 30.2981 30.0517 29.5871C30.0898 28.8761 30.6921 28.3309 31.3969 28.3694C44.6369 29.0923 54.6874 33.305 54.9297 39.0292L54.9296 39.0293Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="fw-bold my-1 text-center">
                                        High ROI
                                    </p>
                                    <p className="mb-0 text-center fs-18px">
                                        Earn high return on investment
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center">
                            <div className="py-3">
                                <div className="text-center">
                                    <svg
                                        width="53"
                                        height="60"
                                        viewBox="0 0 53 60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M25.2099 0.314906C25.8397 -0.104969 26.6603 -0.104969 27.2901 0.314906C34.5583 5.16038 42.4188 8.18364 50.8902 9.39385C51.8139 9.5258 52.5 10.3169 52.5 11.25V28.125C52.5 42.7175 43.8488 53.3651 26.9231 59.875C26.4898 60.0417 26.0102 60.0417 25.5769 59.875C8.65123 53.3651 0 42.7175 0 28.125V11.25C0 10.3169 0.686119 9.5258 1.60984 9.39385C10.0812 8.18364 17.9417 5.16038 25.2099 0.314906ZM24.7468 5.04684C18.1978 8.98524 11.1953 11.5895 3.75 12.8545V28.125C3.75 40.8452 11.1298 50.1126 26.25 56.112C41.3702 50.1126 48.75 40.8452 48.75 28.125V12.8545C41.3047 11.5895 34.3022 8.98524 27.7532 5.04684L26.25 4.1143L24.7468 5.04684Z"
                                            fill="black"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <p className="fw-bold my-1 text-center">
                                        Freedom and Protection
                                    </p>
                                    <p className="mb-0 text-center fs-18px">
                                        Freedom to travel, do business, asset building and protection from persecution.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div
                className="d-flex eligibility_background  __mt-10"
                style={{ height: "382px !important" }}
            >
                <Container style={{ height: "382px !important" }}>
                    <Row
                        className="ms-auto"
                        style={{ height: "382px !important" }}
                    >
                        <Col
                            xs={12}
                            md={6}
                            lg={5}
                            className="d-flex flex-column justify-content-center bg-primary py-15 ms-auto"
                            style={{
                                height: "auto",
                                marginTop: "-2.5rem",
                                marginBottom: "-2rem",
                            }}
                        >
                            <div className="px-4">
                                <div className="mb-3">
                                    <h5 className="text-white fw-bold mb-0">
                                        St Kitts and Nevis
                                    </h5>
                                    <h3 className="text-black fw-bold">
                                        Citizenship Eligibility Criteria
                                    </h3>
                                </div>

                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <div>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2188 5.38053C13.597 6.14112 13.597 8.12199 12.2188 8.88259L3.81427 13.521C2.48131 14.2567 0.847891 13.2925 0.847891 11.77L0.847892 2.49315C0.847892 0.970658 2.48131 0.00646561 3.81427 0.742118L12.2188 5.38053Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-white fw-light">
                                                Above 18 years of age
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <div>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2188 5.38053C13.597 6.14112 13.597 8.12199 12.2188 8.88259L3.81427 13.521C2.48131 14.2567 0.847891 13.2925 0.847891 11.77L0.847892 2.49315C0.847892 0.970658 2.48131 0.00646561 3.81427 0.742118L12.2188 5.38053Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-white fw-light">
                                                Children up to the age of 30 may
                                                be included
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <div>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2188 5.38053C13.597 6.14112 13.597 8.12199 12.2188 8.88259L3.81427 13.521C2.48131 14.2567 0.847891 13.2925 0.847891 11.77L0.847892 2.49315C0.847892 0.970658 2.48131 0.00646561 3.81427 0.742118L12.2188 5.38053Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-white fw-light">
                                                No criminal history
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <div>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2188 5.38053C13.597 6.14112 13.597 8.12199 12.2188 8.88259L3.81427 13.521C2.48131 14.2567 0.847891 13.2925 0.847891 11.77L0.847892 2.49315C0.847892 0.970658 2.48131 0.00646561 3.81427 0.742118L12.2188 5.38053Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-white fw-light">
                                                Pass due diligence
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center gap-2">
                                        <div>
                                            <svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M12.2188 5.38053C13.597 6.14112 13.597 8.12199 12.2188 8.88259L3.81427 13.521C2.48131 14.2567 0.847891 13.2925 0.847891 11.77L0.847892 2.49315C0.847892 0.970658 2.48131 0.00646561 3.81427 0.742118L12.2188 5.38053Z"
                                                    fill="black"
                                                />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="mb-0 text-white fw-light">
                                                Have excellent health
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex bg-gray py-10">
                <Container className="map_background">
                    <Row className="mt-5">
                        <Col className="d-flex flex-column align-items-center">
                            <h4 className="text-primary fw-bold mb-0">
                                Process for
                            </h4>
                            <h3 className="text-black fw-bold">
                                St. Kitts and Nevis
                            </h3>
                        </Col>
                    </Row>

                    <Row className="mt-5 gap-4">
                        <Col
                            md={2}
                            lg={2}
                            className=" justify-content-center text-center position-relative"
                        >
                            <div
                                style={{ zIndex: 1 }}
                                className="position-absolute"
                            >
                                <img src={BorderCard} className="" />
                            </div>

                            <div
                                className="position-absolute d-flex flex-column bg-white __border_radius_20 shadow shadow-lg px-3 py-5 mx-2"
                                style={{
                                    zIndex: 1000,
                                    bottom: -208,
                                    left: 20,
                                    maxHeight: "194.02px",
                                }}
                            >
                                <div>
                                    <svg
                                        width="45"
                                        height="44"
                                        viewBox="0 0 45 44"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.96875 19.5H15.4688V29.5H30.4688V19.5H42.9688V42H2.96875V19.5ZM15.4688 2H30.4688V12H15.4688V2Z"
                                            stroke="#CDA240"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div className="mt-2">
                                    <p className="mb-0 fw-bold">
                                        Reach out to Saad Ahsan Law Firm
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col
                            md={2}
                            lg={2}
                            className="justify-content-center text-center position-relative"
                        >
                            <div
                                style={{ zIndex: 1 }}
                                className="position-absolute"
                            >
                                <svg
                                    width="236"
                                    height="223"
                                    viewBox="0 0 236 223"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M235.114 111.179L211.811 97.7513V124.607L235.114 111.179Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M180.383 0H107.526V222.359H180.383C201.64 222.359 218.932 205.1 218.932 183.884V38.477C218.932 17.2619 201.64 0 180.383 0Z"
                                        fill="#CDA240"
                                    />
                                    <path
                                        d="M3.18557 93.9744H0.347412V38.4011C0.357486 29.3184 3.97704 20.6106 10.412 14.1882C16.8469 7.76577 25.5716 4.15324 34.672 4.14319H107.592V6.97585H34.672C26.3252 
                                    6.98877 18.3241 10.3038 12.422 16.1943C6.52001 22.0849 3.19852 30.0705 3.18557 38.4011V93.9744Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M3.18559 128.387H0.347412V183.958H3.18559V128.387Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M92.7241 218.492H91.3078C91.0784 218.501 90.8495 218.464 90.6348 218.383C90.4202 
                                    218.302 90.2243 218.178 90.0587 218.019C89.8932 217.86 89.7615 217.67 89.6715 217.459C89.5815 
                                    217.248 89.5352 217.022 89.5352 216.792C89.5352 216.563 89.5815 216.337 89.6715 216.126C89.7615 215.915 
                                    89.8932 215.724 90.0587 215.566C90.2243 215.407 90.4202 215.283 90.6348 215.202C90.8495 215.121 91.0784 
                                    215.083 91.3078 215.093H92.7241C93.1641 215.11 93.5801 215.297 93.8852 215.614C94.1902 215.931 94.3606 
                                    216.353 94.3606 216.792C94.3606 217.232 94.1902 217.654 93.8852 217.971C93.5801 218.288 93.1641 218.475 
                                    92.7241 218.492ZM77.1468 218.492H75.7304C75.2905 218.475 74.8744 218.288 74.5694 217.971C74.2643 217.654 
                                    74.0939 217.232 74.0939 216.792C74.0939 216.353 74.2643 215.931 74.5694 215.614C74.8744 215.297 75.2905 
                                    215.11 75.7304 215.093H77.1468C77.3762 215.083 77.605 215.121 77.8197 215.202C78.0343 215.283 78.2303 
                                    215.407 78.3958 215.566C78.5614 215.724 78.6931 215.915 78.783 216.126C78.873 216.337 78.9194 216.563 
                                    78.9194 216.792C78.9194 217.022 78.873 217.248 78.783 217.459C78.6931 217.67 78.5614 217.86 78.3958 
                                    218.019C78.2303 218.178 78.0343 218.302 77.8197 218.383C77.605 218.464 77.3762 218.501 77.1468 218.492ZM61.5721 
                                    218.492H60.1558C59.9264 218.501 59.6975 218.464 59.4829 218.383C59.2682 218.302 59.0723 218.178 58.9067 
                                    218.019C58.7412 217.86 58.6095 217.67 58.5195 217.459C58.4296 217.248 58.3832 217.022 58.3832 216.792C58.3832 216.563 
                                    58.4296 216.337 58.5195 216.126C58.6095 215.915 58.7412 215.724 58.9067 215.566C59.0723 215.407 59.2682 215.283 59.4829 
                                    215.202C59.6975 215.121 59.9264 215.083 60.1558 215.093H61.5721C62.0121 215.11 62.4281 215.297 62.7332 215.614C63.0382 
                                    215.931 63.2086 216.353 63.2086 216.792C63.2086 217.232 63.0382 217.654 62.7332 217.971C62.4281 218.288 62.0121 218.475 
                                    61.5721 218.492ZM45.9948 218.492H44.5784C44.1385 218.475 43.7224 218.288 43.4174 217.971C43.1123 217.654 42.9419 217.232 
                                    42.9419 216.792C42.9419 216.353 43.1123 215.931 43.4174 215.614C43.7224 215.297 44.1385 215.11 44.5784 215.093H45.9839C46.2133 
                                    215.083 46.4422 215.121 46.6568 215.202C46.8714 215.283 47.0674 215.407 47.2329 215.566C47.3985 215.724 47.5302 215.915 47.6201 
                                    216.126C47.7101 216.337 47.7565 216.563 47.7565 216.792C47.7565 217.022 47.7101 217.248 47.6201 217.459C47.5302 217.67 47.3985 
                                    217.86 47.2329 218.019C47.0674 218.178 46.8714 218.302 46.6568 218.383C46.4422 218.464 46.2133 218.501 45.9839 218.492H45.9948ZM30.4337 
                                    218.221C30.3604 218.225 30.2869 218.225 30.2135 218.221C29.7269 218.159 29.2321 218.083 28.7428 217.998C28.516 217.968 28.2978 217.891 
                                    28.1012 217.774C27.9046 217.658 27.7336 217.502 27.5984 217.318C27.4632 217.134 27.3665 216.924 27.3142 216.702C27.2619 216.479 27.255 
                                    216.249 27.2939 216.024C27.3328 215.799 27.4167 215.584 27.5406 215.392C27.6645 215.2 27.8259 215.034 28.0152 214.906C28.2044 214.778 
                                    28.4177 214.689 28.6422 214.644C28.8666 214.6 29.0978 214.601 29.3218 214.648C29.7622 214.724 30.2108 214.791 30.6485 214.848C31.0744 
                                    214.907 31.4623 215.125 31.7343 215.457C32.0063 215.79 32.1424 216.213 32.1152 216.641C32.088 217.069 31.8996 217.471 31.5878 217.767C31.276 
                                    218.063 30.8637 218.23 30.4337 218.235V218.221ZM16.0254 212.713C15.6804 212.714 15.3435 212.608 15.0603 212.412C14.6525 212.14 14.2447 211.839 
                                    13.8505 211.544C13.662 211.413 13.5018 211.246 13.3796 211.052C13.2574 210.858 13.1757 210.641 13.1395 210.415C13.1032 210.189 13.1131 209.957 
                                    13.1686 209.735C13.2241 209.513 13.3239 209.304 13.4622 209.121C13.6006 208.938 13.7745 208.785 13.9735 208.671C14.1726 208.557 14.3927 208.484 
                                    14.6206 208.457C14.8485 208.43 15.0796 208.449 15.3 208.513C15.5204 208.577 15.7255 208.685 15.903 208.83C16.2591 209.102 16.6261 209.373 16.9904 
                                    209.614C17.2895 209.821 17.5148 210.117 17.6334 210.459C17.7519 210.802 17.7576 211.174 17.6495 211.52C17.5415 211.867 17.3253 212.169 17.0326 212.385C16.74 
                                    212.6 16.3861 212.716 16.0226 212.716L16.0254 212.713ZM5.71385 201.258C5.40663 201.258 5.1051 201.175 4.84133 201.018C4.57756 200.861 4.36141 200.635 4.21592 
                                    200.365C3.98212 199.933 3.75104 199.491 3.53628 199.046C3.43159 198.845 3.36837 198.624 3.35034 198.398C3.3323 198.172 3.35983 197.944 3.43128 197.729C3.50273 
                                    197.513 3.61667 197.314 3.76639 197.143C3.9161 196.972 4.09856 196.833 4.30303 196.734C4.5075 196.634 4.72982 196.577 4.95692 196.564C5.18402 196.552 5.41128 
                                    196.585 5.62534 196.662C5.83941 196.739 6.03593 196.857 6.20333 197.011C6.37074 197.165 6.50565 197.35 6.6001 197.557C6.79584 197.958 6.99973 198.371 7.21178 
                                    198.748C7.31832 198.944 7.38505 199.159 7.40814 199.381C7.43123 199.603 7.41023 199.828 7.34635 200.042C7.28247 200.256 7.17697 200.455 7.03586 200.628C6.89475 
                                    200.802 6.72079 200.945 6.52397 
                                    201.051C6.27671 201.191 5.99795 
                                    201.266 5.71385 201.268V201.258Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>

                            <div
                                className="position-absolute d-flex flex-column bg-white __border_radius_20 shadow shadow-lg px-3 py-5 mx-2"
                                style={{
                                    zIndex: 1000,
                                    bottom: -208,
                                    left: 20,
                                    maxHeight: "194.02px",
                                }}
                            >
                                <div className="mb-2">
                                    <svg
                                        width="50"
                                        height="61"
                                        viewBox="0 0 50 61"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M31.4687 2V14.6667C31.4687 15.5065 31.8024 16.312 32.3962 16.9058C32.9901 17.4997 33.7956 17.8333 34.6354 17.8333H47.3021M31.4687 2H9.30208C7.62238 2 6.01147 2.66726 4.82374 3.85499C3.63601 5.04272 2.96875 6.65363 2.96875 8.33333V30.5M31.4687 2L47.3021 17.8333M47.3021 17.8333V30.5M2.96875 59H47.3021M2.96875 49.5H47.3021M2.96875 40H47.3021"
                                            stroke="#CDA240"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="mb-0 fw-bold">
                                        Compile your documents
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col
                            md={2}
                            lg={2}
                            className="justify-content-center text-center position-relative"
                        >
                            <div
                                style={{ zIndex: 1 }}
                                className="position-absolute"
                            >
                                <svg
                                    width="239"
                                    height="223"
                                    viewBox="0 0 239 223"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M238.314 111.179L215.008 97.7513V124.607L238.314 111.179Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M182.729 0H109.872V222.359H182.729C203.986 222.359 221.278 205.1 221.278 183.884V38.477C221.278 17.2619 203.986 0 182.729 0Z"
                                        fill="#CDA240"
                                    />
                                    <path
                                        d="M4.1125 40.1021C3.66043 40.1021 3.22687 39.9229 2.9072 39.6039C2.58754 39.2848 2.40796 38.8521 2.40796 38.4009C2.40796 37.9071 2.40799 37.4078 2.44061 36.914C2.44173 36.6853 2.48907 36.4591 2.57979 36.249C2.67051 36.0389 2.80274 35.8492 2.9686 35.6913C3.13445 35.5334 3.33049 35.4105 3.54503 35.33C3.75957 35.2495 3.98816 35.2129 4.21717 35.2226C4.44618 35.2323 4.67094 35.288 4.87789 35.3863C5.08485 35.4846 5.26978 35.6236 5.42167 35.795C5.57357 35.9663 5.68929 36.1664 5.76189 36.3834C5.8345 36.6004 5.86252 36.8298 5.84426 37.0578C5.82523 37.5028 5.81705 37.9559 5.81705 38.4009C5.81705 38.8521 5.63747 39.2848 5.3178 39.6039C4.99814 39.9229 4.56457 40.1021 4.1125 40.1021ZM7.73909 25.095C7.44703 25.0953 7.15976 25.0206 6.905 24.878C6.65025 24.7355 6.43654 24.5299 6.28443 24.2811C6.13232 24.0322 6.04698 23.7485 6.03654 23.4572C6.02609 23.1659 6.09093 22.8768 6.22483 22.6178C6.45319 22.1755 6.69245 21.7359 6.93713 21.3045C7.16691 20.9244 7.53644 20.649 7.96687 20.5371C8.39731 20.4252 8.85454 20.4857 9.24093 20.7056C9.62733 20.9255 9.91224 21.2874 10.0349 21.7142C10.1576 22.1409 10.1084 22.5985 9.89761 22.9895C9.67469 23.3775 9.45989 23.7763 9.256 24.1725C9.11255 24.4506 8.89509 24.6838 8.62747 24.8465C8.35984 25.0093 8.05247 25.0953 7.73909 25.095ZM17.8467 13.4062C17.4861 13.4061 17.1348 13.2919 16.8433 13.0799C16.5518 12.868 16.3352 12.5692 16.2246 12.2267C16.114 11.8841 16.1151 11.5153 16.2278 11.1734C16.3405 10.8315 16.559 10.5341 16.8517 10.3239C17.2541 10.0363 17.6673 9.75139 18.0805 9.48278C18.2674 9.35019 18.4791 9.2566 18.703 9.20758C18.9269 9.15857 19.1585 9.15514 19.3838 9.19751C19.6091 9.23989 19.8235 9.32718 20.0142 9.45418C20.2049 9.58118 20.368 9.74527 20.4937 9.93664C20.6194 10.128 20.7051 10.3427 20.7457 10.5679C20.7863 10.7931 20.781 11.0242 20.7301 11.2473C20.6792 11.4704 20.5837 11.6809 20.4493 11.8663C20.3149 12.0517 20.1445 12.2082 19.9481 12.3263C19.5757 12.5705 19.2005 12.8255 18.8389 13.086C18.5496 13.2931 18.2027 13.405 17.8467 13.4062ZM32.1762 7.61333C31.747 7.61103 31.3344 7.44718 31.021 7.15451C30.7075 6.86184 30.5162 6.46189 30.4853 6.03459C30.4544 5.60729 30.5861 5.18408 30.8542 4.84952C31.1223 4.51495 31.5071 4.29367 31.9316 4.22987C32.4209 4.15661 32.9211 4.09421 33.4104 4.04266C33.6358 4.01403 33.8647 4.03067 34.0835 4.0916C34.3024 4.15253 34.5068 4.25651 34.6848 4.39743C34.8628 4.53836 35.0108 4.71338 35.1201 4.91221C35.2294 5.11104 35.2977 5.32966 35.3211 5.55522C35.3445 5.78079 35.3224 6.00874 35.2562 6.22568C35.1901 6.44262 35.0811 6.64417 34.9358 6.81848C34.7905 6.99278 34.6117 7.13634 34.4099 7.24069C34.2082 7.34504 33.9876 7.40808 33.7612 7.42611C33.318 7.47224 32.8694 7.52922 32.4263 7.59434C32.3443 7.60594 32.2617 7.61229 32.1789 7.61333H32.1762ZM96.0624 7.2606H94.6433C94.1913 7.2606 93.7577 7.08137 93.438 6.76233C93.1184 6.44328 92.9388 6.01057 92.9388 5.55938C92.9388 5.10818 93.1184 4.67547 93.438 4.35643C93.7577 4.03739 94.1913 3.85815 94.6433 3.85815H96.0624C96.5145 3.85815 96.948 4.03739 97.2677 4.35643C97.5874 4.67547 97.767 5.10818 97.767 5.55938C97.767 6.01057 97.5874 6.44328 97.2677 6.76233C96.948 7.08137 96.5145 7.2606 96.0624 7.2606ZM80.4443 7.2606H79.0143C78.5622 7.2606 78.1287 7.08137 77.809 6.76233C77.4894 6.44328 77.3098 6.01057 77.3098 5.55938C77.3098 5.10818 77.4894 4.67547 77.809 4.35643C78.1287 4.03739 78.5622 3.85815 79.0143 3.85815H80.4334C80.8855 3.85815 81.319 4.03739 81.6387 4.35643C81.9584 4.67547 82.1379 5.10818 82.1379 5.55938C82.1379 6.01057 81.9584 6.44328 81.6387 6.76233C81.319 7.08137 80.8855 7.2606 80.4334 7.2606H80.4443ZM64.8262 7.2606H63.4071C62.955 7.2606 62.5214 7.08137 62.2018 6.76233C61.8821 6.44328 61.7025 6.01057 61.7025 5.55938C61.7025 5.10818 61.8821 4.67547 62.2018 4.35643C62.5214 4.03739 62.955 3.85815 63.4071 3.85815H64.8262C65.2782 3.85815 65.7118 4.03739 66.0315 4.35643C66.3511 4.67547 66.5307 5.10818 66.5307 5.55938C66.5307 6.01057 66.3511 6.44328 66.0315 6.76233C65.7118 7.08137 65.2782 7.2606 64.8262 7.2606ZM49.2108 7.2606H47.7916C47.3395 7.2606 46.906 7.08137 46.5864 6.76233C46.2667 6.44328 46.0871 6.01057 46.0871 5.55938C46.0871 5.10818 46.2667 4.67547 46.5864 4.35643C46.906 4.03739 47.3395 3.85815 47.7916 3.85815H49.2108C49.6628 3.85815 50.0963 4.03739 50.416 4.35643C50.7357 4.67547 50.9152 5.10818 50.9152 5.55938C50.9152 6.01057 50.7357 6.44328 50.416 6.76233C50.0963 7.08137 49.6628 7.2606 49.2108 7.2606Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M5.53201 38.401H2.69385V94.7151H5.53201V38.401Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M7.31413 94.5551C7.31413 95.1873 7.12629 95.8052 6.7744 96.3309C6.42251 96.8565 5.92238 97.2661 5.3372 97.5081C4.75203 97.75 4.10812 97.8133 3.48691 97.6899C2.86569 97.5666 2.29508 97.2622 1.84721 96.8152C1.39934 96.3682 1.09428 95.7987 0.970711 95.1787C0.847144 94.5587 0.910579 93.916 1.15297 93.332C1.39535 92.7479 1.80581 92.2488 2.33245 91.8976C2.85909 91.5463 3.47827 91.3589 4.11166 91.3589C4.96078 91.3596 5.77496 91.6966 6.37538 92.2958C6.9758 92.8951 7.31341 93.7076 7.31413 94.5551Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M109.938 218.221H37.0184C27.9178 218.21 19.1931 214.597 12.7582 208.174C6.32339 201.751 2.70392 193.043 2.69385 183.96V128.387H5.53201V183.958C5.54495 192.288 8.86644 200.274 14.7685 206.164C20.6705 212.055 28.6717 215.37 37.0184 215.383H109.938V218.221Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M7.31413 128.547C7.31413 127.915 7.12629 127.297 6.7744 126.771C6.42251 126.246 5.92238 125.836 5.3372 125.594C4.75203 125.352 4.10812 125.289 3.48691 125.412C2.86569 125.535 2.29508 125.84 1.84721 126.287C1.39934 126.734 1.09428 127.303 0.970711 127.923C0.847144 128.543 0.910579 129.186 1.15297 129.77C1.39535 130.354 1.80581 130.853 2.33245 131.205C2.85909 131.556 3.47827 131.743 4.11166 131.743C4.96101 131.743 5.7756 131.406 6.37618 130.807C6.97675 130.208 7.31413 129.395 7.31413 128.547Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>

                            <div
                                className="position-absolute d-flex flex-column bg-white __border_radius_20 shadow shadow-lg px-3 py-5 mx-2"
                                style={{
                                    zIndex: 1000,
                                    bottom: -208,
                                    left: 20,
                                    maxHeight: "194.02px",
                                }}
                            >
                                <div className="mb-2">
                                    <svg
                                        width="53"
                                        height="61"
                                        viewBox="0 0 53 61"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M2.96875 59V46.3333C2.96875 43.8138 3.98018 41.3974 5.78053 39.6158C7.58087 37.8342 10.0227 36.8333 12.5688 36.8333H28.5688M28.5688 36.8333L18.9688 46.3333M28.5688 36.8333L18.9688 27.3333M34.9688 2V14.6667C34.9688 15.5065 35.3059 16.312 35.906 16.9058C36.5061 17.4997 37.3201 17.8333 38.1688 17.8333H50.9688M34.9688 2H12.5688C10.8714 2 9.2435 2.66726 8.04327 3.85499C6.84303 5.04272 6.16875 6.65363 6.16875 8.33333V27.3333M34.9688 2L50.9688 17.8333M50.9688 17.8333V52.6667C50.9688 54.3464 50.2945 55.9573 49.0942 57.145C47.894 58.3327 46.2661 59 44.5688 59H14.1688"
                                            stroke="#CDA240"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="mb-0 fw-bold">
                                        Application submission + initial payment
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col
                            md={2}
                            lg={2}
                            className="justify-content-center text-center position-relative"
                        >
                            <div
                                style={{ zIndex: 1 }}
                                className="position-absolute"
                            >
                                <svg
                                    width="238"
                                    height="223"
                                    viewBox="0 0 238 223"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M237.991 111.179L214.684 97.7515V124.608L237.991 111.179Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M182.073 0H109.216V222.359H182.073C203.332 222.359 220.625 205.1 220.625 183.884V38.477C220.625 17.2619 203.332 0 182.073 0Z"
                                        fill="#CDA240"
                                    />
                                    <path
                                        d="M4.87855 94.7152H2.0376V38.4011C2.04839 29.3181 5.66862 20.6104 12.104 14.188C18.5393 7.76569 27.2643 4.15324 36.3649 4.14319H109.285V6.97585H36.3649C28.0181 6.98877 20.017 10.3038 14.115 16.1943C8.21291 22.0849 4.89149 30.0705 4.87855 38.4011V94.7152Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M6.66123 94.5551C6.66123 95.1873 6.47346 95.8052 6.12157 96.3309C5.76968 96.8565 5.26948 97.2661 4.6843 97.5081C4.09913 97.75 3.45523 97.8133 2.83401 97.6899C2.21279 97.5666 1.64218 97.2622 1.19431 96.8152C0.746437 96.3682 0.441447 95.7987 0.317879 95.1787C0.194311 94.5587 0.257747 93.916 0.500134 93.332C0.742521 92.7479 1.15297 92.2488 1.67962 91.8976C2.20626 91.5463 2.82544 91.3589 3.45883 91.3589C4.30795 91.3596 5.12206 91.6966 5.72248 92.2958C6.3229 92.8951 6.66051 93.7076 6.66123 94.5551Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M4.87583 128.387H2.0376V183.958H4.87583V128.387Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M6.66123 128.547C6.66123 127.915 6.47346 127.297 6.12157 126.771C5.76968 126.246 5.26948 125.836 4.6843 125.594C4.09913 125.352 3.45523 125.289 2.83401 125.412C2.21279 125.535 1.64218 125.84 1.19431 126.287C0.746437 126.734 0.441447 127.303 0.317879 127.923C0.194311 128.543 0.257747 129.186 0.500134 129.77C0.742521 130.354 1.15297 130.853 1.67962 131.205C2.20626 131.556 2.82544 131.743 3.45883 131.743C3.87938 131.743 4.29576 131.661 4.6843 131.5C5.07284 131.339 5.4259 131.104 5.72328 130.807C6.02065 130.51 6.25658 130.158 6.41752 129.77C6.57846 129.382 6.66123 128.967 6.66123 128.547Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M109.284 218.492H107.865C107.635 218.501 107.407 218.464 107.192 218.383C106.977 218.302 106.781 218.178 106.616 218.019C106.45 217.86 106.319 217.67 106.229 217.459C106.139 217.248 106.092 217.021 106.092 216.792C106.092 216.563 106.139 216.336 106.229 216.126C106.319 215.915 106.45 215.724 106.616 215.566C106.781 215.407 106.977 215.283 107.192 215.202C107.407 215.121 107.635 215.083 107.865 215.092H109.284C109.513 215.083 109.742 215.121 109.957 215.202C110.171 215.283 110.367 215.407 110.533 215.566C110.699 215.724 110.83 215.915 110.92 216.126C111.01 216.336 111.057 216.563 111.057 216.792C111.057 217.021 111.01 217.248 110.92 217.459C110.83 217.67 110.699 217.86 110.533 218.019C110.367 218.178 110.171 218.302 109.957 218.383C109.742 218.464 109.513 218.501 109.284 218.492ZM93.6658 218.492H92.2467C92.0173 218.501 91.7885 218.464 91.5738 218.383C91.3592 218.302 91.1632 218.178 90.9977 218.019C90.8321 217.86 90.7004 217.67 90.6105 217.459C90.5205 217.248 90.4741 217.021 90.4741 216.792C90.4741 216.563 90.5205 216.336 90.6105 216.126C90.7004 215.915 90.8321 215.724 90.9977 215.566C91.1632 215.407 91.3592 215.283 91.5738 215.202C91.7885 215.121 92.0173 215.083 92.2467 215.092H93.6658C93.8952 215.083 94.1241 215.121 94.3387 215.202C94.5534 215.283 94.7493 215.407 94.9148 215.566C95.0804 215.724 95.2121 215.915 95.302 216.126C95.392 216.336 95.4384 216.563 95.4384 216.792C95.4384 217.021 95.392 217.248 95.302 217.459C95.2121 217.67 95.0804 217.86 94.9148 218.019C94.7493 218.178 94.5534 218.302 94.3387 218.383C94.1241 218.464 93.8952 218.501 93.6658 218.492ZM78.0504 218.492H76.6286C76.1887 218.475 75.7726 218.288 75.4676 217.971C75.1625 217.654 74.9921 217.232 74.9921 216.792C74.9921 216.353 75.1625 215.931 75.4676 215.614C75.7726 215.297 76.1887 215.11 76.6286 215.092H78.0531C78.493 215.11 78.9091 215.297 79.2141 215.614C79.5192 215.931 79.6896 216.353 79.6896 216.792C79.6896 217.232 79.5192 217.654 79.2141 217.971C78.9091 218.288 78.493 218.475 78.0531 218.492H78.0504ZM62.4323 218.492H61.0132C60.7838 218.501 60.5549 218.464 60.3402 218.383C60.1256 218.302 59.9297 218.178 59.7641 218.019C59.5986 217.86 59.4669 217.67 59.3769 217.459C59.287 217.248 59.2405 217.021 59.2405 216.792C59.2405 216.563 59.287 216.336 59.3769 216.126C59.4669 215.915 59.5986 215.724 59.7641 215.566C59.9297 215.407 60.1256 215.283 60.3402 215.202C60.5549 215.121 60.7838 215.083 61.0132 215.092H62.4323C62.6617 215.083 62.8905 215.121 63.1051 215.202C63.3198 215.283 63.5158 215.407 63.6813 215.566C63.8468 215.724 63.9785 215.915 64.0685 216.126C64.1585 216.336 64.2048 216.563 64.2048 216.792C64.2048 217.021 64.1585 217.248 64.0685 217.459C63.9785 217.67 63.8468 217.86 63.6813 218.019C63.5158 218.178 63.3198 218.302 63.1051 218.383C62.8905 218.464 62.6617 218.501 62.4323 218.492ZM46.8141 218.492H45.3951C45.1657 218.501 44.9368 218.464 44.7221 218.383C44.5075 218.302 44.3115 218.178 44.146 218.019C43.9804 217.86 43.8487 217.67 43.7588 217.459C43.6688 217.248 43.6224 217.021 43.6224 216.792C43.6224 216.563 43.6688 216.336 43.7588 216.126C43.8487 215.915 43.9804 215.724 44.146 215.566C44.3115 215.407 44.5075 215.283 44.7221 215.202C44.9368 215.121 45.1657 215.083 45.3951 215.092H46.8141C47.0435 215.083 47.2724 215.121 47.487 215.202C47.7016 215.283 47.8976 215.407 48.0632 215.566C48.2287 215.724 48.3604 215.915 48.4504 216.126C48.5404 216.336 48.5867 216.563 48.5867 216.792C48.5867 217.021 48.5404 217.248 48.4504 217.459C48.3604 217.67 48.2287 217.86 48.0632 218.019C47.8976 218.178 47.7016 218.302 47.487 218.383C47.2724 218.464 47.0435 218.501 46.8141 218.492ZM31.2232 218.093C31.1322 218.094 31.0413 218.088 30.9513 218.074C30.462 217.998 29.9672 217.909 29.4806 217.803C29.0447 217.707 28.6642 217.443 28.4207 217.07C28.1773 216.696 28.0904 216.242 28.1787 215.806C28.267 215.369 28.5234 214.984 28.8929 214.734C29.2625 214.484 29.7156 214.389 30.1548 214.468C30.5925 214.558 31.0383 214.637 31.4787 214.707C31.9049 214.771 32.2909 214.994 32.5588 215.331C32.8267 215.668 32.9564 216.094 32.9219 216.523C32.8874 216.952 32.6913 217.351 32.3729 217.641C32.0546 217.931 31.6378 218.09 31.2068 218.085L31.2232 218.093ZM16.9398 212.165C16.5781 212.165 16.2259 212.05 15.934 211.837C15.5316 211.541 15.132 211.237 14.7487 210.928C14.5741 210.788 14.4288 210.616 14.321 210.42C14.2132 210.225 14.145 210.01 14.1204 209.788C14.0958 209.566 14.1152 209.342 14.1775 209.127C14.2399 208.913 14.3439 208.713 14.4836 208.539C14.6234 208.364 14.7962 208.219 14.9921 208.112C15.188 208.004 15.4033 207.936 15.6256 207.912C15.8478 207.887 16.0728 207.906 16.2876 207.969C16.5024 208.031 16.7027 208.135 16.8773 208.274C17.2253 208.545 17.5841 208.817 17.9457 209.088C18.2357 209.3 18.4513 209.598 18.5615 209.939C18.6718 210.281 18.6711 210.648 18.5595 210.989C18.4479 211.33 18.2312 211.627 17.9403 211.838C17.6494 212.048 17.2992 212.162 16.9398 212.162V212.165ZM6.9464 200.381C6.63061 200.381 6.32098 200.294 6.05212 200.129C5.78325 199.963 5.5658 199.727 5.42405 199.445C5.20112 199.005 4.98633 198.552 4.78244 198.102C4.68146 197.897 4.62282 197.674 4.61007 197.446C4.59732 197.218 4.63074 196.99 4.70823 196.775C4.78573 196.56 4.90576 196.363 5.06119 196.195C5.21662 196.028 5.40421 195.893 5.61287 195.8C5.82154 195.706 6.04698 195.655 6.27572 195.65C6.50446 195.645 6.73188 195.687 6.94434 195.771C7.15681 195.856 7.34998 195.983 7.51241 196.143C7.67484 196.304 7.80315 196.496 7.88973 196.707C8.07188 197.114 8.26764 197.521 8.4661 197.917C8.56672 198.117 8.62698 198.334 8.64344 198.557C8.65991 198.779 8.63226 199.003 8.56207 199.215C8.49188 199.427 8.38055 199.623 8.2344 199.792C8.08825 199.961 7.91016 200.099 7.71033 200.199C7.47451 200.322 7.21257 200.388 6.9464 200.389V200.381Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>

                            <div
                                className="position-absolute d-flex flex-column bg-white __border_radius_20 shadow shadow-lg px-3 py-5 mx-2"
                                style={{
                                    zIndex: 1000,
                                    bottom: -208,
                                    left: 20,
                                    maxHeight: "194.02px",
                                }}
                            >
                                <div className="mb-2">
                                    <svg
                                        width="63"
                                        height="62"
                                        viewBox="0 0 63 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M31.9688 11.6667V2M45.6632 17.3055L52.591 10.3777M51.3021 31H60.9688M45.6632 44.6944L52.591 51.6222M31.9688 50.3333V60M18.2746 44.6944L11.3468 51.6222M12.6354 31H2.96875M18.2746 17.3055L11.3468 10.3777"
                                            stroke="#CDA240"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="mb-0 fw-bold">
                                        Application processing
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col
                            md={2}
                            lg={2}
                            className="justify-content-center text-center position-relative"
                        >
                            <div
                                style={{ zIndex: 1 }}
                                className="position-absolute"
                            >
                                <svg
                                    width="221"
                                    height="223"
                                    viewBox="0 0 221 223"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M181.906 0H109.048V222.359H181.906C203.162 222.359 220.455 205.1 220.455 183.884V38.477C220.455 17.2619 203.162 0 181.906 0Z"
                                        fill="#CDA240"
                                    />
                                    <path
                                        d="M3.28877 40.1021C2.8367 40.1021 2.40314 39.9229 2.08347 39.6039C1.76381 39.2848 1.58423 38.8521 1.58423 38.4009C1.58423 37.9071 1.58426 37.4078 1.61688 36.914C1.618 36.6853 1.66534 36.4591 1.75606 36.249C1.84678 36.0389 1.97901 35.8492 2.14487 35.6913C2.31072 35.5334 2.50676 35.4105 2.7213 35.33C2.93584 35.2495 3.16443 35.2129 3.39344 35.2226C3.62245 35.2323 3.84721 35.288 4.05416 35.3863C4.26112 35.4846 4.44605 35.6236 4.59794 35.795C4.74983 35.9663 4.86555 36.1664 4.93816 36.3834C5.01077 36.6004 5.03879 36.8298 5.02053 37.0578C5.0015 37.5028 4.99332 37.9559 4.99332 38.4009C4.99332 38.8521 4.81373 39.2848 4.49407 39.6039C4.17441 39.9229 3.74084 40.1021 3.28877 40.1021ZM6.91536 25.095C6.6233 25.0953 6.33603 25.0206 6.08127 24.878C5.82652 24.7355 5.61281 24.5299 5.4607 24.2811C5.30859 24.0322 5.22325 23.7485 5.2128 23.4572C5.20236 23.1659 5.2672 22.8768 5.4011 22.6178C5.62946 22.1755 5.86872 21.7359 6.11339 21.3045C6.34318 20.9244 6.71271 20.649 7.14314 20.5371C7.57358 20.4252 8.03081 20.4857 8.4172 20.7056C8.8036 20.9255 9.08851 21.2874 9.2112 21.7142C9.33389 22.1409 9.28463 22.5985 9.07388 22.9895C8.85096 23.3775 8.63616 23.7763 8.43227 24.1725C8.28882 24.4506 8.07136 24.6838 7.80373 24.8465C7.53611 25.0093 7.22874 25.0953 6.91536 25.095ZM17.023 13.4062C16.6623 13.4061 16.311 13.2919 16.0196 13.0799C15.7281 12.868 15.5115 12.5692 15.4009 12.2267C15.2903 11.8841 15.2914 11.5153 15.4041 11.1734C15.5168 10.8315 15.7352 10.5341 16.028 10.3239C16.4303 10.0363 16.8436 9.75139 17.2568 9.48278C17.4436 9.35019 17.6553 9.2566 17.8793 9.20758C18.1032 9.15857 18.3347 9.15514 18.56 9.19751C18.7853 9.23989 18.9998 9.32718 19.1905 9.45418C19.3812 9.58118 19.5443 9.74527 19.67 9.93664C19.7957 10.128 19.8814 10.3427 19.922 10.5679C19.9626 10.7931 19.9573 11.0242 19.9064 11.2473C19.8554 11.4704 19.7599 11.6809 19.6256 11.8663C19.4912 12.0517 19.3207 12.2082 19.1244 12.3263C18.7519 12.5705 18.3768 12.8255 18.0152 13.086C17.7258 13.2931 17.379 13.405 17.023 13.4062ZM31.3525 7.61333C30.9232 7.61103 30.5107 7.44718 30.1972 7.15451C29.8837 6.86184 29.6924 6.46189 29.6615 6.03459C29.6306 5.60729 29.7624 5.18408 30.0305 4.84952C30.2986 4.51495 30.6834 4.29367 31.1078 4.22987C31.5972 4.15661 32.0974 4.09421 32.5867 4.04266C32.8121 4.01403 33.0409 4.03067 33.2598 4.0916C33.4786 4.15253 33.6831 4.25651 33.8611 4.39743C34.0391 4.53836 34.1871 4.71338 34.2964 4.91221C34.4056 5.11104 34.474 5.32966 34.4973 5.55522C34.5207 5.78079 34.4987 6.00874 34.4325 6.22568C34.3663 6.44262 34.2574 6.64417 34.1121 6.81848C33.9667 6.99278 33.7879 7.13634 33.5862 7.24069C33.3845 7.34504 33.1639 7.40808 32.9374 7.42611C32.4943 7.47224 32.0457 7.52922 31.6026 7.59434C31.5206 7.60594 31.438 7.61229 31.3552 7.61333H31.3525ZM95.2387 7.2606H93.8196C93.3675 7.2606 92.934 7.08137 92.6143 6.76233C92.2946 6.44328 92.1151 6.01057 92.1151 5.55938C92.1151 5.10818 92.2946 4.67547 92.6143 4.35643C92.934 4.03739 93.3675 3.85815 93.8196 3.85815H95.2387C95.6908 3.85815 96.1243 4.03739 96.444 4.35643C96.7636 4.67547 96.9432 5.10818 96.9432 5.55938C96.9432 6.01057 96.7636 6.44328 96.444 6.76233C96.1243 7.08137 95.6908 7.2606 95.2387 7.2606ZM79.6206 7.2606H78.1906C77.7385 7.2606 77.3049 7.08137 76.9853 6.76233C76.6656 6.44328 76.486 6.01057 76.486 5.55938C76.486 5.10818 76.6656 4.67547 76.9853 4.35643C77.3049 4.03739 77.7385 3.85815 78.1906 3.85815H79.6097C80.0617 3.85815 80.4953 4.03739 80.815 4.35643C81.1346 4.67547 81.3142 5.10818 81.3142 5.55938C81.3142 6.01057 81.1346 6.44328 80.815 6.76233C80.4953 7.08137 80.0617 7.2606 79.6097 7.2606H79.6206ZM64.0024 7.2606H62.5833C62.1313 7.2606 61.6977 7.08137 61.378 6.76233C61.0584 6.44328 60.8788 6.01057 60.8788 5.55938C60.8788 5.10818 61.0584 4.67547 61.378 4.35643C61.6977 4.03739 62.1313 3.85815 62.5833 3.85815H64.0024C64.4545 3.85815 64.8881 4.03739 65.2077 4.35643C65.5274 4.67547 65.707 5.10818 65.707 5.55938C65.707 6.01057 65.5274 6.44328 65.2077 6.76233C64.8881 7.08137 64.4545 7.2606 64.0024 7.2606ZM48.387 7.2606H46.9679C46.5158 7.2606 46.0823 7.08137 45.7626 6.76233C45.443 6.44328 45.2633 6.01057 45.2633 5.55938C45.2633 5.10818 45.443 4.67547 45.7626 4.35643C46.0823 4.03739 46.5158 3.85815 46.9679 3.85815H48.387C48.8391 3.85815 49.2726 4.03739 49.5923 4.35643C49.9119 4.67547 50.0915 5.10818 50.0915 5.55938C50.0915 6.01057 49.9119 6.44328 49.5923 6.76233C49.2726 7.08137 48.8391 7.2606 48.387 7.2606Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M4.70816 38.401H1.87V94.7151H4.70816V38.401Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M6.4904 94.5551C6.4904 95.1873 6.30256 95.8052 5.95067 96.3309C5.59878 96.8565 5.09865 97.2661 4.51347 97.5081C3.9283 97.75 3.28439 97.8133 2.66318 97.6899C2.04196 97.5666 1.47135 97.2622 1.02348 96.8152C0.575605 96.3682 0.270549 95.7987 0.146981 95.1787C0.023413 94.5587 0.086849 93.916 0.329236 93.332C0.571623 92.7479 0.982075 92.2488 1.50872 91.8976C2.03536 91.5463 2.65454 91.3589 3.28793 91.3589C4.13705 91.3596 4.95123 91.6966 5.55165 92.2958C6.15207 92.8951 6.48968 93.7076 6.4904 94.5551Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M109.115 218.221H36.1946C27.094 218.21 18.3692 214.597 11.9344 208.174C5.49954 201.751 1.88007 193.043 1.87 183.96V128.387H4.70816V183.958C4.7211 192.288 8.04259 200.274 13.9446 206.164C19.8467 212.055 27.8478 215.37 36.1946 215.383H109.115V218.221Z"
                                        fill="black"
                                    />
                                    <path
                                        d="M6.4904 128.547C6.4904 127.915 6.30256 127.297 5.95067 126.771C5.59878 126.246 5.09865 125.836 4.51347 125.594C3.9283 125.352 3.28439 125.289 2.66318 125.412C2.04196 125.535 1.47135 125.84 1.02348 126.287C0.575605 126.734 0.270549 127.303 0.146981 127.923C0.023413 128.543 0.086849 129.186 0.329236 129.77C0.571623 130.354 0.982075 130.853 1.50872 131.205C2.03536 131.556 2.65454 131.743 3.28793 131.743C4.13728 131.743 4.95187 131.406 5.55244 130.807C6.15302 130.208 6.4904 129.395 6.4904 128.547Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                            <div
                                className="position-absolute d-flex flex-column bg-white __border_radius_20 shadow shadow-lg px-3 py-5 mx-2"
                                style={{
                                    zIndex: 1000,
                                    bottom: -208,
                                    left: 20,
                                    maxHeight: "194.02px",
                                }}
                            >
                                <div className="mb-2">
                                    <svg
                                        width="57"
                                        height="62"
                                        viewBox="0 0 57 62"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12.7188 56.7776V47.111C12.7188 46.2564 12.3763 45.4368 11.7668 44.8326C11.1574 44.2283 10.3307 43.8888 9.46875 43.8888H6.21875C5.3568 43.8888 4.53015 44.2283 3.92065 44.8326C3.31116 45.4368 2.96875 46.2564 2.96875 47.111V56.7776C2.96875 57.6322 3.31116 58.4518 3.92065 59.0561C4.53015 59.6604 5.3568 59.9999 6.21875 59.9999H9.46875C10.3307 59.9999 11.1574 59.6604 11.7668 59.0561C12.3763 58.4518 12.7188 57.6322 12.7188 56.7776ZM12.7188 56.7776C12.7188 57.6322 13.0612 58.452 13.6707 59.0562C14.2801 59.6605 15.1068 60 15.9688 60H28.1757C28.8749 60 29.5555 59.7765 30.1164 59.3627C30.6773 58.9488 31.0886 58.3666 31.2892 57.7026L35.1892 48.0359C35.4817 47.0596 35.6215 46.0059 35.0072 45.1875C34.3962 44.369 33.2458 43.8889 32.2188 43.8889H25.7188V35.9397C25.7184 35.1793 25.4713 34.4391 25.0141 33.8286C24.5568 33.218 23.9137 32.7694 23.1796 32.5491C22.4455 32.3288 21.6594 32.3484 20.9374 32.605C20.2154 32.8616 19.5957 33.3416 19.17 33.9742L12.7188 43.8889V56.7776ZM38.7188 2V14.8889C38.7188 15.7434 39.0612 16.563 39.6707 17.1673C40.2801 17.7716 41.1068 18.1111 41.9688 18.1111H54.9688M38.7188 2H15.9688C14.2448 2 12.5915 2.67896 11.3726 3.88753C10.1536 5.09609 9.46875 6.73526 9.46875 8.44443V31.3222M38.7188 2L54.9688 18.1111M54.9688 18.1111V53.5554C54.9688 55.2646 54.2839 56.9038 53.0649 58.1123C51.846 59.3209 50.1927 59.9999 48.4688 59.9999H40.9937"
                                            stroke="#CDA240"
                                            stroke-width="4"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </svg>
                                </div>

                                <div>
                                    <p className="mb-0 fw-bold">
                                        Application approval
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Container>
                        <div className="mt-20 d-flex flex-row">
                            <a className="btn border border-black rounded-0 ms-auto me-auto fw-medium">Read More</a>
                        </div>
                    </Container>
                    
                </Container>
            </div>

            <ContactUsConsultationForm />

            <div className="d-flex pt-5 pb-5 bg-white">
                <Container>
                    <div className="text-center text-black">
                        <h3 className="fw-bold mb-0">Frequently Asked Questions</h3>
                        <p className="text-primary">Stuck on something? We’re here to help with all your Questions and Answers in one place.</p>
                    </div>

                    <CustomAccordion
                        className="d-flex flex-row mt-5" 
                        items={
                            [
                                {
                                    title: 'What is Citizenship by Investment?',
                                    content: 'What is Citizenship by Investment?'
                                },
                                {
                                    title: 'Which countries offer Citizenship by Investment Program?',
                                    content: 'What is Citizenship by Investment?'
                                },
                                {
                                    title: 'What are the pros of acquiring Citizenship by Investment?',
                                    content: 'What is Citizenship by Investment?'
                                },
                                {
                                    title: 'Can I obtain Citizenship by Investment without residing in the country?',
                                    content: 'What is Citizenship by Investment?'
                                },
                            ]
                        }
                    />
                </Container>
            </div>

        </Layout>
    );
};

export default StKittsNevis;
