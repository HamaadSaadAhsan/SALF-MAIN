import ContactHeader from "@/Components/ContactHeader";
import Navbar from "@/Components/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Row";
import { BsTiktok, BsInstagram, BsYoutube, BsTwitterX, BsWhatsapp } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";

import SaadAhsanLogo from "../../assets/saad-ahsan-logo-footer.png"

export default function Layout({ children }) {
    return (
        <div className="">
            {/* Layout Header */}
            <header>
                <div className="container-fluid bg-dark px-4 py-3 bg-black m-0">
                    <ContactHeader
                        className="d-flex gap-3 justify-content-end text-decoration-none align-items-center"
                        phoneNumber="+92 301 84 88 944"
                    />
                </div>
                <Navbar />
            </header>
            {children}

            <footer className="__footer bg-black" style={{ height: '423px' }}>
                <Container className="pt-5 pb-0 align-items-center">
                    <Row className="mt-5">
                        <Col className="">
                            <div className="d-flex">
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-column">
                                        <div>
                                            <h5 className="mb-1 text-primary fw-bold">
                                                Programs
                                            </h5>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Citizenship
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Residency
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-0">
                                                Skilled Immigration
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column ms-5">
                                        <div>
                                            <h5 className="mb-1 text-primary fw-bold">
                                                Other Services
                                            </h5>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Business Formation
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Visa Services
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-0">
                                                Bank AC Setup
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column ms-5">
                                        <div>
                                            <h5 className="mb-1 text-primary fw-bold">
                                                Contact
                                            </h5>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                About
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Blog
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-1">
                                                Team
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-white mb-0">
                                                Location
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="d-flex flex-column ms-auto"  style={{ marginTop: '-8rem' }}>
                                    <div className="bg-primary p-4">
                                        <div className="mb-4">
                                            <h4 className="text-white fw-bold">
                                                Newsletter
                                            </h4>
                                        </div>

                                        <div>
                                            <form>
                                                <div className="row">
                                                    <div className="col-auto pe-0">
                                                        <input
                                                            className="form-control rounded-0"
                                                            type="email"
                                                            name="email"
                                                            placeholder="Email Address"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="col-auto ps-1">
                                                        <button className="btn rounded-0 bg-black text-white fw-bold">SUBSCRIBE</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="d-flex flex-row mt-4 align-items-center">
                                            <BsWhatsapp size={27} color="white" className=""/>
                                            <BsInstagram size={27} color="white" className="ms-4" />
                                            <BsTiktok size={27} color="white" className="ms-4" />
                                            <BiLogoFacebook size={27} color="white" className="ms-4" />
                                            <BsTwitterX size={24} color="white" className="ms-4" />
                                            <BsYoutube size={27} color="white" className="ms-4" />
                                        </div>
                                        <div className="mt-3">
                                            <div className="d-flex">
                                                <div className="d-flex align-items-center">
                                                    <div>
                                                        <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.2511 23C14.3682 22.8014 13.4797 22.6126 12.6063 22.3763C12.1224 22.2316 11.6487 22.0517 11.1888 21.8379C10.6446 21.5996 10.4486 21.1467 10.6427 20.66C10.8368 20.1733 11.2725 20.0084 11.8224 20.1852C12.8289 20.505 13.824 20.9103 14.8553 21.095C16.4821 21.389 18.0709 21.2023 19.4618 20.1336C20.5026 19.339 20.6034 18.2345 19.6521 17.3525C19.0736 16.8084 18.4445 16.3259 17.7741 15.9124C16.9864 15.4297 16.2043 15.5767 15.5384 16.2441C15.0209 16.7646 14.5166 17.2969 14.0048 17.8194C13.4549 18.3815 13.2228 18.4153 12.5359 18.0418C10.3626 16.8194 8.44572 15.1552 6.89817 13.1473C6.10757 12.0905 5.37816 10.9854 4.71386 9.83784C4.35234 9.24191 4.43606 8.94195 4.90413 8.43342C5.41596 7.88517 5.94682 7.35479 6.44533 6.79461C7.11889 6.03778 7.2673 5.30478 6.75927 4.4228C6.2921 3.62957 5.74549 2.89044 5.12865 2.21785C4.58448 1.60801 3.63312 1.67952 3.06421 2.2834C2.28017 3.13373 1.81433 4.24949 1.75134 5.42794C1.50779 8.44733 2.60565 11.0456 4.15066 13.479C5.24039 15.1597 6.58178 16.6466 8.12352 17.8829C8.68292 18.3378 8.77425 18.9377 8.36707 19.3589C8.01316 19.7263 7.59457 19.7204 7.09796 19.3191C5.22512 17.8059 3.62149 15.9609 2.3602 13.8683C1.26234 12.0408 0.457491 10.0941 0.137835 7.94277C-0.217972 5.49548 0.0560186 3.19518 1.66001 1.23456C2.8454 -0.21157 4.81851 -0.432065 6.19797 0.811448C7.28823 1.79275 8.20534 2.95482 8.5992 4.45259C8.76261 5.02699 8.78104 5.63574 8.65269 6.21977C8.52434 6.80379 8.25357 7.34327 7.86665 7.78584C7.41381 8.34006 6.9153 8.85256 6.40918 9.41075C8.04502 12.2611 10.3334 14.6426 13.0687 16.3414C13.3807 15.9859 13.6813 15.6104 14.02 15.2688C15.6564 13.5823 17.3365 13.3956 19.2525 14.7344C19.8758 15.1972 20.4689 15.7029 21.0277 16.2481C21.5833 16.7606 21.8097 17.4757 22 18.1988V19.1165C21.9429 19.3152 21.8877 19.4979 21.8307 19.6886C21.4292 21.0136 20.4436 21.7585 19.3096 22.261C18.5199 22.6107 17.6485 22.7596 16.8132 23H15.2511Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="mb-0 text-white fw-bold">
                                                            <a href="tel:+923018488944">+92 301 84 88 944</a>
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="d-flex ms-4 align-items-center">
                                                    <div>
                                                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M12.5019 1.39753e-07C10.0295 -0.000369474 7.6126 0.732427 5.55674 2.10572C3.50088 3.47901 1.89843 5.43111 0.952048 7.71516C0.00566614 9.9992 -0.242142 12.5126 0.239962 14.9375C0.722066 17.3624 1.91243 19.5898 3.66051 21.3382C5.40859 23.0865 7.63587 24.2772 10.0607 24.7597C12.4855 25.2421 14.9989 24.9947 17.2831 24.0487C19.5673 23.1026 21.5196 21.5005 22.8932 19.4448C24.2668 17.3892 25 14.9723 25 12.5C24.9946 9.18678 23.6761 6.0108 21.3335 3.66782C18.9909 1.32485 15.8151 0.00592981 12.5019 1.39753e-07ZM23.2378 11.6366H18.5267C18.409 7.73844 17.5026 4.43265 16.1123 2.35274C18.065 3.05292 19.7747 4.3009 21.0367 5.94736C22.2987 7.59382 23.0597 9.56902 23.2284 11.6366H23.2378ZM12.5019 23.2733C10.5509 23.2733 8.39065 19.2443 8.20377 13.369H16.8C16.6131 19.2443 14.4435 23.2733 12.5019 23.2733ZM8.20377 11.6366C8.39065 5.75384 10.5603 1.73231 12.5019 1.73231C14.4435 1.73231 16.6131 5.76132 16.8093 11.6366H8.20377ZM8.8896 2.35274C7.49926 4.43265 6.59292 7.73844 6.47706 11.6366H1.75662C1.92502 9.56917 2.68557 7.59402 3.94727 5.94754C5.20898 4.30106 6.91838 3.05301 8.87091 2.35274H8.8896ZM1.75662 13.3615H6.45837C6.57423 17.2597 7.48057 20.5655 8.87091 22.6454C6.91838 21.9451 5.20898 20.6971 3.94727 19.0506C2.68557 17.4041 1.92502 15.429 1.75662 13.3615ZM16.1123 22.6454C17.5026 20.5655 18.409 17.2597 18.5267 13.3615H23.2284C23.0597 15.4291 22.2987 17.4043 21.0367 19.0508C19.7747 20.6972 18.065 21.9452 16.1123 22.6454Z" fill="white"/>
                                                        </svg>
                                                    </div>
                                                    <div className="ms-2">
                                                        <p className="mb-0 text-white fw-md">
                                                            <a href="mailto:info@saadahsan.com">info@saadahsan.com</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </Col>
                    </Row>

                    <hr className="fw-bold text-white mt-4"/>
                    
                    <div className="d-flex justify-content-between mt-5">
                        <div className="d-flex flex-co me-auto">
                            <img src={SaadAhsanLogo} className="img-fluid"/>
                        </div>

                        <div className="d-flex flex-col">
                            <div className="d-flex align-items-center">
                                <p className="mb-0 text-white">2023 Saad Ahsan Residency & Citizenship.</p>
                                <p className="mb-0 text-white ms-4"> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </footer>
        </div>
    );
}
