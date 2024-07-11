import React from 'react';
import logo from "../../assets/saad-ahsan-logo.png"
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

import CustomDropdown from "@/Components/CustomDropdown.jsx";
const Navbar = () => {
    return (
        <nav className="d-flex align-items-center justify-content-between container-fluid px-5 py-3 fw-medium">
            <div className="logo">
                <a href="">
                    <img className="img-fluid" src={logo} alt="logo"/>
                </a>
            </div>
            <div className="__nav_links d-flex gap-4 d-md-none d-none d-lg-flex">
                <div className="">
                    <CustomDropdown color="" name="Citizenship" children={[
                        {
                            name: 'Test',
                            href: 'test'
                        }
                    ]}/>
                </div>

                <div className="">
                    <CustomDropdown name="Residency" children={[
                        {
                            name: "test",
                            href: "test",
                        }
                    ]}/>
                </div>

                <div className="">
                    <CustomDropdown name="Skilled" children={[
                        {
                            name: "test",
                            href: "test",
                        }
                    ]}/>
                </div>

                <div className="">
                    <CustomDropdown name="Services" children={[
                        {
                            name: "test",
                            href: "test",
                        }
                    ]}/>
                </div>

                <div className="">
                    <CustomDropdown name="Media" children={[
                        {
                            name: "test",
                            href: "test",
                        }
                    ]} />
                </div>

                <div className="">
                    <CustomDropdown name="About" children={[
                        {
                            name: "test",
                            href: "test",
                        }
                    ]}/>
                </div>

                <div className="">
                    <a href=""
                       className="__contact_us">
                        Contact Us
                    </a>
                </div>

                <div className="">
                    <a href="" className="">
                        <IoSearch className="__search" size={22}/>
                    </a>
                </div>

                <div className="">
                    <a href="" className="">
                        <IoMenu className="__menu" size={22}/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
