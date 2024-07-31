import HeroCitizenshipByInvestment from "@/Components/HeroCitizenshipByInvestment";
import Layout from "@/Layouts/Layout";
import React from "react";
import CitizenshipByInvestment from "../../../assets/citizenship-by-investment.png";
import CitizenshipInvestmentPrograms from "@/Components/CitizenshipInvestmentPrograms";
import { Button, Col, Container, Row } from "react-bootstrap";
import CitizenshipInvestment from "../../../assets/passport-plane.png";
import Card from "react-bootstrap/Card";
import StateFundContributionImage from "../../../assets/deep-underwater-abstract-marine-background-tranquil-view 1.png";
import RealEstate from "../../../assets/abstract.png";
import BankDeposit from "../../../assets/bank-deposit.png";
import JobCreation from "../../../assets/job-creation.png";
import Securities from "../../../assets/securities.png";
import PublicBenefit from "../../../assets/public-benefit.png";

const Investment = () => {
    return (
        <Layout>
            <HeroCitizenshipByInvestment />

            <div className="d-flex __pt-15 pb-6 bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div>
                                <h4 className="text-primary fw-bold  mb-0">
                                    Citizenship by
                                </h4>
                            </div>
                            <div>
                                <h3 className="fw-bold">Investment Programs</h3>
                            </div>

                            <div>
                                <p>
                                    Citizenship by Investment is a Plan B
                                    tailored for high-net-worth individuals and
                                    their family members. The program grants
                                    second citizenship of a country by
                                    contributing a specific amount via donation
                                    or investment in the economy of that
                                    country. People seeking citizenship by
                                    investment programs can invest in real
                                    estate, business ventures, capital funds,
                                    bank deposits or government bonds. These
                                    citizenship program benefits include
                                    visa-free travel, business opportunities,
                                    and reduced tax benefits.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div>
                                <img
                                    src={CitizenshipByInvestment}
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="d-flex flex-column bg-white"
                style={{ marginTop: "" }}
            >
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
                                <h5 className="fw-bold text-primary mb-0">
                                    Reasons to Get
                                </h5>
                                <h4 className="text-white fw-bold">
                                    Citizenship by Investment
                                </h4>
                                <div>
                                    <p className="text-white">
                                        You may consider the reasons for getting
                                        a second citizenship by investment. Key
                                        attractions to become a second citizen
                                        of a country with a powerful passport
                                        include:
                                    </p>
                                </div>

                                <div className="container">
                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Visa-Free Travel:{" "}
                                            </span>
                                            Second passport by investment can
                                            provide hassle-free access to 150+
                                            countries.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Business and work:{" "}
                                            </span>
                                            Benefit of holding a second passport
                                            opens new business and work
                                            opportunities around the world.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Lifetime Benefits of
                                                Citizenship:{" "}
                                            </span>
                                            By investing $400,000 or more to buy
                                            a condominium unit or a share in a
                                            real estate development project, you
                                            can get St Kitts and Nevis
                                            Citizenship.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Tax Advantages:{" "}
                                            </span>
                                            Countries offering citizenship by
                                            investment lure investors by their
                                            generous tax benefits and high
                                            returns on their investments.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Safety and Security:{" "}
                                            </span>
                                            Second citizenship of a country
                                            grants protection, safety and
                                            security.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Wealth Preservation:{" "}
                                            </span>
                                            Second citizenship is used for
                                            wealth preservation by wealthy
                                            individuals and families.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Reliable Governments:{" "}
                                            </span>
                                            Getting citizenship in countries
                                            with political stability ensures
                                            merit-based decisions and equal
                                            opportunities to grow.
                                        </h6>
                                    </Col>

                                    <Col className="mb-3">
                                        <h6 className="text-white fw-light">
                                            <span className="text-primary fw-bold">
                                                Quality of Life:{" "}
                                            </span>
                                            Getting citizenship of a country to
                                            improve quality of life is one of
                                            the key attractions.
                                        </h6>
                                    </Col>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>

            <CitizenshipInvestmentPrograms
                title="Best Citizenship by Investment Programs"
                subtitle={`The best citizenship by investment programs are known for their numerous benefits. 
                Some of the highlights of best CBI programs include family eligibility, due diligence standards, processing times, investment policies and how the programs facilitate investors.
                Further, the best citizenship options ensure a smooth investment plan with high ROI. 
                Citizenship by real estate investment is one of the top choices of high-net-worth individuals seeking citizenship. 
                Other options include citizenship by donation, capital transfers, bank account deposits, supporting infrastructure or public benefit projects etc.`}
                classNames={"d-flex bg-white pt-5"}
            />

            <div className="d-flex bg-black">
                <Container className="py-5">
                    <Row>
                        <Col md={6} xs={12} lg={9}>
                            <Row>
                                <Col md={4} lg={4} xs={3}>
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={StateFundContributionImage}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>
                                                    State Fund Contribution
                                                </small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} xs={3}>
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={RealEstate}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>Real Estate</small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} xs={3} className="mb-3">
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={BankDeposit}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>Bank Deposit</small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} xs={3}>
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={JobCreation}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>
                                                    Business / Job Creation
                                                </small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} xs={3}>
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={Securities}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>
                                                    Securities / Investment Fund
                                                </small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col md={4} lg={4} xs={3}>
                                    <Card className="p-2">
                                        <Card.Img
                                            className="rounded rounded-3"
                                            style={{
                                                border: "2px solid #CDA240",
                                            }}
                                            variant="top"
                                            src={PublicBenefit}
                                        />
                                        <Card.Body className="pb-1">
                                            <Card.Title className="text-center text-dark fw-bold text-hover-black mb-0">
                                                <small>
                                                    Public Benefit Fund
                                                </small>
                                            </Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                        <Col
                            md={6}
                            xs={12}
                            lg={3}
                            className="text-end d-flex flex-column align-items-end"
                        >
                            <div>
                                <h6 className="text-primary fw-bold">
                                    Investment Options to{" "}
                                </h6>
                            </div>
                            <div>
                                <h3 className="mb-0 text-white fw-bold">
                                    Get a Second Passport{" "}
                                </h3>
                            </div>
                            <div className="mt-3 ps-3">
                                <p className="text-white text-end">
                                    There are several options for investment to
                                    obtain Citizenship in Antigua and Barbuda.
                                    To acquire Citizenship, you can donate
                                    $100,000 to the National Development Fund,
                                    purchase real estate starting from $200,000,
                                    or invest $150,000 in a university. 
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="d-flex bg-second-passport">
                <Container className="py-5 text-center">
                    <div>
                        <h6 className="text-white fw-bold mb-0">How to Get</h6>
                    </div>

                    <div>
                        <h4 className="fw-bold text-black">
                            a Second Passport
                        </h4>
                    </div>

                    <div>
                        <p className="text-black">
                            There are various options to check before choosing a
                            country for a second passport. You must check the
                            choices below that make relocating to another
                            country easy and smooth. This all depends upon your
                            preference as well. Hiring Saad Ahsan Residency &
                            Citizenship is a reliable option in this regard. Our
                            team of experts will also tell you about family
                            members’ participation in the Citizenship program.
                        </p>
                    </div>
                </Container>
            </div>

            <div className="bg-white">
                <Container className="py-5">
                    <Row>
                        <Col
                            md={3}
                            lg={3}
                            xs={12}
                            className="d-flex flex-column"
                        >
                            <div className="justify-content-center">
                                <div>
                                    <h3 className="fw-bold mb-2">
                                        Requirements for the CBI Programs
                                    </h3>
                                </div>
                                <div>
                                    <p className="text-black">
                                        The basic requirements for CBI Programs
                                        include a clean record without
                                        involvement into any crime, good health
                                        history and qualify the investment
                                        requirements.
                                    </p>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <Row className="gap-3 justify-content-end">
                                <Col
                                    md={3}
                                    lg={3}
                                    className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center"
                                >
                                    <div className="text-center">
                                        <svg
                                            width="81"
                                            height="99"
                                            viewBox="0 0 81 99"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M40.2647 72.0469L43.365 77.1836L49.2084 78.5448L45.2808 83.0805L45.7922 89.0585L40.2647 86.7246L34.7373 89.0585L35.2489 83.0805L31.3213 78.5448L37.1647 77.1836L40.2647 72.0469Z"
                                                fill="#A37F2C"
                                            />
                                            <path
                                                d="M31.9185 35.4851V42.2045H11.3213V35.4851C11.3213 32.0324 13.4993 29.0931 16.5547 27.9554C17.9339 29.6154 19.6985 30.7626 21.6209 30.7626C23.5411 30.7626 25.3057 29.6156 26.6849 27.9554C29.7405 29.0906 31.9185 32.0324 31.9185 35.4851Z"
                                                fill="#CDA240"
                                            />
                                            <path
                                                d="M16.5548 27.9554C14.767 25.8054 13.627 22.794 13.627 20.3025C13.627 15.8887 17.2049 12.3107 21.6211 12.3107C26.0349 12.3107 29.6129 15.8887 29.6129 20.3025C29.6129 22.794 28.4728 25.8054 26.685 27.9554C25.3058 29.6154 23.5412 30.7626 21.6211 30.7626C19.6984 30.7624 17.9338 29.6154 16.5548 27.9554Z"
                                                fill="#A37F2C"
                                            />
                                            <path
                                                d="M18.3205 28.0315C16.8937 29.4154 15.9397 31.9223 15.9397 34.7859V43.4048H12.147V34.7859C12.147 31.3927 14.2872 28.5005 17.2915 27.3835H17.2925C17.5054 27.6394 17.863 27.8554 18.3205 28.0315Z"
                                                fill="#A37F2C"
                                            />
                                            <path
                                                d="M22.402 31.7771C20.3437 31.7771 18.4548 30.55 16.9789 28.7737C15.0655 26.4718 13.8438 23.2472 13.8438 20.5791C13.8438 15.853 17.676 12.0217 22.402 12.0217C19.9532 12.0217 17.9684 15.853 17.9684 20.5791C17.9684 23.2472 18.6016 26.4718 19.5924 28.7737C20.3577 30.55 21.3357 31.7771 22.402 31.7771Z"
                                                fill="#A37F2C"
                                            />
                                            <path
                                                d="M50.8416 78.1323C50.653 77.5519 50.1748 77.1128 49.5804 76.9745L44.4527 75.7804L41.7324 71.2729C41.4172 70.7505 40.8518 70.4311 40.2416 70.4311C39.6314 70.4311 39.0661 70.7503 38.7507 71.2729L36.0304 75.7804L30.9028 76.9745C30.3083 77.1128 29.8301 77.552 29.6415 78.1323C29.4528 78.7126 29.5819 79.3493 29.9812 79.8104L33.4276 83.7902L32.9787 89.0356C32.9267 89.6435 33.1964 90.2344 33.6902 90.5931C33.9925 90.8127 34.3516 90.9255 34.7139 90.9255C34.9428 90.9255 35.1734 90.8802 35.3911 90.7883L40.2414 88.7404L45.0915 90.7883C45.6533 91.0256 46.2986 90.9516 46.7922 90.5931C47.2857 90.2345 47.5556 89.6437 47.5037 89.0358L47.0548 83.7904L50.5013 79.8106C50.9013 79.3493 51.0304 78.7128 50.8416 78.1323ZM43.9415 82.0663C43.6338 82.4215 43.4826 82.8863 43.5229 83.3548L43.7882 86.4577L40.9193 85.2463C40.7027 85.1548 40.4723 85.1092 40.2419 85.1092C40.0116 85.1092 39.7814 85.1548 39.5646 85.2463L36.6955 86.4577L36.9612 83.3548C37.0013 82.8861 36.8501 82.4215 36.5426 82.0663L34.5041 79.712L37.537 79.0057C37.9949 78.899 38.3901 78.6119 38.6329 78.2092L40.2421 75.5429L41.8514 78.2092C42.0942 78.6117 42.4894 78.8989 42.9472 79.0057L45.9802 79.712L43.9415 82.0663Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M78.7423 0.785713H1.74139C0.779384 0.785713 0 1.56548 0 2.5271V81.3003C0 82.2619 0.779384 83.0417 1.74139 83.0417C2.70339 83.0417 3.48277 82.2619 3.48277 81.3003V4.26848H77.0012V95.5172H3.48277V86.8728C3.48277 85.9112 2.70339 85.1315 1.74139 85.1315C0.779384 85.1315 0 85.9112 0 86.8728V97.2586C0 98.2202 0.779384 99 1.74139 99H78.7425C79.7045 99 80.4839 98.2202 80.4839 97.2586V2.5271C80.4837 1.56548 79.7043 0.785713 78.7423 0.785713Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M9.55713 35.6109V42.3304C9.55713 43.292 10.3365 44.0717 11.2985 44.0717H31.8957C32.8577 44.0717 33.6371 43.292 33.6371 42.3304V35.6109C33.6371 32.2922 31.9302 29.2289 29.2305 27.4457C30.5366 25.2631 31.3315 22.6804 31.3315 20.4284C31.3315 15.0615 26.965 10.6952 21.5984 10.6952C16.2299 10.6952 11.8627 15.0615 11.8627 20.4284C11.8627 22.6808 12.658 25.2641 13.9641 27.4467C11.2642 29.2306 9.55713 32.2939 9.55713 35.6109ZM21.5984 14.178C25.0449 14.178 27.8488 16.9819 27.8488 20.4284C27.8488 22.5231 26.8338 25.1513 25.3232 26.9679C25.3232 26.9679 25.3228 26.9683 25.3224 26.9686C24.6468 27.7822 23.2642 29.147 21.5982 29.147C19.9301 29.147 18.547 27.7822 17.8706 26.9679C16.36 25.1513 15.3451 22.5231 15.3451 20.4284C15.3452 16.9819 18.1505 14.178 21.5984 14.178ZM13.0399 35.6109C13.0399 33.3741 14.2482 31.3192 16.1321 30.1996C17.7807 31.774 19.6836 32.6296 21.5982 32.6296C23.5118 32.6296 25.4143 31.7737 27.0627 30.199C28.9462 31.3175 30.1543 33.3723 30.1543 35.6107V40.5888H13.0399V35.6109Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M68.5678 18.4167H42.2233C41.2613 18.4167 40.4819 19.1965 40.4819 20.1581C40.4819 21.1197 41.2613 21.8995 42.2233 21.8995H68.5678C69.5298 21.8995 70.3092 21.1197 70.3092 20.1581C70.3092 19.1963 69.5298 18.4167 68.5678 18.4167Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M68.5677 29.4741H65.3185C64.3565 29.4741 63.5771 30.2538 63.5771 31.2155C63.5771 32.1771 64.3565 32.9568 65.3185 32.9568H68.5677C69.5297 32.9568 70.3091 32.1771 70.3091 31.2155C70.3091 30.2536 69.5297 29.4741 68.5677 29.4741Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M42.2233 32.9568H60.2105C61.1725 32.9568 61.9519 32.1771 61.9519 31.2155C61.9519 30.2538 61.1725 29.4741 60.2105 29.4741H42.2233C41.2613 29.4741 40.4819 30.2538 40.4819 31.2155C40.4819 32.1771 41.2615 32.9568 42.2233 32.9568Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M42.2233 44.014H68.5678C69.5298 44.014 70.3092 43.2342 70.3092 42.2726C70.3092 41.311 69.5298 40.5312 68.5678 40.5312H42.2233C41.2613 40.5312 40.4819 41.311 40.4819 42.2726C40.4819 43.2342 41.2615 44.014 42.2233 44.014Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M23.6411 53.33C23.6411 54.2916 24.4205 55.0713 25.3825 55.0713H68.5674C69.5294 55.0713 70.3088 54.2916 70.3088 53.33C70.3088 52.3683 69.5294 51.5886 68.5674 51.5886H25.3825C24.4207 51.5886 23.6411 52.3681 23.6411 53.33Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M11.9162 55.0713H20.0427C21.0047 55.0713 21.784 54.2916 21.784 53.33C21.784 52.3683 21.0047 51.5886 20.0427 51.5886H11.9162C10.9542 51.5886 10.1748 52.3683 10.1748 53.33C10.1748 54.2916 10.9542 55.0713 11.9162 55.0713Z"
                                                fill="black"
                                            />
                                            <path
                                                d="M70.3094 64.3869C70.3094 63.4253 69.53 62.6456 68.568 62.6456H11.9162C10.9542 62.6456 10.1748 63.4253 10.1748 64.3869C10.1748 65.3486 10.9542 66.1283 11.9162 66.1283H68.568C69.53 66.1283 70.3094 65.3488 70.3094 64.3869Z"
                                                fill="black"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="fw-bold mt-2 mb-0 text-center">
                                            No Criminal Record 
                                        </p>
                                    </div>
                                </Col>
                                <Col
                                    md={3}
                                    lg={3}
                                    className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center"
                                >
                                    <div className="">
                                        <div className="text-center">
                                          <svg width="92" height="91" viewBox="0 0 92 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M62.1602 17.012H25.3299C24.1983 17.012 23.2837 16.0974 23.2837 14.9658C23.2837 13.8343 24.1983 12.9196 25.3299 12.9196H62.1602C63.2918 12.9196 64.2064 13.8343 64.2064 14.9658C64.2064 16.0974 63.2918 17.012 62.1602 17.012Z" fill="black"/>
                                            <path d="M41.699 27.2426H33.5145C32.3829 27.2426 31.4683 26.328 31.4683 25.1964C31.4683 24.0648 32.3829 23.1502 33.5145 23.1502H41.699C42.8306 23.1502 43.7452 24.0648 43.7452 25.1964C43.7452 26.328 42.8306 27.2426 41.699 27.2426Z" fill="black"/>
                                            <path d="M62.1604 27.2426H49.8836C48.752 27.2426 47.8374 26.328 47.8374 25.1964C47.8374 24.0648 48.752 23.1502 49.8836 23.1502H62.1604C63.292 23.1502 64.2066 24.0648 64.2066 25.1964C64.2066 26.328 63.292 27.2426 62.1604 27.2426Z" fill="black"/>
                                            <path d="M41.6989 76.3498C48.4792 76.3498 53.9757 70.8533 53.9757 64.073C53.9757 57.2927 48.4792 51.7962 41.6989 51.7962C34.9186 51.7962 29.4221 57.2927 29.4221 64.073C29.4221 70.8533 34.9186 76.3498 41.6989 76.3498Z" fill="#CDA240"/>
                                            <path d="M46.3027 61.7711H44.0008V59.4692C44.0008 58.1985 42.9696 57.1673 41.6989 57.1673C40.4283 57.1673 39.397 58.1985 39.397 59.4692V61.7711H37.0951C35.8245 61.7711 34.7932 62.8023 34.7932 64.073C34.7932 65.3436 35.8245 66.3749 37.0951 66.3749H39.397V68.6768C39.397 69.9474 40.4283 70.9787 41.6989 70.9787C42.9696 70.9787 44.0008 69.9474 44.0008 68.6768V66.3749H46.3027C47.5733 66.3749 48.6046 65.3436 48.6046 64.073C48.6046 62.8023 47.5733 61.7711 46.3027 61.7711Z" fill="white"/>
                                            <path d="M78.5293 88.6266V49.75H85.2223C87.9886 49.75 89.9571 52.4365 89.1242 55.0741L78.5293 88.6266Z" fill="white"/>
                                            <path d="M90.1721 50.2125C89.0037 48.6186 87.199 47.704 85.2225 47.704H80.5757V41.5656C80.5757 38.1812 77.8217 35.4272 74.4373 35.4272H72.3911V2.68905C72.3911 1.55748 71.4765 0.642857 70.3449 0.642857H17.1456C16.014 0.642857 15.0994 1.55748 15.0994 2.68905V25.1964H6.915C3.53064 25.1964 0.776611 27.9505 0.776611 31.3348V84.5342C0.776611 87.9185 3.53064 90.6726 6.915 90.6726H78.5295C78.5295 90.6726 78.5295 90.6726 78.5316 90.6726C78.7854 90.6726 79.0248 90.6133 79.2539 90.5273C79.3315 90.4988 79.395 90.4558 79.4687 90.4169C79.612 90.3411 79.7428 90.2573 79.8637 90.1508C79.9333 90.0915 79.9926 90.0301 80.054 89.9605C80.1543 89.846 80.236 89.7171 80.3097 89.5799C80.3526 89.498 80.3996 89.4244 80.4324 89.3365C80.4447 89.3037 80.4693 89.2772 80.4794 89.2423L91.0783 55.692C91.6718 53.8034 91.3425 51.8064 90.1721 50.2125ZM19.1918 4.73525H68.2989V35.4272H29.4224V31.335C29.4224 27.9506 26.6684 25.1966 23.284 25.1966H19.1918V4.73525ZM4.86881 84.5344V31.3348C4.86881 30.2054 5.78554 29.2886 6.915 29.2886H23.284C24.4135 29.2886 25.3302 30.2054 25.3302 31.3348V37.4732C25.3302 38.6048 26.2448 39.5194 27.3764 39.5194H70.3451H74.4373C75.5668 39.5194 76.4835 40.4361 76.4835 41.5656V49.7502V86.5805H6.915C5.78554 86.5804 4.86881 85.6638 4.86881 84.5344ZM87.1766 54.4603L80.5757 75.3554V51.7962H85.2225C85.8793 51.7962 86.4809 52.0991 86.8716 52.631C87.2645 53.1651 87.373 53.8301 87.1766 54.4603Z" fill="black"/>
                                          </svg>
                                        </div>
                                        <div>
                                            <p className="fw-bold mt-2 mb-0 text-center">
                                              Excellent Health History
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                                <Col
                                    md={3}
                                    lg={3}
                                    className="border rounded border-primary bg-gray d-flex flex-column justify-content-center align-items-center"
                                >
                                    <div className="py-3">
                                        <div className="text-center">
                                          <svg width="96" height="95" viewBox="0 0 96 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M39.8163 27.8794C36.3994 27.8794 33.6208 25.1009 33.6208 21.684C33.6208 18.2671 36.3994 15.4885 39.8163 15.4885C43.2332 15.4885 46.0117 18.2671 46.0117 21.684C46.0117 25.1009 43.2328 27.8794 39.8163 27.8794Z" fill="#CDA240"/>
                                            <path d="M56.8534 21.684C53.4365 21.684 50.658 18.9054 50.658 15.4885C50.658 12.0716 53.4365 9.29311 56.8534 9.29311C60.2703 9.29311 63.0488 12.0716 63.0488 15.4885C63.0488 18.9054 60.2703 21.684 56.8534 21.684Z" fill="#CDA240"/>
                                            <path d="M38.2674 6.19541H35.1697V13.9398H38.2674V6.19541Z" fill="black"/>
                                            <path d="M44.4627 4.64639H41.365V13.9395H44.4627V4.64639Z" fill="black"/>
                                            <path d="M55.305 1.54867H52.2073V7.74409H55.305V1.54867Z" fill="black"/>
                                            <path d="M61.5003 -1.52588e-05H58.4026V7.74442H61.5003V-1.52588e-05Z" fill="black"/>
                                            <path d="M95.5287 29.0517L93.6873 21.684H86.2822V24.7817H89.4357L79.7881 38.0475L72.228 31.9991L64.5394 39.6877C64.2496 37.4031 62.3153 35.6235 59.9518 35.6235H59.5229L65.7184 24.7813H30.8657L36.7096 34.389L31.5117 38.7212H1.09502V41.8189H32.6328L41.7277 34.2403L51.3073 36.9772L54.5663 41.049C54.9968 41.5879 55.1875 42.2633 55.1006 42.948C55.0123 43.6326 54.6608 44.2383 54.1077 44.6533C53.1088 45.4043 51.6867 45.3006 50.8024 44.418L47.677 41.2925L38.8501 48.3537L39.7577 49.4874C39.465 53.4075 37.6946 57.2209 34.6666 60.3341C34.6448 60.3573 34.6263 60.382 34.6045 60.4038H33.9879L30.8902 58.8548H1.09502V61.9525H30.1576L32.4359 63.0908C30.5756 65.8277 29.4327 68.9624 29.095 72.2739L22.7787 65.9592L0 88.7389L2.19004 90.9289L22.779 70.34L29.1138 76.6748C30.266 86.267 38.4843 94.0686 48.2777 94.4635C48.5595 94.4744 48.8401 94.4806 49.1186 94.4806C54.3459 94.4806 59.2682 92.5057 63.0552 88.8674C67.0467 85.0355 69.2443 79.878 69.2443 74.3454C69.2443 69.3378 67.4075 64.628 64.0867 60.9309C64.4026 60.3037 64.5979 59.6065 64.5979 58.8568C64.5979 57.6627 64.1317 56.5832 63.3899 55.7591C64.1333 54.935 64.5979 53.8555 64.5979 52.6614C64.5979 51.4672 64.1317 50.3878 63.3899 49.5637C64.1333 48.7396 64.5979 47.6601 64.5979 46.466C64.5979 45.7503 64.4228 45.0812 64.1317 44.4758L72.4567 36.1508L80.3852 42.4933L91.7784 26.8267L92.5235 29.8051L95.5287 29.0517ZM61.5005 40.2702C61.5005 41.1237 60.805 41.8189 59.9515 41.8189H58.1348C57.9938 40.8415 57.619 39.9091 56.984 39.1147L56.6681 38.7212H59.9515C60.805 38.7212 61.5005 39.4167 61.5005 40.2702ZM41.0028 30.8112L39.1164 32.3834L36.3765 27.8794H60.3807L55.9557 35.6241H54.1916L53.1088 34.2704L41.0028 30.8112ZM55.9646 47.1318C56.7438 46.5479 57.32 45.7797 57.704 44.9169H59.9515C60.805 44.9169 61.5005 45.6125 61.5005 46.466C61.5005 47.3194 60.805 48.015 59.9515 48.015H54.1975C54.8217 47.8299 55.4211 47.5392 55.9646 47.1318ZM61.5005 52.6614C61.5005 53.5149 60.805 54.2104 59.9515 54.2104H53.7561C52.9026 54.2104 52.2071 53.5149 52.2071 52.6614C52.2071 51.8079 52.9026 51.1124 53.7561 51.1124H59.9515C60.805 51.112 61.5005 51.8076 61.5005 52.6614ZM61.5005 58.8568C61.5005 59.7103 60.805 60.4058 59.9515 60.4058H53.7561C52.9026 60.4058 52.2071 59.7103 52.2071 58.8568C52.2071 58.0033 52.9026 57.3078 53.7561 57.3078H59.9515C60.805 57.3075 61.5005 58.003 61.5005 58.8568ZM60.9104 86.6338C57.5355 89.8755 53.1164 91.5468 48.4032 91.3687C39.5608 91.0125 32.2347 83.5159 32.0751 74.6583C31.9931 70.0908 33.7014 65.7709 36.8857 62.4951C40.5812 58.6959 42.6737 53.9639 42.8753 49.1004L47.446 45.4436L48.6107 46.6084C48.7859 46.7835 48.9795 46.9276 49.1698 47.073C49.2967 48.0256 49.7041 48.882 50.3174 49.562C49.5739 50.3861 49.1094 51.4656 49.1094 52.6597C49.1094 53.8539 49.5756 54.9334 50.3174 55.7574C49.5739 56.5815 49.1094 57.661 49.1094 58.8552C49.1094 60.0493 49.5756 61.1288 50.3174 61.9529H47.5603V65.0506H46.7858C43.7965 65.0506 41.3649 67.4822 41.3649 70.4715C41.3649 73.4608 43.7965 75.8924 46.7858 75.8924H51.4326C52.7136 75.8924 53.7558 76.9349 53.7558 78.2156C53.7558 79.4963 52.7133 80.5404 51.4326 80.5404H46.7858C45.5048 80.5404 44.4626 79.498 44.4626 78.2172V77.4427H41.3649V78.2172C41.3649 81.2066 43.7965 83.6382 46.7858 83.6382H47.5603V86.7359H50.658V83.6382H51.4326C54.4219 83.6382 56.8535 81.2066 56.8535 78.2172C56.8535 75.2279 54.4219 72.7963 51.4326 72.7963H46.7858C45.5048 72.7963 44.4626 71.7538 44.4626 70.4731C44.4626 69.1921 45.5051 68.1499 46.7858 68.1499H51.4326C52.7136 68.1499 53.7558 69.1924 53.7558 70.4731V71.2476H56.8535V70.4731C56.8535 67.4838 54.4219 65.0522 51.4326 65.0522H50.658V62.2952C51.4821 63.0386 52.5616 63.5032 53.7558 63.5032H59.9512C60.6328 63.5032 61.2768 63.3469 61.861 63.0819C64.6227 66.1952 66.1466 70.1477 66.1466 74.345C66.1469 79.0255 64.2866 83.3907 60.9104 86.6338Z" fill="black"/>
                                          </svg>
                                        </div>
                                        <div>
                                            <p className="fw-bold mb-0 mt-2 text-center">
                                            Meet Investment/Donation requirements
                                            </p>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Investment;
